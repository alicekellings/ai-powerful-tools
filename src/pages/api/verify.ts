import type { NextApiRequest, NextApiResponse } from 'next';

import { DEFAULT_PRODUCT_ID, PRODUCTS } from '../../config/products';

// Define verify response structure
interface VerifyResponse {
  valid: boolean;
  licenseMsg: string; // Used by desktop app
  message?: string; // Optional fallback
  email?: string;
  payhipDebug?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyResponse>,
) {
  // [SECURITY] 1. Allow only POST requests
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ valid: false, licenseMsg: 'Method Not Allowed' });
  }

  const { licenseKey, productId } = req.body;

  // [SECURITY] 2. Input Validation (Sanitization)
  if (!licenseKey || typeof licenseKey !== 'string') {
    return res
      .status(400)
      .json({ valid: false, licenseMsg: 'Missing or invalid key format' });
  }

  // productId is optional - use default if not provided (for backward compatibility)
  if (productId && (typeof productId !== 'string' || !productId.trim())) {
    return res
      .status(400)
      .json({ valid: false, licenseMsg: 'Invalid product ID format' });
  }

  // Trim and limit length (pre-empt brute force with massive payloads)
  const cleanKey = licenseKey.trim();
  if (cleanKey.length > 50) {
    return res.status(400).json({ valid: false, licenseMsg: 'Key too long' });
  }

  // Validate product ID if provided
  let selectedProduct;
  if (productId) {
    selectedProduct = PRODUCTS.find((p) => p.id === productId);
    if (!selectedProduct) {
      return res
        .status(400)
        .json({ valid: false, licenseMsg: 'Invalid product ID' });
    }
  } else {
    // Use default product for backward compatibility
    selectedProduct = PRODUCTS.find((p) => p.id === DEFAULT_PRODUCT_ID);
    if (!selectedProduct) {
      // Fallback to first product if default not found
      const [firstProduct] = PRODUCTS; // Use array destructuring
      selectedProduct = firstProduct;
      if (!selectedProduct) {
        return res
          .status(500)
          .json({ valid: false, licenseMsg: 'No products configured' });
      }
    }
  }

  // Regex Check: Alphanumeric and dashes only (Prevent SQLi/Command Injection patterns)
  const keyPattern = /^[A-Z0-9-]+$/i;
  if (!keyPattern.test(cleanKey)) {
    return res
      .status(400)
      .json({ valid: false, licenseMsg: 'Invalid characters in key' });
  }

  // [SECURITY] Configuration Check
  const { PAYHIP_API_KEY } = process.env;
  if (!PAYHIP_API_KEY) {
    console.error('SERVER ERROR: Payhip API Key not set.');
    return res
      .status(500)
      .json({ valid: false, licenseMsg: 'Server configuration error' });
  }

  try {
    // Use the selected product's Payhip product ID
    const productKey = selectedProduct.payhipProductId;

    const apiUrl = `https://payhip.com/api/v1/license/verify?product_link=${encodeURIComponent(
      productKey,
    )}&license_key=${encodeURIComponent(cleanKey)}`; // Use cleaned key

    const payhipRes = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'payhip-api-key': PAYHIP_API_KEY,
        'User-Agent': `${selectedProduct.name}-Verifier/1.0`,
      },
    });

    /*
    // --- [备用方案] Payhip API V2 (Product Secret Key) ---
    // 文档: https://payhip.com/api-docs#verify-license-v2
    // 如果你想改用 Product Secret Key (在 Vercel 环境变量中设置 PAYHIP_PRODUCT_SECRET)，
    // 可以替换上面的 fetch 代码如下:

    const apiUrlV2 = `https://payhip.com/api/v2/license/verify?product_link=${encodeURIComponent(productKey)}&license_key=${encodeURIComponent(cleanKey)}`;
    const payhipRes = await fetch(apiUrlV2, {
        method: 'GET',
        headers: {
            'product-secret-key': process.env.PAYHIP_PRODUCT_SECRET!, // 记得在 Vercel 设置这个变量
            'User-Agent': `${selectedProduct.name}-Verifier/1.0`,
        },
    });
    */

    const data = await payhipRes.json();

    // 修正: Payhip API 文档说返回 success: true，但实际返回的是 data 对象包含 enabled: true
    // 如果 data.data 存在且 enabled 为 true (或者 license_key 存在)，就算成功
    const isSuccess =
      data.success === true || (data.data && data.data.enabled === true);

    if (payhipRes.status === 200 && isSuccess) {
      return res.status(200).json({
        valid: true,
        licenseMsg: `${selectedProduct.name} license is active`,
        email: data.data?.customer_email || '',
      });
    }

    // 验证失败时，返回 Payhip 的原始错误信息
    return res.status(200).json({
      valid: false,
      licenseMsg:
        data.message ||
        `License not found or invalid for ${selectedProduct.name}`,
      payhipDebug: data,
    });
  } catch (error) {
    console.error('Verify Error:', error);
    return res
      .status(500)
      .json({ valid: false, licenseMsg: 'Verification failed internal error' });
  }
}

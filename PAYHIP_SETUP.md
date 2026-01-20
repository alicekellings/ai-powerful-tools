# Payhip Integration Guide

## 1. How it works
We use **Payhip Overlay Checkout**. Customers stay on your site during purchase.

**The Flow:**
1. User clicks "Buy Now" (we added class `payhip-buy-button`).
2. Payhip Popup appears.
3. User pays.
4. **Payhip Server** verifies payment and grabs a License Key.
5. **Payhip Server** emails the License Key to the user.

## 2. Setup Steps

### Payhip Dashboard
1. **Create Product**: Add "Digital Product" (your software zip).
2. **Enable Keys**: In "Advanced Options", check **"Automatically generate license keys"**.
3. **Get Link**: Copy product link (e.g., `https://payhip.com/b/abcd`).

### Code Configuration
1. Open `src/utils/AppConfig.ts`.
2. Paste your link:
   ```typescript
   export const AppConfig = {
     // ...
     payhip_link: 'https://payhip.com/b/abcd',
   };
   ```

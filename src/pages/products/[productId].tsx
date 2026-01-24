import type { GetStaticPaths, GetStaticProps } from 'next';

import { PRODUCTS } from '../../config/products';
import { ProductPageTemplate } from '../../templates/ProductPageTemplate';

interface ProductPageProps {
  product: (typeof PRODUCTS)[number] | null;
}

const ProductPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return (
      <div className="font-sans text-gray-900 antialiased">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-center text-4xl font-bold">Product Not Found</h1>
          <p className="mt-4 text-center">
            The requested product does not exist.
          </p>
        </div>
      </div>
    );
  }

  return <ProductPageTemplate product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PRODUCTS.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const productId = params?.productId as string;
  const product = PRODUCTS.find((p) => p.id === productId);

  return {
    props: {
      product: product || null,
    },
  };
};

export default ProductPage;

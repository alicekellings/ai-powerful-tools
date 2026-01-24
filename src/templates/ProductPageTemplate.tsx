import { BonusSection } from '../components/BonusSection';
import { PainSection } from '../components/PainSection';
import { ProductSpecificOfferSection } from '../components/ProductSpecificOfferSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { SimpleFooter } from '../components/SimpleFooter';
import { SolutionSection } from '../components/SolutionSection';
import { TopBar } from '../components/TopBar';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

interface ProductPageTemplateProps {
  product: {
    id: string;
    name: string;
    title: string;
    description: string;
    payhipProductId: string;
    payhipLink: string;
  };
}

const ProductPageTemplate = ({ product }: ProductPageTemplateProps) => {
  // Create a temporary config with product-specific data
  const productConfig = {
    ...AppConfig,
    site_name: product.name,
    title: product.title,
    description: product.description,
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Meta
        title={productConfig.title}
        description={productConfig.description}
      />
      <TopBar />
      <Hero product={product} />
      <PainSection />
      <SolutionSection />
      <BonusSection />
      <ReviewsSection />
      <ProductSpecificOfferSection
        payhipLink={product.payhipLink}
        productName={product.name}
      />
      <SimpleFooter />
    </div>
  );
};

export { ProductPageTemplate };

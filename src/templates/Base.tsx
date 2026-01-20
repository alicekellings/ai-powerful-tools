import { BonusSection } from '../components/BonusSection';
import { OfferSection } from '../components/OfferSection';
import { PainSection } from '../components/PainSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { SimpleFooter } from '../components/SimpleFooter';
import { SolutionSection } from '../components/SolutionSection';
import { TopBar } from '../components/TopBar';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Base = () => (
  <div className="font-sans text-gray-900 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopBar />
    <Hero />
    <PainSection />
    <SolutionSection />
    <BonusSection />
    <ReviewsSection />
    <OfferSection />
    <SimpleFooter />
  </div>
);

export { Base };

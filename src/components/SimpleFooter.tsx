import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const SimpleFooter = () => (
  <footer className="bg-gray-800 py-10 text-center text-sm text-gray-400">
    <Section>
      <p className="mb-4">
        Copyright © {new Date().getFullYear()} {AppConfig.site_name}. All
        rights reserved.
      </p>
      <p className="mb-4">
        Disclaimer: This site is not a part of the Facebook website or Facebook
        Inc. Additionally, This site is NOT endorsed by Facebook in any way.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="transition-colors hover:text-white">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="transition-colors hover:text-white">
          Terms of Service
        </a>
        <span>|</span>
        <a href="#" className="transition-colors hover:text-white">
          Support
        </a>
      </div>
    </Section>
  </footer>
);

export { SimpleFooter };

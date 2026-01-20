import { AppConfig } from '../utils/AppConfig';

const OfferSection = () => (
  <section id="buy-now" className="bg-white py-20">
    <div className="mx-auto max-w-screen-md px-4">
      <div className="relative rounded-3xl border-4 border-action bg-white p-8 text-center shadow-2xl md:p-12">
        <div className="absolute -right-6 -top-6 rotate-6 rounded-lg bg-yellow-400 px-6 py-2 text-lg font-black text-black shadow-md">
          SAVE 50%
        </div>

        <h2 className="mb-2 text-3xl font-black md:text-4xl">
          Get SmartCut Pro Lifetime Access
        </h2>
        <p className="mb-8 text-lg text-gray-600">Plus All Bonuses Included</p>

        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="text-2xl font-bold text-gray-400 line-through">
            $99.00
          </span>
          <span className="text-6xl font-black text-action">$49.00</span>
        </div>

        <ul className="mx-auto mb-10 max-w-xs space-y-3 text-left text-lg">
          <li>✅ Lifetime License Key</li>
          <li>✅ Unlimited Projects</li>
          <li>✅ Export PDF & Image</li>
          <li>
            ✅ <strong>Bonus:</strong> Profit Calculator
          </li>
          <li>
            ✅ <strong>Bonus:</strong> Jig Plans PDF
          </li>
        </ul>

        <a
          href={AppConfig.payhip_link}
          className="payhip-buy-button inline-block w-full max-w-md animate-pulse rounded-full bg-action px-6 py-5 text-2xl font-extrabold text-white shadow-xl transition-transform hover:-translate-y-1 hover:bg-action-hover hover:shadow-2xl"
          data-theme="none"
        >
          Click Here To Buy Now
        </a>
        <p className="mt-3 text-sm text-gray-500">
          Instant Download • Secure Payment
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-xl border border-green-200 bg-green-50 p-6 md:flex-row">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-green-500 text-center text-xs font-bold leading-tight text-white shadow-md">
            30 DAY
            <br />
            MONEY
            <br />
            BACK
          </div>
          <div className="text-left">
            <strong className="mb-1 block text-lg text-green-900">
              100% Risk-Free Guarantee
            </strong>
            <span className="text-sm leading-relaxed text-green-700">
              Try it for 30 days. If you don&apos;t save money on your first
              project, we&apos;ll refund every penny. No questions asked.
            </span>
          </div>
        </div>

        <div className="mt-8 opacity-70">
          <img
            src="https://via.placeholder.com/300x40/fff/ccc?text=Visa+Mastercard+PayPal+Stripe"
            alt="Payment Methods"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

export { OfferSection };

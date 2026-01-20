import Link from 'next/link';

import { Section } from '../layout/Section';

const Hero = () => (
  <header className="bg-gradient-to-b from-white to-gray-50 pb-10 pt-16 text-center">
    <Section yPadding="pt-0 pb-0">
      <h1 className="mb-6 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
        Stop Throwing Money
        <br />
        <span className="bg-gradient-to-r from-action to-pink-600 bg-clip-text text-transparent">
          In The Scrap Bin.
        </span>
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 md:text-2xl">
        The &quot;Secret Weapon&quot; Professional Cabinet Makers Use to Save
        Thousands on Plywood Every Year.
      </p>

      {/* VSL Placeholder */}
      <div className="group relative mx-auto mb-10 max-w-4xl cursor-pointer">
        <div className="aspect-w-16 aspect-h-9 flex items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-black shadow-2xl">
          <img
            src="https://via.placeholder.com/800x450/111/fff?text=Click+to+Watch+Demo+Video"
            alt="Demo Video"
            className="size-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-action text-4xl text-white shadow-lg transition-transform group-hover:scale-110">
              ▶
            </div>
          </div>
        </div>
      </div>

      <Link href="#buy-now">
        <button className="animate-pulse rounded-full border-b-4 border-rose-800 bg-action px-10 py-5 text-2xl font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:bg-action-hover hover:shadow-xl">
          Get Instant Access
        </button>
      </Link>
      <p className="mt-3 text-sm text-gray-500">
        Compatible with Windows 10 & 11 • No Monthly Fees
      </p>
    </Section>
  </header>
);

export { Hero };

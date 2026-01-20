import { Section } from '../layout/Section';

const BonusSection = () => (
  <section className="bg-white py-16">
    <Section>
      <div className="mx-auto max-w-4xl rounded-3xl border-4 border-dashed border-action bg-rose-50/50 p-8 md:p-12">
        <h3 className="mb-10 text-center text-3xl font-bold">
          🎁 Order Today and Get These
          <br />
          <span className="text-action">FREE Bonuses</span>
        </h3>

        <div className="space-y-8">
          <div className="flex flex-col items-center rounded-xl border border-rose-100 bg-white p-6 shadow-sm md:flex-row">
            <div className="mb-4 flex size-24 shrink-0 items-center justify-center rounded-lg bg-gray-200 font-bold text-gray-500 md:mb-0 md:mr-6">
              BONUS #1
            </div>
            <div className="text-center md:text-left">
              <h4 className="mb-2 text-xl font-bold text-action">
                The &quot;Profit Calculator&quot; Spreadsheet
              </h4>
              <p className="mb-2 text-gray-600">
                A specialized Excel template to calculate exactly how much to
                charge clients for your cabinets and furniture.
              </p>
              <span className="text-sm font-semibold text-gray-400 line-through">
                Value: $29.00 (Yours FREE)
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-rose-100 bg-white p-6 shadow-sm md:flex-row">
            <div className="mb-4 flex size-24 shrink-0 items-center justify-center rounded-lg bg-gray-200 font-bold text-gray-500 md:mb-0 md:mr-6">
              BONUS #2
            </div>
            <div className="text-center md:text-left">
              <h4 className="mb-2 text-xl font-bold text-action">
                10 Essential Workshop Jigs Plans
              </h4>
              <p className="mb-2 text-gray-600">
                PDF plans for the top 10 jigs that will speed up your workflow.
                Cross-cut sleds, stop blocks, and more.
              </p>
              <span className="text-sm font-semibold text-gray-400 line-through">
                Value: $19.00 (Yours FREE)
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </section>
);

export { BonusSection };

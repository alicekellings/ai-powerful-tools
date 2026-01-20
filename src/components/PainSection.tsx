import { Section } from '../layout/Section';

const PainSection = () => (
  <section className="border-t border-gray-200 bg-white py-20">
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-black leading-tight">
            Let&apos;s Face It...
            <br />
            <span className="text-action">Lumber Prices Are Crazy.</span>
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            You measure twice, cut once, but you still end up with a pile of
            useless scraps. Every time you throw away a large offcut, you are
            literally throwing dollar bills in the trash.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 text-2xl">❌</span>
              <span className="text-lg text-gray-800">
                <strong>Tired of manual math?</strong> Spending hours with a
                pencil and graph paper?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl">❌</span>
              <span className="text-lg text-gray-800">
                <strong>One mistake costs $80?</strong> Cut the wrong sheet and
                your profit margin vanishes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-2xl">❌</span>
              <span className="text-lg text-gray-800">
                <strong>Workshop cluttered?</strong> Too many &quot;I might use
                this later&quot; scraps taking up space.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x400/e2e8f0/94a3b8?text=Image:+Wasted+Wood+Pile"
            alt="Wasted Wood"
            className="rotate-1 rounded-xl shadow-lg transition-transform duration-500 hover:rotate-0"
          />
        </div>
      </div>
    </Section>
  </section>
);

export { PainSection };

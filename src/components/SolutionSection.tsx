import { Section } from '../layout/Section';

const SolutionSection = () => (
  <section className="bg-gray-900 py-20 text-center text-white">
    <Section>
      <h2 className="mb-12 text-4xl font-extrabold">
        Introducing: <span className="text-primary-500">SmartCut Pro</span>
      </h2>
      <p className="mx-auto mb-16 max-w-2xl text-xl text-gray-300">
        The professional cutting optimization software that thinks like a master
        carpenter, but calculates like a supercomputer.
      </p>

      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
        <div className="rounded-xl border border-white/20 bg-white/10 p-8 transition-colors hover:bg-white/20">
          <div className="mb-6 text-5xl">🧠</div>
          <h3 className="mb-4 text-2xl font-bold text-yellow-400">
            AI Optimization Engine
          </h3>
          <p className="text-gray-300">
            Enter your parts, enter your panel size. Click one button. Our
            algorithm finds the layout that uses the LEAST amount of wood
            possible.
          </p>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-8 transition-colors hover:bg-white/20">
          <div className="mb-6 text-5xl">🖨️</div>
          <h3 className="mb-4 text-2xl font-bold text-yellow-400">
            Shop-Ready PDF Prints
          </h3>
          <p className="text-gray-300">
            Don&apos;t bring your laptop to the dust. Export a clean,
            professional PDF cut map. Print it out, tape it to your saw, and
            just follow the lines.
          </p>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-8 transition-colors hover:bg-white/20">
          <div className="mb-6 text-5xl">📏</div>
          <h3 className="mb-4 text-2xl font-bold text-yellow-400">
            Kerf & Grain Control
          </h3>
          <p className="text-gray-300">
            We account for the thickness of your saw blade (Kerf) so your cuts
            are dead accurate. We also respect wood grain direction for
            aesthetic perfection.
          </p>
        </div>
      </div>
    </Section>
  </section>
);

export { SolutionSection };

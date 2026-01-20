import { Section } from '../layout/Section';

const ReviewsSection = () => (
  <section className="bg-gray-50 py-20">
    <Section>
      <h2 className="mb-12 text-center text-3xl font-bold">
        What Woodworkers Are Saying
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            name: 'Mike T.',
            role: 'Cabinet Maker, Texas',
            content:
              'I built a kitchen set last week. Thought I needed 12 sheets of plywood. SmartCut Pro showed me how to do it in 9 sheets. Saved me over $300 on one job.',
          },
          {
            name: 'David L.',
            role: 'DIY Hobbyist, UK',
            content:
              "The best $49 I ever spent. It's simple, it doesn't need internet, and it just works. The PDF export is a lifesaver.",
          },
          {
            name: 'Sarah J.',
            role: 'Furniture Designer',
            content:
              "Finally, software that understands 'Guillotine Cuts'. I tried other apps but they gave me impossible cuts. This one is made for table saws.",
          },
        ].map((review, index) => (
          <div key={index} className="rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-4 text-lg text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="mb-6 italic text-gray-700">
              &quot;{review.content}&quot;
            </p>
            <div className="flex items-center">
              <div className="mr-3 size-10 rounded-full bg-gray-300"></div>
              <div>
                <strong className="block text-sm">{review.name}</strong>
                <span className="text-xs text-gray-500">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </section>
);

export { ReviewsSection };

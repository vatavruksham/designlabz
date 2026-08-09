import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle('About',
    "Learn about DesignLabz's mission to make professional, on-brand graphic design accessible to everyone through AI."
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="About DesignLabz"
            title="Making Professional Design Accessible to Everyone"
            subtitle="We believe every brand deserves polished visuals — without hiring a designer for every graphic."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-display text-ink mb-4">Our Story</h3>
              <p className="text-ink-soft leading-relaxed mb-4">
                DesignLabz was founded in Sydney, Australia in 2024 by designers and AI
                engineers who kept hearing the same complaint from founders: hiring a
                designer for every logo tweak or social graphic was slow and expensive.
              </p>
              <p className="text-ink-soft leading-relaxed mb-4">
                We watched small teams stretch budgets thin on one-off design requests,
                while templates elsewhere looked generic and forgettable. Meanwhile,
                brands needed to publish consistent visuals across web, ads, and social
                every single week.
              </p>
              <p className="text-ink-soft leading-relaxed">
                So we built an AI design studio that understands composition, color
                theory, and brand consistency. Our mission is simple: help anyone create
                visuals that look designed by a professional — in minutes, not weeks.
              </p>
            </div>
          </div>
        </AnimateOnScroll>


        <AnimateOnScroll delay={150}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-display text-ink mb-4">Our AI</h3>
              <p className="text-ink-soft leading-relaxed">
                DesignLabz runs generative vision models that turn brand prompts into layout-aware graphics. Composition, color, and export pipelines are optimized for GPU inference so teams get production-ready visuals in seconds — a productized design platform, not custom design services.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind DesignLabz"
            subtitle="A Sydney-based team united by the belief that great brands deserve great visuals."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.id} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 text-center h-full hover:scale-[1.02] hover:shadow-card-hover transition-all duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
                  loading="lazy"
                />
                <h4 className="font-semibold font-display text-ink text-lg">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

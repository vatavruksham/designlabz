import { Pencil, Sparkles, Download } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Describe Your Brand',
    description:
      'Tell AI about your brand, product, or vibe. Add a format and style preference if you already have a direction in mind.',
    icon: Pencil,
  },
  {
    number: '02',
    title: 'AI Designs Your Visual',
    description:
      'AI composes a logo, banner, or social graphic with a matching color palette and layout tuned to your chosen style.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Refine & Export',
    description:
      'Review the preview, tweak colors or layout, then export polished, ready-to-publish files in the sizes you need.',
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-surface-100 py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="How It Works"
            title="From Brand Brief to Polished Visual in 3 Steps"
            subtitle="A simple flow that turns a short description into a ready-to-publish design."
          />
        </AnimateOnScroll>

        <div className="relative mt-4 grid gap-8 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimateOnScroll key={step.number} delay={index * 120}>
              <div className="relative text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-primary">
                  {step.number}
                </p>
                <h3 className="mb-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

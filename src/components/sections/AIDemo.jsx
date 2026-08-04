import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const formats = [
  { id: 'logo', label: 'Logo' },
  { id: 'banner', label: 'Banner' },
  { id: 'social', label: 'Social Post' },
];

const styles = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'bold', label: 'Bold' },
  { id: 'playful', label: 'Playful' },
  { id: 'luxury', label: 'Luxury' },
];

const samplePrompts = [
  'Eco-friendly coffee roastery',
  'Boutique fitness studio',
  'B2B fintech dashboard',
  'Handmade pottery shop',
  'Indie podcast network',
];

const styleThemes = {
  minimal: {
    shell: 'border-ink/10 bg-gradient-to-br from-white to-surface-50',
    accent: 'bg-ink',
    palette: ['#1f1f1f', '#f4f1ee', '#c9c2ba'],
    dark: false,
  },
  bold: {
    shell: 'border-primary/25 bg-gradient-to-br from-rose-50 to-orange-50',
    accent: 'bg-primary',
    palette: ['#f43f5e', '#fb923c', '#111827'],
    dark: false,
  },
  playful: {
    shell: 'border-secondary/25 bg-gradient-to-br from-orange-50 to-pink-50',
    accent: 'bg-secondary',
    palette: ['#fb923c', '#f472b6', '#38bdf8'],
    dark: false,
  },
  luxury: {
    shell: 'border-amber-500/30 bg-gradient-to-br from-slate-900 to-slate-800',
    accent: 'bg-amber-400',
    palette: ['#0f172a', '#d4af37', '#f5f0e6'],
    dark: true,
  },
};

function shorten(text, max = 48) {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trim()}…`;
}

function buildDesign(prompt, format, style) {
  const brandLabel = shorten(prompt, 40);
  const formatLabel = formats.find((f) => f.id === format)?.label || 'Logo';
  const styleLabel = styles.find((s) => s.id === style)?.label || 'Minimal';

  const formatCopy = {
    logo: `A ${styleLabel.toLowerCase()} emblem mark built around your brand's core idea — balanced, scalable, and clean at any size.`,
    banner: `A ${styleLabel.toLowerCase()} banner layout with clear visual hierarchy, ready for your website header or ad placement.`,
    social: `A ${styleLabel.toLowerCase()} social post template sized for feed and story, with room for your own caption.`,
  };

  return {
    brand: brandLabel,
    format,
    formatLabel,
    style,
    styleLabel,
    matchScore: style === 'luxury' ? 91 : style === 'bold' ? 95 : 89,
    sections: [
      {
        title: 'Concept Direction',
        body: `${styleLabel} visual direction inspired by "${brandLabel}" — shapes and color chosen to feel distinct on shelf and on screen.`,
      },
      {
        title: 'Format Output',
        body: formatCopy[format] || formatCopy.logo,
      },
      {
        title: 'Color Rationale',
        body: 'Palette balances one dominant tone with a supporting accent so the mark stays legible on light and dark backgrounds.',
      },
      {
        title: 'Export Ready',
        body: 'Vector-ready output with transparent background, sized presets for web, print, and social — no manual resizing needed.',
      },
    ],
  };
}

export default function AIDemo() {
  const [format, setFormat] = useState('logo');
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('bold');
  const [isGenerating, setIsGenerating] = useState(false);
  const [design, setDesign] = useState(null);

  const theme = styleThemes[style] || styleThemes.bold;

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setDesign(null);

    const nextPrompt = prompt.trim();
    const nextFormat = format;
    const nextStyle = style;

    setTimeout(() => {
      setDesign(buildDesign(nextPrompt, nextFormat, nextStyle));
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden bg-surface-50 py-20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="AI Demo"
            title="Generate a Design Preview Now"
            subtitle="Pick a format, describe your brand, choose a style, and watch AI compose a preview-ready visual direction."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-primary/10 bg-white/80 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-primary/10 bg-surface-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
                <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  designlabz — design studio
                </span>
              </div>

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Format
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFormat(f.id)}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          format === f.id
                            ? 'bg-primary text-white shadow-glow'
                            : 'border border-primary/10 bg-surface-100 text-ink-soft hover:border-primary/30'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Describe Your Brand
                  </label>
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your brand or product..."
                    className="w-full rounded-md border border-surface-300 bg-white px-4 py-3 text-ink placeholder-ink-muted transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {samplePrompts.map((sample) => (
                      <button
                        key={sample}
                        type="button"
                        onClick={() => setPrompt(sample)}
                        className="rounded-md border border-transparent bg-surface-100 px-3 py-1 text-xs text-ink-soft transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        {sample}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Style
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {styles.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setStyle(s.id)}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          style === s.id
                            ? 'bg-secondary text-white shadow-md'
                            : 'border border-primary/10 bg-surface-100 text-ink-soft hover:border-secondary/30'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark py-3.5 font-semibold text-white transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating Design...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Generate Design
                    </>
                  )}
                </button>

                {isGenerating && (
                  <div className="mt-6 overflow-hidden text-sm text-primary/80">
                    <p className="animate-pulse">▸ Reading brand brief "{shorten(prompt, 36)}"...</p>
                    <p className="animate-pulse opacity-70">▸ Composing {formats.find((f) => f.id === format)?.label.toLowerCase()} layout...</p>
                    <p className="animate-pulse opacity-50">▸ Applying {style} style...</p>
                  </div>
                )}

                {design && (
                  <div className="mt-8 animate-fade-in">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                          Generated Design Preview
                        </p>
                        <p className="mt-1 text-sm text-ink-soft">
                          For <span className="font-medium text-ink">"{design.brand}"</span>
                          {' · '}
                          {design.formatLabel}
                          {' · '}
                          {design.styleLabel}
                        </p>
                      </div>
                      <div className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        Brand fit {design.matchScore}%
                      </div>
                    </div>

                    <div
                      className={`rounded-xl border p-5 sm:p-6 ${theme.shell} ${
                        theme.dark ? 'text-white' : 'text-ink'
                      }`}
                    >
                      <div className="mb-5 flex items-center gap-3">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-display font-bold text-white ${theme.accent}`}
                        >
                          {design.brand.trim().charAt(0).toUpperCase() || 'D'}
                        </div>
                        <div className="flex gap-2">
                          {theme.palette.map((color) => (
                            <span
                              key={color}
                              className="h-8 w-8 rounded-full border border-white/30 shadow-sm"
                              style={{ backgroundColor: color }}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>

                      <h4
                        className={`font-display text-lg font-bold ${
                          theme.dark ? 'text-white' : 'text-ink'
                        }`}
                      >
                        {design.brand}
                      </h4>
                      <p
                        className={`mt-1 text-xs uppercase tracking-wider ${
                          theme.dark ? 'text-slate-300' : 'text-ink-muted'
                        }`}
                      >
                        {design.formatLabel} · {design.styleLabel} style
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {design.sections.map((section, index) => (
                          <div
                            key={section.title}
                            className={`animate-slide-deck rounded-lg border p-4 ${
                              theme.dark
                                ? 'border-white/10 bg-white/5'
                                : 'border-primary/10 bg-white/70'
                            }`}
                            style={{ animationDelay: `${index * 120}ms` }}
                          >
                            <h5
                              className={`text-xs font-bold uppercase tracking-wide ${
                                theme.dark ? 'text-amber-300' : 'text-primary'
                              }`}
                            >
                              {section.title}
                            </h5>
                            <p
                              className={`mt-2 text-[11px] leading-relaxed ${
                                theme.dark ? 'text-slate-300' : 'text-ink-soft'
                              }`}
                            >
                              {section.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-center text-xs text-ink-muted">
                      Simulated preview personalized to your brand. Sign up to export full-resolution files.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

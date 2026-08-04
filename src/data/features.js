import { Wand2, LayoutTemplate, Palette, Layers, Download, FolderKanban } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Logo Generator',
    description:
      'Describe your brand and get distinct, scalable logo concepts in seconds — balanced, memorable marks that hold up from favicon to billboard.',
    icon: Wand2,
    image: '/images/features/logo-generator.jpg',
  },
  {
    id: 2,
    title: 'Banner Layouts',
    description:
      'Pre-composed banner layouts for web headers, ads, and promos. AI arranges hierarchy and spacing so your message stands out instantly.',
    icon: LayoutTemplate,
    image: '/images/features/banner-layouts.jpg',
  },
  {
    id: 3,
    title: 'Smart Brand Colors',
    description:
      'AI builds a cohesive color palette from your brand brief, with primary, accent, and neutral tones that carry across every asset.',
    icon: Palette,
    image: '/images/features/brand-colors.jpg',
  },
  {
    id: 4,
    title: 'Social Graphic Packs',
    description:
      'Generate matching sets of social posts and story templates sized for every platform, so your feed stays visually consistent.',
    icon: Layers,
    image: '/images/features/social-packs.jpg',
  },
  {
    id: 5,
    title: 'One-Click Export',
    description:
      'Download production-ready PNG, SVG, or PDF files in the exact sizes you need — no manual resizing or format wrangling.',
    icon: Download,
    image: '/images/features/export-formats.jpg',
  },
  {
    id: 6,
    title: 'Template Library',
    description:
      'Browse a growing gallery of professionally composed templates across industries — start from a spark instead of a blank canvas.',
    icon: FolderKanban,
    image: '/images/features/templates-gallery.jpg',
  },
];

export default features;

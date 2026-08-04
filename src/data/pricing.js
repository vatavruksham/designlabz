const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: 14,
    period: '/mo',
    description: 'Ideal for solo founders creating their first brand visuals.',
    features: [
      '20 AI design generations per month',
      'Logos, banners & social posts',
      'PNG export',
      '3 style presets',
      'Email support',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: 29,
    period: '/mo',
    description: 'For creators and small teams shipping visuals every week.',
    features: [
      '150 AI design generations per month',
      'All style presets',
      'PNG, SVG & PDF export',
      'Smart brand color palettes',
      'Social graphic packs',
      'Version history',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Business',
    price: 79,
    period: '/mo',
    description: 'For agencies and brands managing multiple clients or products.',
    features: [
      'Unlimited design generations',
      'Team workspaces (up to 10 seats)',
      'Shared template library',
      'Brand kit management',
      'Bulk export tools',
      'Admin controls',
      'Dedicated success manager',
    ],
    highlighted: false,
  },
];

export const comparisonFeatures = [
  { feature: 'AI design generations', starter: '20 / mo', pro: '150 / mo', business: 'Unlimited' },
  { feature: 'Style presets', starter: '3', pro: 'All', business: 'All + custom' },
  { feature: 'Social graphic packs', starter: '—', pro: 'Yes', business: 'Yes' },
  { feature: 'Export formats', starter: 'PNG', pro: 'PNG + SVG + PDF', business: 'PNG + SVG + PDF' },
  { feature: 'Version history', starter: '—', pro: 'Yes', business: 'Yes' },
  { feature: 'Brand kit management', starter: '—', pro: 'Basic', business: 'Full' },
  { feature: 'Team seats', starter: '1', pro: '1', business: 'Up to 10' },
  { feature: 'Support', starter: 'Email', pro: 'Priority', business: 'Dedicated' },
];

export const faqs = [
  {
    question: 'Do I need design experience to use DesignLabz?',
    answer:
      'No. Describe your brand in plain language and choose a format and style — AI handles composition, color, and layout so you get a polished result without prior design skills.',
  },
  {
    question: 'Can I edit the AI-generated designs?',
    answer:
      'Yes. Every generation gives you an editable starting point. Adjust colors, swap layouts, or regenerate variations until it matches your vision.',
  },
  {
    question: 'What file formats can I export?',
    answer:
      'Starter includes PNG export. Pro and Business add scalable SVG and print-ready PDF, so your visuals work across web, print, and social.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'We do not offer a free trial. Instead, use the live AI Demo on the homepage to generate a real design preview before you subscribe.',
  },
  {
    question: 'Is there a satisfaction guarantee?',
    answer:
      'Yes. If you are not happy within 14 days of purchase, contact support for a full refund — no questions asked.',
  },
  {
    question: 'Can agencies manage multiple client brands?',
    answer:
      'Business includes shared workspaces, seats for your team, and brand kit management built for agencies juggling several client accounts at once.',
  },
];

export default pricing;

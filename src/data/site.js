export const site = {
  name: 'ForgeStack',
  tagline: 'Ship faster. Scale smarter. Sleep better.',
  description: 'ForgeStack is a modern cloud platform for deploying, monitoring, and scaling applications with zero DevOps overhead.',
  url: 'https://forgestack.io',
};

export const nav = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '2.4M+', label: 'Deployments / month' },
  { value: '<200ms', label: 'Global edge latency' },
  { value: '14K+', label: 'Teams worldwide' },
];

export const logos = ['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Supabase'];

export function getPageMeta(pathname) {
  const routes = {
    '/': { title: 'ForgeStack — Cloud Platform for Modern Teams', description: site.description },
    '/features': { title: 'Features — ForgeStack', description: 'Explore ForgeStack capabilities: auto-scaling, CI/CD, observability, edge networking, and more.' },
    '/pricing': { title: 'Pricing — ForgeStack', description: 'Simple, transparent pricing. Start free, scale as you grow. No hidden fees.' },
    '/docs': { title: 'Documentation — ForgeStack', description: 'Get started with ForgeStack. Guides, API reference, and best practices.' },
    '/blog': { title: 'Blog — ForgeStack', description: 'Engineering insights, product updates, and DevOps best practices from the ForgeStack team.' },
    '/about': { title: 'About — ForgeStack', description: 'We are building the cloud platform we always wished existed.' },
    '/careers': { title: 'Careers — ForgeStack', description: 'Join ForgeStack and help shape the future of cloud infrastructure.' },
    '/contact': { title: 'Contact — ForgeStack', description: 'Get in touch with our sales, support, or partnerships team.' },
  };

  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return { title: 'Blog Post — ForgeStack', description: site.description };
  }
  if (pathname.startsWith('/docs/')) {
    return { title: 'Docs — ForgeStack', description: 'ForgeStack documentation and guides.' };
  }

  return routes[pathname] || { title: '404 — ForgeStack', description: 'Page not found.' };
}

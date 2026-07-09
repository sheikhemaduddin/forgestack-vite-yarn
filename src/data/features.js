export const featureCategories = [
  {
    id: 'deploy',
    title: 'Deploy & Scale',
    description: 'From git push to global production in under 60 seconds.',
    features: [
      { icon: '🚀', title: 'Instant Deployments', desc: 'Connect your GitHub repo and deploy on every push. Preview environments for every PR.' },
      { icon: '📈', title: 'Auto-scaling', desc: 'Scale from zero to millions of requests automatically. Pay only for what you use.' },
      { icon: '🔄', title: 'Zero-downtime Rollbacks', desc: 'One-click rollbacks to any previous deployment. Atomic swaps with health checks.' },
      { icon: '🌍', title: 'Global Edge Network', desc: '40+ edge locations worldwide. Static assets cached at the edge automatically.' },
    ],
  },
  {
    id: 'observe',
    title: 'Observe & Debug',
    description: 'Full visibility into your applications without the complexity.',
    features: [
      { icon: '📊', title: 'Real-time Metrics', desc: 'CPU, memory, request latency, and error rates. Custom dashboards and alerts.' },
      { icon: '🔍', title: 'Distributed Tracing', desc: 'End-to-end request tracing across services. Find bottlenecks in seconds.' },
      { icon: '📝', title: 'Structured Logging', desc: 'Centralized log aggregation with full-text search and retention policies.' },
      { icon: '🚨', title: 'Smart Alerting', desc: 'Anomaly detection and intelligent alerts. Integrates with Slack, PagerDuty, and email.' },
    ],
  },
  {
    id: 'secure',
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security built in from day one.',
    features: [
      { icon: '🔐', title: 'Secrets Management', desc: 'Encrypted environment variables and secrets. Automatic rotation and audit logs.' },
      { icon: '🛡️', title: 'DDoS Protection', desc: 'Always-on DDoS mitigation at the edge. Rate limiting and WAF rules included.' },
      { icon: '✅', title: 'SOC 2 & GDPR', desc: 'SOC 2 Type II certified. GDPR compliant with data residency options in EU and US.' },
      { icon: '🔑', title: 'SSO & RBAC', desc: 'SAML SSO, team roles, and fine-grained access controls for enterprise teams.' },
    ],
  },
  {
    id: 'integrate',
    title: 'Integrate & Automate',
    description: 'Works with the tools your team already uses.',
    features: [
      { icon: '⚡', title: 'CI/CD Pipelines', desc: 'Native GitHub Actions, GitLab CI, and CircleCI integrations. Custom webhook triggers.' },
      { icon: '🗄️', title: 'Managed Databases', desc: 'PostgreSQL, Redis, and MongoDB with automatic backups and point-in-time recovery.' },
      { icon: '🔌', title: 'API & CLI', desc: 'Full REST API and CLI for automation. Terraform provider for infrastructure as code.' },
      { icon: '🤖', title: 'AI Assist', desc: 'AI-powered deployment recommendations, cost optimization, and incident root-cause analysis.' },
    ],
  },
];

export const homeFeatures = [
  { icon: '⚡', title: 'Deploy in seconds', desc: 'Push to git, get a production URL. Preview environments for every branch.' },
  { icon: '📊', title: 'Built-in observability', desc: 'Metrics, logs, and traces out of the box. No third-party agents required.' },
  { icon: '🔒', title: 'Security by default', desc: 'TLS everywhere, encrypted secrets, DDoS protection, and SOC 2 compliance.' },
  { icon: '💰', title: 'Predictable pricing', desc: 'Pay for compute and bandwidth. No per-seat fees, no surprise bills.' },
  { icon: '🌐', title: 'Edge-first architecture', desc: '40+ global PoPs. Static assets and API responses cached at the edge.' },
  { icon: '🔧', title: 'Developer experience', desc: 'CLI, API, Terraform provider. Works with Node, Python, Go, Rust, and Docker.' },
];

export const comparisonRows = [
  { feature: 'Free tier', forge: 'Yes', heroku: 'Limited', aws: '12 months' },
  { feature: 'Auto-scaling', forge: 'Yes', heroku: 'Manual', aws: 'Manual setup' },
  { feature: 'Preview environments', forge: 'Unlimited', heroku: 'Paid add-on', aws: 'Manual setup' },
  { feature: 'Built-in observability', forge: 'Included', heroku: 'Paid add-ons', aws: 'Separate services' },
  { feature: 'Global edge network', forge: '40+ PoPs', heroku: 'US/EU only', aws: 'CloudFront extra' },
  { feature: 'Zero-downtime deploys', forge: 'Yes', heroku: 'Yes', aws: 'Manual setup' },
  { feature: 'SOC 2 compliance', forge: 'Type II', heroku: 'Type II', aws: 'Shared responsibility' },
  { feature: 'Starting price', forge: '$0/mo', heroku: '$5/dyno', aws: 'Varies' },
];

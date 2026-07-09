export const docSections = [
  {
    title: 'Getting Started',
    pages: [
      { slug: 'quickstart', title: 'Quickstart' },
      { slug: 'installation', title: 'CLI Installation' },
      { slug: 'first-deploy', title: 'Your First Deploy' },
      { slug: 'project-structure', title: 'Project Structure' },
    ],
  },
  {
    title: 'Core Concepts',
    pages: [
      { slug: 'services', title: 'Services & Environments' },
      { slug: 'environment-variables', title: 'Environment Variables' },
      { slug: 'domains', title: 'Custom Domains' },
      { slug: 'scaling', title: 'Scaling & Resources' },
    ],
  },
  {
    title: 'Platform',
    pages: [
      { slug: 'databases', title: 'Managed Databases' },
      { slug: 'workers', title: 'Background Workers' },
      { slug: 'edge-functions', title: 'Edge Functions' },
      { slug: 'observability', title: 'Metrics & Logging' },
    ],
  },
  {
    title: 'API Reference',
    pages: [
      { slug: 'api-auth', title: 'Authentication' },
      { slug: 'api-deployments', title: 'Deployments API' },
      { slug: 'api-services', title: 'Services API' },
      { slug: 'webhooks', title: 'Webhooks' },
    ],
  },
];

export const docContent = {
  quickstart: {
    title: 'Quickstart',
    description: 'Deploy your first application to ForgeStack in under 5 minutes.',
    updated: '2026-06-01',
    body: `
Get a production URL for your app in minutes. This guide assumes you have Node.js 18+ installed.

## 1. Install the CLI

\`\`\`bash
npm install -g @forgestack/cli
forge login
\`\`\`

## 2. Initialize your project

\`\`\`bash
cd my-app
forge init
\`\`\`

This creates a \`forge.toml\` config file in your project root.

## 3. Deploy

\`\`\`bash
forge deploy
\`\`\`

ForgeStack builds your app, runs health checks, and gives you a URL like \`https://my-app.forgestack.app\`.

## 4. Connect GitHub (optional)

Link your repo for automatic deploys on every push:

\`\`\`bash
forge connect github
\`\`\`

## Next steps

- [Configure environment variables](/docs/environment-variables)
- [Set up a custom domain](/docs/domains)
- [Enable auto-scaling](/docs/scaling)
    `.trim(),
  },
  installation: {
    title: 'CLI Installation',
    description: 'Install and configure the ForgeStack CLI on macOS, Linux, and Windows.',
    updated: '2026-05-15',
    body: `
The ForgeStack CLI (\`forge\`) is the primary tool for deploying and managing your applications.

## npm (recommended)

\`\`\`bash
npm install -g @forgestack/cli
\`\`\`

## Homebrew (macOS)

\`\`\`bash
brew install forgestack/tap/forge
\`\`\`

## Verify installation

\`\`\`bash
forge --version
# forge v3.2.1
\`\`\`

## Authentication

\`\`\`bash
forge login
\`\`\`

This opens your browser for OAuth authentication. Your API token is stored in \`~/.forgestack/credentials\`.

## Shell completions

\`\`\`bash
forge completion bash >> ~/.bashrc
forge completion zsh >> ~/.zshrc
\`\`\`
    `.trim(),
  },
  'first-deploy': {
    title: 'Your First Deploy',
    description: 'Step-by-step walkthrough of deploying a Node.js Express app.',
    updated: '2026-05-20',
    body: `
This walkthrough deploys a simple Express API to ForgeStack.

## Prerequisites

- ForgeStack account (free at forgestack.io)
- CLI installed and authenticated
- A Node.js project with a \`start\` script

## Configure forge.toml

\`\`\`toml
name = "my-api"
region = "us-east-1"

[build]
  command = "npm install && npm run build"
  output = "dist"

[deploy]
  start = "node dist/server.js"
  port = 3000
  health = "/health"
\`\`\`

## Deploy

\`\`\`bash
forge deploy --message "Initial deploy"
\`\`\`

Watch the build logs in your terminal. On success:

\`\`\`
✓ Build complete (12s)
✓ Health check passed
✓ Deployed to https://my-api.forgestack.app
\`\`\`

## Verify

\`\`\`bash
curl https://my-api.forgestack.app/health
# {"status":"ok"}
\`\`\`
    `.trim(),
  },
  'project-structure': {
    title: 'Project Structure',
    description: 'Understanding the ForgeStack project configuration file.',
    updated: '2026-04-28',
    body: `
Every ForgeStack project is configured via \`forge.toml\` in your repository root.

## Minimal config

\`\`\`toml
name = "my-app"
\`\`\`

ForgeStack auto-detects your framework and configures build/deploy commands.

## Full config reference

\`\`\`toml
name = "my-app"
region = "us-east-1"          # Deployment region
team = "acme-corp"            # Team slug

[build]
  command = "npm run build"   # Build command
  output = "dist"             # Output directory

[deploy]
  start = "node server.js"    # Start command
  port = 3000                 # Port your app listens on
  health = "/health"          # Health check endpoint
  replicas = 2                # Number of instances

[env]
  NODE_ENV = "production"

[env.staging]
  NODE_ENV = "staging"
  DEBUG = "true"
\`\`\`

## Multi-service projects

For monorepos with multiple services:

\`\`\`toml
[[services]]
  name = "api"
  path = "packages/api"

[[services]]
  name = "web"
  path = "packages/web"
\`\`\`
    `.trim(),
  },
  services: {
    title: 'Services & Environments',
    description: 'Manage multiple services and deployment environments.',
    updated: '2026-05-10',
    body: `
ForgeStack organizes your infrastructure around **services** and **environments**.

## Services

A service is a deployable unit — typically one repository or one process. Each service gets its own URL, scaling config, and environment variables.

## Environments

Every service has three default environments:

| Environment | URL pattern | Purpose |
|---|---|---|
| Production | \`my-app.forgestack.app\` | Live traffic |
| Staging | \`staging-my-app.forgestack.app\` | Pre-production testing |
| Preview | \`pr-42-my-app.forgestack.app\` | Per-PR previews |

## Promoting between environments

\`\`\`bash
forge promote staging production
\`\`\`

This deploys the exact same build artifact from staging to production — no rebuild.
    `.trim(),
  },
  'environment-variables': {
    title: 'Environment Variables',
    description: 'Manage secrets and configuration across environments.',
    updated: '2026-05-12',
    body: `
Environment variables configure your application without code changes.

## Set a variable

\`\`\`bash
forge env set DATABASE_URL="postgres://..." --env production
forge env set DEBUG="true" --env staging
\`\`\`

## List variables

\`\`\`bash
forge env list --env production
\`\`\`

## Secrets

Mark sensitive values as secrets — they're encrypted at rest and masked in logs:

\`\`\`bash
forge env set API_KEY="sk-..." --secret --env production
\`\`\`

## In forge.toml

Non-secret defaults can live in config:

\`\`\`toml
[env]
  LOG_LEVEL = "info"
  PORT = "3000"

[env.staging]
  LOG_LEVEL = "debug"
\`\`\`

Environment-specific values in \`forge.toml\` are overridden by CLI-set values.
    `.trim(),
  },
  domains: {
    title: 'Custom Domains',
    description: 'Connect your own domain with automatic TLS certificates.',
    updated: '2026-05-08',
    body: `
ForgeStack provides free TLS certificates for custom domains via Let's Encrypt.

## Add a domain

\`\`\`bash
forge domain add api.example.com --service my-api
\`\`\`

## Configure DNS

Add a CNAME record pointing to your ForgeStack service:

\`\`\`
api.example.com  CNAME  my-api.forgestack.app
\`\`\`

For apex domains, use our anycast IP:

\`\`\`
example.com  A  104.21.0.0
\`\`\`

## Verification

\`\`\`bash
forge domain verify api.example.com
# ✓ DNS verified
# ✓ TLS certificate issued
# ✓ Domain active
\`\`\`

Certificates auto-renew 30 days before expiry.
    `.trim(),
  },
  scaling: {
    title: 'Scaling & Resources',
    description: 'Configure auto-scaling, resource limits, and performance tuning.',
    updated: '2026-06-01',
    body: `
ForgeStack auto-scales based on CPU and memory utilization.

## Default behavior

- **Min replicas:** 1 (Hobby), 2 (Pro+)
- **Max replicas:** 10 (Pro), 50 (Business), custom (Enterprise)
- **Scale trigger:** CPU > 70% or memory > 80% for 60 seconds
- **Scale down:** After 5 minutes below 30% utilization

## Configure in forge.toml

\`\`\`toml
[deploy]
  replicas = 2
  memory = "512MB"
  cpu = "0.5"

[deploy.scaling]
  min = 2
  max = 20
  target_cpu = 60
\`\`\`

## Manual scaling

\`\`\`bash
forge scale my-api --replicas 5
\`\`\`

## Vertical scaling

\`\`\`bash
forge scale my-api --memory 2GB --cpu 2
\`\`\`

Changes apply with zero downtime via rolling update.
    `.trim(),
  },
  databases: {
    title: 'Managed Databases',
    description: 'Provision PostgreSQL, Redis, and MongoDB with automatic backups.',
    updated: '2026-05-25',
    body: `
ForgeStack managed databases include automatic backups, monitoring, and connection pooling.

## Create a database

\`\`\`bash
forge db create my-db --type postgres --plan starter
\`\`\`

Plans: \`starter\` (1GB), \`standard\` (10GB), \`performance\` (100GB).

## Connect to a service

\`\`\`bash
forge db attach my-db --service my-api
\`\`\`

This injects \`DATABASE_URL\` into your service's environment.

## Backups

- Automatic daily backups (retained 7 days on Pro, 30 days on Business)
- Point-in-time recovery on Business+
- Manual backup: \`forge db backup my-db\`

## Connection pooling

Built-in PgBouncer for PostgreSQL. Enable in forge.toml:

\`\`\`toml
[database]
  pooling = true
  max_connections = 100
\`\`\`
    `.trim(),
  },
  workers: {
    title: 'Background Workers',
    description: 'Run async jobs, cron tasks, and queue consumers.',
    updated: '2026-05-18',
    body: `
ForgeStack Workers run background processes alongside your web services.

## Define a worker

\`\`\`toml
[[workers]]
  name = "email-worker"
  start = "node workers/email.js"
  memory = "256MB"
\`\`\`

## Cron jobs

\`\`\`toml
[[workers]]
  name = "nightly-cleanup"
  start = "node scripts/cleanup.js"
  schedule = "0 3 * * *"  # 3 AM daily
\`\`\`

## Queue consumers

Connect to ForgeStack Queues or external services (SQS, Redis):

\`\`\`javascript
import { Queue } from '@forgestack/workers';

const queue = new Queue('emails');
queue.process(async (job) => {
  await sendEmail(job.data);
});
\`\`\`

Workers scale independently from web services.
    `.trim(),
  },
  'edge-functions': {
    title: 'Edge Functions',
    description: 'Run JavaScript at 40+ edge locations for ultra-low latency.',
    updated: '2026-06-05',
    body: `
Edge functions run close to your users for minimal latency.

## Create an edge function

\`\`\`bash
forge edge create auth-middleware --template middleware
\`\`\`

## Example: JWT validation

\`\`\`javascript
export default async function handler(request) {
  const token = request.headers.get('Authorization');
  if (!token) return new Response('Unauthorized', { status: 401 });

  const payload = await verifyJWT(token);
  request.headers.set('X-User-Id', payload.sub);
  return fetch(request);
}
\`\`\`

## Deploy

\`\`\`bash
forge edge deploy auth-middleware
\`\`\`

Edge functions are globally distributed within 60 seconds.

## Limits

- 128MB memory per invocation
- 30 second timeout
- 1M invocations/month on Pro
    `.trim(),
  },
  observability: {
    title: 'Metrics & Logging',
    description: 'Monitor your applications with built-in observability tools.',
    updated: '2026-06-01',
    body: `
Every ForgeStack deployment includes metrics, logs, and traces at no extra cost.

## Metrics dashboard

View in the ForgeStack dashboard or query via API:

\`\`\`bash
forge metrics my-api --period 1h
\`\`\`

Available metrics: request rate, latency (p50/p95/p99), error rate, CPU, memory, bandwidth.

## Logs

\`\`\`bash
forge logs my-api --tail
forge logs my-api --since 1h --filter "error"
\`\`\`

Logs are structured JSON with automatic trace correlation.

## Alerts

\`\`\`bash
forge alert create high-errors \\
  --service my-api \\
  --condition "error_rate > 5%" \\
  --notify slack:#incidents
\`\`\`

## Custom metrics

\`\`\`javascript
import { metrics } from '@forgestack/observability';
metrics.counter('orders_processed').inc();
metrics.histogram('checkout_duration').observe(durationMs);
\`\`\`
    `.trim(),
  },
  'api-auth': {
    title: 'Authentication',
    description: 'Authenticate with the ForgeStack REST API using API tokens or OAuth.',
    updated: '2026-04-20',
    body: `
All API requests require authentication via Bearer token.

## Create an API token

Dashboard → Settings → API Tokens → Create Token

Or via CLI:

\`\`\`bash
forge token create --name "CI deploy" --scope deploy
\`\`\`

## Use in requests

\`\`\`bash
curl -H "Authorization: Bearer fs_abc123..." \\
  https://api.forgestack.io/v1/services
\`\`\`

## Scopes

| Scope | Permissions |
|---|---|
| \`read\` | List services, view logs and metrics |
| \`deploy\` | Create and manage deployments |
| \`admin\` | Full access including team management |

## Rate limits

- 1000 requests/minute (Pro)
- 5000 requests/minute (Business)
- Custom (Enterprise)
    `.trim(),
  },
  'api-deployments': {
    title: 'Deployments API',
    description: 'Create, list, and manage deployments programmatically.',
    updated: '2026-04-22',
    body: `
## List deployments

\`\`\`
GET /v1/services/{service_id}/deployments
\`\`\`

\`\`\`json
{
  "deployments": [
    {
      "id": "dep_abc123",
      "status": "live",
      "message": "Fix auth bug",
      "created_at": "2026-06-15T10:30:00Z",
      "url": "https://my-api.forgestack.app"
    }
  ]
}
\`\`\`

## Create deployment

\`\`\`
POST /v1/services/{service_id}/deployments
\`\`\`

\`\`\`json
{
  "ref": "main",
  "message": "Deploy from CI"
}
\`\`\`

## Rollback

\`\`\`
POST /v1/services/{service_id}/deployments/{deployment_id}/rollback
\`\`\`

Rollback is instant — traffic switches to the previous deployment.
    `.trim(),
  },
  'api-services': {
    title: 'Services API',
    description: 'Manage services, environments, and configuration via REST.',
    updated: '2026-04-25',
    body: `
## List services

\`\`\`
GET /v1/services
\`\`\`

## Get service details

\`\`\`
GET /v1/services/{service_id}
\`\`\`

\`\`\`json
{
  "id": "svc_abc123",
  "name": "my-api",
  "url": "https://my-api.forgestack.app",
  "region": "us-east-1",
  "status": "running",
  "replicas": 2,
  "memory": "512MB"
}
\`\`\`

## Update service

\`\`\`
PATCH /v1/services/{service_id}
\`\`\`

\`\`\`json
{
  "replicas": 4,
  "memory": "1GB"
}
\`\`\`

## Delete service

\`\`\`
DELETE /v1/services/{service_id}
\`\`\`

Requires \`admin\` scope. This action is irreversible.
    `.trim(),
  },
  webhooks: {
    title: 'Webhooks',
    description: 'Receive real-time notifications for deployment and service events.',
    updated: '2026-04-18',
    body: `
Webhooks notify your systems when events occur on ForgeStack.

## Create a webhook

\`\`\`bash
forge webhook create \\
  --url https://example.com/hooks/forgestack \\
  --events deployment.created,deployment.live,deployment.failed
\`\`\`

## Payload format

\`\`\`json
{
  "event": "deployment.live",
  "timestamp": "2026-06-15T10:30:00Z",
  "data": {
    "deployment_id": "dep_abc123",
    "service": "my-api",
    "url": "https://my-api.forgestack.app",
    "message": "Fix auth bug"
  }
}
\`\`\`

## Verification

Each webhook includes an \`X-ForgeStack-Signature\` header. Verify with your webhook secret:

\`\`\`javascript
const crypto = require('crypto');
const sig = crypto
  .createHmac('sha256', secret)
  .update(JSON.stringify(payload))
  .digest('hex');
\`\`\`

## Retry policy

Failed deliveries (non-2xx) are retried 3 times with exponential backoff.
    `.trim(),
  },
};

export function getDoc(slug) {
  return docContent[slug] || null;
}

export function getAllDocSlugs() {
  return docSections.flatMap((s) => s.pages.map((p) => p.slug));
}

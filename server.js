// Vite SSR server. Dev: Vite middleware + on-the-fly SSR. Prod: serve built client
// assets + server-rendered HTML from dist/. Cloudways start command: npm start.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasBuild = fs.existsSync(path.resolve(__dirname, 'dist/client/index.html'));
const isProd =
  process.env.NODE_ENV === 'production' ||
  (process.env.NODE_ENV !== 'development' && hasBuild);
const PORT = process.env.PORT || 3000;

const allowedHosts = [
  'nodejs-40913-999434550.cloudwaysstagingapps.com',
  '.cloudwaysstagingapps.com',
];

async function createServer() {
  const app = express();
  let vite;

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true, allowedHosts },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    app.use(compression());
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template, render;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }
      const { html: appHtml, title, description } = render(url);
      const html = template
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('<!--ssr-title-->', title || 'ForgeStack')
        .replace('<!--ssr-description-->', description || '');
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd && vite) vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, () => console.log(`[vite-ssr] listening on ${PORT} (prod=${isProd})`));
}

createServer();

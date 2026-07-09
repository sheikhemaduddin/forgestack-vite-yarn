# vite-ssr · yarn

| Field | Value |
|-------|-------|
| Framework Preset | Vite |
| Package Manager | yarn |
| Build Command | `yarn build` (do **not** use `run build` — Cloudways must invoke `yarn build` or `bash build.sh`) |
| Output Directory | `dist` |
| Entry File | src/entry-server.jsx (+ server.js) |
| Start Command | `yarn start` |
| Node | >=18.0.0 |

Listens on `process.env.PORT`. Generate the lockfile with `./generate-lockfile.sh` before pushing.

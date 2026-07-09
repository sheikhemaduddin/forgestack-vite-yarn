#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
vite build --outDir dist/client
vite build --ssr src/entry-server.jsx --outDir dist/server

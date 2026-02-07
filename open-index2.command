#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/index2-preview"

if [[ ! -d "node_modules" ]]; then
  npm install
fi

# Sync the root React file into the app (no content changes, just copy).
cp "../index2.jsx" "src/App.jsx"

# Open the browser after the dev server starts.
(sleep 1; open "http://localhost:5173") >/dev/null 2>&1 &

exec npm run dev:oneclick

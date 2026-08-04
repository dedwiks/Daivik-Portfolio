/** @type {import('next').NextConfig} */

const fs = require('fs');
const path = require('path');

// On GitHub Actions, GITHUB_REPOSITORY is auto-provided as "owner/repo".
// Project pages (owner.github.io/repo) need a basePath; user/org pages
// (owner.github.io itself) and any repo serving a custom domain (public/CNAME
// present) are served from the root and need none.
// Locally (no GITHUB_ACTIONS env) basePath stays empty so `next dev` runs at "/".
function getBasePath() {
  if (process.env.GITHUB_ACTIONS !== 'true') return '';
  if (fs.existsSync(path.join(__dirname, 'public', 'CNAME'))) return '';
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (!repo || repo.endsWith('.github.io')) return '';
  return `/${repo}`;
}

const basePath = getBasePath();

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

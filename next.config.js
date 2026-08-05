/** @type {import('next').NextConfig} */

// On GitHub Actions, GITHUB_REPOSITORY is auto-provided as "owner/repo".
// Project pages (owner.github.io/repo) need a basePath; user/org pages
// (owner.github.io itself) are served from the root and need none.
// Locally (no GITHUB_ACTIONS env) basePath stays empty so `next dev` runs at "/".
function getBasePath() {
  if (process.env.GITHUB_ACTIONS !== 'true') return '';
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
  // Lets client code (e.g. the command palette's resume download, triggered
  // from any route) build a correct absolute URL regardless of basePath.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Set GITHUB_PAGES=true (done by the deploy workflow) to build a static site
// for GitHub Pages, served from /<repo-name>.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/woodbine-website" : "";

const nextConfig: NextConfig = {
  ...(isPages ? { output: "export", basePath, trailingSlash: true } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    ...(isPages ? { unoptimized: true } : {}),
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default withNextIntl(nextConfig);

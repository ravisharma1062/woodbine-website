import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Cloudflare Pages serves the site as plain static files.
// STATIC_EXPORT=true (set in .env.production) makes `npm run build` create the `out/` folder.
// `npm run dev` is not affected.
const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStatic ? { output: "export", trailingSlash: true } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: "" },
  images: {
    ...(isStatic ? { unoptimized: true } : {}),
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default withNextIntl(nextConfig);

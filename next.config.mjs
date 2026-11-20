import path from "node:path";

// next-intl needs "next-intl/config" to point at our request config.
// This is what `createNextIntlPlugin()` does, written out by hand: importing
// "next-intl/plugin" loads @swc/core (only used for an optional message
// extraction feature), which fails to start on some build machines.
const requestConfig = "./src/i18n/request.ts";

// Cloudflare Pages serves the site as plain static files.
// STATIC_EXPORT=true (set in .env.production) makes `npm run build` create the `out/` folder.
// `npm run dev` is not affected.
const isStatic = process.env.STATIC_EXPORT === "true";

/** @type {import("next").NextConfig} */
const nextConfig = {
  ...(isStatic ? { output: "export", trailingSlash: true } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
    ...(isStatic ? { _next_intl_trailing_slash: "true" } : {}),
  },
  images: {
    ...(isStatic ? { unoptimized: true } : {}),
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  turbopack: {
    resolveAlias: { "next-intl/config": requestConfig },
  },
  webpack(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["next-intl/config"] = path.resolve(config.context, requestConfig);
    return config;
  },
};

export default nextConfig;

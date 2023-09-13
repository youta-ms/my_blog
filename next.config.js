const withMdxFm = require("next-mdx-frontmatter")();

module.exports = withMdxFm({
  images: {
    domains: ["youta-ms.online"],
  },
});

// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
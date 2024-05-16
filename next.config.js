const withMdxFm = require("next-mdx-frontmatter")();

module.exports = withMdxFm({
  images: {
    domains: ["localhost", "youta-ms.online", "www.afi-b.com", "t.afi-b.com"],
    formats: ['image/avif', 'image/webp'],
  },
});

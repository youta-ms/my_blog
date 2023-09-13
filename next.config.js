const withMdxFm = require("next-mdx-frontmatter")();

module.exports = withMdxFm({
  images: {
    domains: ["youta-ms.online"],
  },
});
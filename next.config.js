const withMdxFm = require("next-mdx-frontmatter")();

module.exports = withMdxFm({
  images: {
    domains: ["youta-ms.online", "www.afi-b.com", "t.afi-b.com"],
  },
});

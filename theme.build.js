const fs = require("fs-extra");
const archiver = require("archiver");

function zip(src, dist) {
  return new Promise((resolve, reject) => {
    const archive = archiver.create("zip", {});
    const output = fs.createWriteStream(dist);

    // listen for all archive data to be written
    output.on("close", () => {
      console.log(`${archive.pointer()} total bytes`);
      console.log(
        "Archiver has been finalized and the output file descriptor has closed."
      );
      resolve();
    });

    // good practice to catch this error explicitly
    archive.on("error", (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(src).finalize();
  });
}

(async () => {
  try {
    fs.mkdirSync("my_blog");
    fs.copySync("components", "./my_blog/components");
    fs.copySync("contents", "./my_blog/contents");
    fs.copySync("hooks", "./my_blog/hooks");
    fs.copySync("pages", "./my_blog/pages");
    fs.copySync("public", "./my_blog/public");
    fs.copySync("styles", "./my_blog/styles");
    fs.copySync("types", "./my_blog/types");
    fs.copySync("utils", "./my_blog/utils");
    fs.copyFileSync(".babelrc", "./my_blog/.babelrc");
    fs.copyFileSync(".editorconfig", "./my_blog/.editorconfig");
    fs.copyFileSync(".eslintrc", "./my_blog/.eslintrc");
    fs.copyFileSync(".gitignore", "./my_blog/.gitignore");
    fs.copyFileSync("blog.config.ts", "./my_blog/blog.config.ts");
    fs.copyFileSync("next-env.d.ts", "./my_blog/next-env.d.ts");
    fs.copyFileSync("next-sitemap.js", "./my_blog/next-sitemap.js");
    fs.copyFileSync("next.config.js", "./my_blog/next.config.js");
    fs.copyFileSync("package.json", "./my_blog/package.json");
    fs.copyFileSync("postcss.config.js", "./my_blog/postcss.config.js");
    fs.copyFileSync("README.md", "./my_blog/README.md");
    fs.copyFileSync("tsconfig.json", "./my_blog/tsconfig.json");
    fs.copyFileSync("vercel.json", "./my_blog/vercel.json");
    fs.copyFileSync("yarn.lock", "./my_blog/yarn.lock");
    fs.copyFileSync(".env", "./my_blog/.env");
    fs.copyFileSync(".env.local", "./my_blog/.env.local");
    await zip("./my_blog", `./my_blog.zip`);
    fs.removeSync("./my_blog");
  } catch (e) {
    console.error(e);
  }
})();

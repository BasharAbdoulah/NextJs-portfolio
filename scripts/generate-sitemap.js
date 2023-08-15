const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://www.basharabdullah.com",
  pagesDirectory: path.resolve(__dirname, "../pages"),
  targetDirectory: path.resolve(__dirname, "../pages"),
});

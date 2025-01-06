const config = require("./config").default;

module.exports = {
  siteUrl: process.env.SITE_URL || `https://${config.domainName}`,
  generateRobotsTxt: true,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

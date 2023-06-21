const newsRouter = require("./news.js");
const siteRouter = require("./site.js");
const couresRouter = require("./courses.js");
const meRouter = require("./me.js");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", couresRouter);

  app.use("/me", meRouter);

  app.use("/", siteRouter);
}

module.exports = route;

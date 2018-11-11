const express = require("express");

module.exports = express
  .Router()
  .use("/api", require("./middleware/api"))
  .get("*", require("./middleware/pages"));

// const next = require("next");

// const pages = next({ dev: true });
// const handler = pages.getRequestHandler();

// pages.prepare()

// let changes = 0;

// module.exports = function app(req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(
//     `As of ${new Date()}, ${req.url} changed <strong>${changes}</strong> times.`
//   );

//   changes++;
// };

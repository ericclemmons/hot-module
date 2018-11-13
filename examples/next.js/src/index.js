require("hot-module")();

const express = require("express");

const app = require("./app");

if (module.hot) {
  module.hot.accept("./app", function() {
    console.log("🔁  Hot-reloaded `./app`");
  });

  console.info("✅  Server-side HMR Enabled!");
} else {
  console.info("❌  Server-side HMR Not Supported.");
}

express()
  .use((req, res) => require("./app")(req, res))
  .listen(3000, () => {
    console.log("🚀 Listening at http://localhost:3000");
  });

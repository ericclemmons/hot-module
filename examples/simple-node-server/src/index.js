const { createServer } = require("http");

require("hot-module")();

if (module.hot) {
  module.hot.accept("./app", function() {
    console.log("🔁  HMR Reloading `./app`");
  });

  console.info("✅  Server-side HMR Enabled!");
} else {
  console.info("❌  Server-side HMR Not Supported.");
}

createServer((req, res) => require("./app")(req, res)).listen(3000, () => {
  console.log("🚀 Listening at http://localhost:3000");
});

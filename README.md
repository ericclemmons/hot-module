# `hot-module`

```js
const { createServer } = require("http");

// 👇 Polyfill `module.hot`
require("hot-module")();

if (module.hot) {
  // 👇 Watch `./app` for changes
  module.hot.accept("./app", function() {
    console.log("🔁  Hot-reloaded `./app`");
  });

  console.info("✅  Server-side HMR Enabled!");
} else {
  console.info("❌  Server-side HMR Not Supported.");
}

createServer((req, res) => {
  // 👇 Always reference latest `./app` between requests
  require("./app")(req, res);
}).listen(3000, () => {
  console.log("🚀 Listening at http://localhost:3000");
});
```

## Related Projects

- [hot-module-replacement](https://github.com/sidorares/hot-module-replacement)
- [node-dev](https://github.com/fgnass/node-dev)
- [nodemon](https://github.com/remy/nodemon)
- [piping](https://github.com/mdlawson/piping)
- [webpack-hot-server-example](https://github.com/ericclemmons/webpack-hot-server-example)

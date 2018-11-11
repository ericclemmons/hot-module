const next = require("next");

const pages = next({ dev: true });
const handler = pages.getRequestHandler();

pages.prepare();

module.exports = handler;

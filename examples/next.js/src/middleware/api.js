const express = require("express");

module.exports = express.Router().get("/", (req, res) => {
  res.send(`✅  Date is now: <strong>${new Date()}</strong>`);
});

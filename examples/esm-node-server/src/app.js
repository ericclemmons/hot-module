module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Howdy!</h1>
  `);
};

// Minimal frontend HTTP server (Node).
// Its presence at the repo ROOT (via package.json) causes the deployer to
// classify the whole project as Node, shadowing the Python/Go backends.
// Unlike a print-and-exit stub, this stays running and listens on $PORT, so
// the (mis)detected Node deploy stays up instead of crash-looping.
const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("frontend (Node) running\n");
});

server.listen(port, () => {
  console.log(`frontend (Node) running on :${port}`);
});

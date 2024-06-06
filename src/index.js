const Server = require("http").createServer;
const path = require("path");

// start server
// DO NOT USE THIS IN PRODUCTION
// If you use this in production, the server serves all files in the directory where this script is located.
const server = new Server((req, res) => {
  const filePath = req.url === "/" ? "/index.html" : req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    require("fs").readFileSync(path.join(__dirname, "../", filePath.slice(1)))
  );
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/.reg/index.html");
});

// Receive SIGINT signal and close the server
process.on("SIGINT", () => {
  server.close();
  process.exit();
});

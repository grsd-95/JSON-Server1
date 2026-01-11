const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

// IMPORTANT for Render
server.use(cors());
server.use(middlewares);
server.use(router);

// IMPORTANT: bind to 0.0.0.0
server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${port}`);
});

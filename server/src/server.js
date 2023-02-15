const http = require("http");
require("dotenv").config();
//
//
const PORT = process.env.PORT;
const { mongoConnect } = require("./services/mongo");

const app = require("./app");
//
//
//
const server = http.createServer(app);
//
//
async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.... yeah bois!`);
  });
}
//
startServer();

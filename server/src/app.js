const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
//
// New functions pulled in
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
//
const { api } = require("./routes/api");
//

const app = express();
//
//
//
// Middleware to handle requests coming in!
// Secruity related middleware CORS
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);
//
app.use(morgan("combined"));
//
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
//
app.use("/v1", api);
//
//
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//
//
//
module.exports = app;

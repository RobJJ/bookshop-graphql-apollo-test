const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
//

//
// removing this for new implementation
// const { api } = require("./routes/api");
//

const app = express();
//
//
// Dissabled this CORS middleware because Apollo handles! can add more settings to Apollo when setting the server...
// Middleware to handle requests coming in!
// Secruity related middleware CORS
// app.use(
//   cors({
//     origin: "http://localhost:8000",
//   })
// );
// app.use(cors());
//
app.use(morgan("combined"));
//
// do I need this then? --- going to dissable and see
// app.use(express.json());
// removed this for testing....
app.use(express.static(path.join(__dirname, "..", "public")));
//
// remove this api from the app middleware... apollo/graphql will handle... because we have remove this api router.. all routes will be handled by apollo?
// app.use("/v1", api);
//
// removed this for testing....
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//
//
//
module.exports = app;

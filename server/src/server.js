const http = require("http");
require("dotenv").config();
const path = require("path");
const colors = require("colors");
//
// New functions pulled in
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
//
const PORT = process.env.PORT;
const { mongoConnect } = require("./services/mongo");
//
//
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
//
//
//

//
//
//
// const server = http.createServer(app);
//
//
// async function startServer() {
//   await mongoConnect();

//   server.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}.... yeah bois!`);
//   });
// }
// //
// startServer();
//
// NEW APPROACH TO SERVER USING GRAPHQL AND APOLLO ****************
//
async function startApolloServer() {
  // imported about.. contains its own middleware
  // const app = express();
  // this needs to be
  const app = require("./app");

  // this makeExecutableSchema is replacing the buildSchema function we used earlier to set the schema
  const schema = makeExecutableSchema({
    // typeDefs are like schemas... pass in the 'arr' as created by the loadFilesSync function provided by tools
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  // contains all middleware
  const server = new ApolloServer({
    schema: schema,
  });

  // still going to connect to mongo here for DB
  await mongoConnect();

  await server.start();
  // connect the middleware with express server
  server.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.listen(3000, () => {
    console.log(`Running graphQL apollo server...`.cyan);
  });
}

startApolloServer();

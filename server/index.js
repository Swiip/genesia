const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = fs
  .readFileSync(path.resolve(__dirname, "./schema.graphql"))
  .toString();

const resolvers = {
  Query: {
    players: () => [{ name: "Swiip" }]
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.use(express.static("../client/public"));

app.listen(3000, () => console.log("Genesia server listening on port 3000!"));

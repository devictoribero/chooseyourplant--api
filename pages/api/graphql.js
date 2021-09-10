import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import withCors from "../../lib/cors";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // Connection to Database
  const dbUri = process.env.DB_URI;
  const clientDB = new MongoClient(
    dbUri
      .replace("<db_user>", process.env.DB_USER)
      .replace("<db_password>", process.env.DB_PASSWORD)
  );

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    cors: { origin: true },
    context: { clientDB },
  });

  const apiRequestHandler = apolloServer.createHandler({
    path: "/api/graphql",
  });

  // By default, NextJS doesn't add any headers, so we have to add
  // the headers that allows to use CORS manually.
  return withCors(apiRequestHandler)(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import withCors from "../../lib/cors";
import dotenv from "dotenv";
import { getDatabaseConnection } from "lib/mongodb";

// Required to include `process.env` variables
dotenv.config();

export default async function handler(req, res) {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    cors: { origin: true },
    context: async () => {
      const database = "chooseyourplant-dev";
      const clientDB = await getDatabaseConnection({ database });

      return { clientDB };
    },
  });

  const endpointAPI = "/api/graphql";
  const apiRequestHandler = apolloServer.createHandler({ path: endpointAPI });

  // By default, NextJS doesn't add any headers, so we have to add
  // the headers that allows to use CORS manually.
  return withCors(apiRequestHandler)(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import withCors from "../../lib/cors";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: true,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withCors(apolloServer.createHandler({ path: "/api/graphql" }));

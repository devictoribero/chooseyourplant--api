import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Plant {
    id: ID
    latinName: String
  }

  type Query {
    getPlants: [Plant]
  }
`;

import { FindOnePlant } from "src/Plant/application/FindOnePlant";
import { FindManyPlants } from "src/Plant/application/FindManyPlants";
import { FindManyShops } from "src/Company/Application/FindManyShops";
import { TransformPlantToNewPlantApiContract } from "src/Plant/application/a";

const plantTransformer = new TransformPlantToNewPlantApiContract();

export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const { clientDB } = context;
      const findManyPlants = new FindManyPlants({ clientDB });

      const plants = await findManyPlants.run({ query: {}, limit: 1000 });

      if (!plants || plants.length === 0) {
        return [];
      }

      return plants;
    },
    getPlant: async (root, args, context) => {
      const { slug } = args;
      const { clientDB } = context;
      const findOnePlant = new FindOnePlant({ clientDB });

      const plant = await findOnePlant.run({ slug });

      return plant || null;
    },
    getManyShops: async (root, args, context) => {
      const { hasEcommerce, startsWith = null } = args;
      const { clientDB } = context;
      const findManyShops = new FindManyShops({ clientDB });

      // TODO
      // work in a criteria object
      const shops = await findManyShops.run({
        query: { hasEcommerce, startsWith },
        limit: 1000,
      });

      return shops;
    },
  },
};

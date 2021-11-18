import { transformPlantToNewPlantApiContract } from "src/Plant/application/transformPlantToNewPlantApiContract";
import { transformShopToNewShopApiContract } from "src/Shop/Application/transformShopToNewShopApiContract";
import { FindOnePlant } from "src/Plant/application/FindOnePlant";
import { FindManyPlants } from "src/Plant/application/FindManyPlants";
import { FindManyShops } from "src/Shop/Application/FindManyShops";

export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const { clientDB } = context;
      const findManyPlants = new FindManyPlants({ clientDB });

      const plants = await findManyPlants.run({ query: {}, limit: 1000 });

      return (plants || []).map(transformPlantToNewPlantApiContract);
    },
    getPlant: async (root, args, context) => {
      const { slug } = args;
      const { clientDB } = context;
      const findOnePlant = new FindOnePlant({ clientDB });

      const plant = await findOnePlant.run({ slug });

      return plant ? transformPlantToNewPlantApiContract(plant) : null;
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

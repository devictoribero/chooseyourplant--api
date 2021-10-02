import { transformPlantToNewPlantApiContract } from "src/plants/application/transformPlantToNewPlantApiContract";
import { transformShopToNewShopApiContract } from "src/shops/application/transformShopToNewShopApiContract";
import { FindOnePlant } from "src/plants/application/FindOnePlant";
import { FindManyPlants } from "src/plants/application/FindManyPlants";
import { getShops } from "src/shops/application/getShops";

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
      const { hasEcommerce, startsWith } = args;
      const { clientDB } = context;
      const shops = await getShops({ clientDB, hasEcommerce, startsWith });

      return shops.map(transformShopToNewShopApiContract);
    },
  },
};

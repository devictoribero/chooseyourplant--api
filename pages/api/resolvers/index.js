import { transformPlantToNewPlantApiContract } from "src/plants/application/transformPlantToNewPlantApiContract";
import { transformShopToNewShopApiContract } from "src/shops/application/transformShopToNewShopApiContract";
import { getPlant } from "src/plants/infrastructure/getPlant";
import { getPlants } from "src/plants/infrastructure/getPlants";
import { getShops } from "src/shops/infrastructure/getShops";

export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const plants = await getPlants();

      return plants.map(transformPlantToNewPlantApiContract);
    },
    getPlant: async (root, args, context) => {
      const { slug } = args;
      const requestedPlant = await getPlant({ slug });

      if (!Boolean(requestedPlant)) {
        return null;
      }

      return transformPlantToNewPlantApiContract(requestedPlant);
    },
    getManyShops: async (root, args, context) => {
      const shops = await getShops();

      return shops.map(transformShopToNewShopApiContract);
    },
  },
};

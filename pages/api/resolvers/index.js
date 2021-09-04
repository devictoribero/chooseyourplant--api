import { transformPlantToNewPlantApiContract } from "lib/plants";

const plantsFileContent = require(`public/plants.json`);
// const shopsFileContent = require(`public/shops.json`);

export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const plants = [];

      const plantsInLocal = Object.values(plantsFileContent);

      plantsInLocal.forEach((plant) =>
        plants.push(transformPlantToNewPlantApiContract(plant))
      );

      return plants;
    },
    getPlant: (root, args, context) => {
      const { slug } = args;

      const requestedPlant = plantsFileContent[slug];
      const doesPlantExist = Boolean(requestedPlant);

      if (!doesPlantExist) {
        return null;
      }

      const plantParsed = transformPlantToNewPlantApiContract(requestedPlant);

      return { ...plantParsed, id: null };
    },
    getManyShops: (root, args, context) => {
      const shops = [];

      const shopsInLocal = Object.values(shopsFileContent);

      shopsInLocal.forEach((plant) =>
        shops.push(transformShopToNewShopApiContract(plant))
      );

      return shops;
    },
  },
};

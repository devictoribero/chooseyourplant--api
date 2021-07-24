const plantsFileContent = require(`public/plants.json`);

export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const plants = [];

      const plantsInLocal = Object.values(plantsFileContent);

      plantsInLocal.forEach((plant) => plants.push(plant));

      return plants;
    },
    getPlant: (root, args, context) => {
      const { slug } = args;

      const requestedPlant = plantsFileContent[slug];
      const doesPlantExist = Boolean(requestedPlant);

      if (!doesPlantExist) {
        return null;
      }

      return { id: null, latinName: requestedPlant.latinName };
    },
  },
};

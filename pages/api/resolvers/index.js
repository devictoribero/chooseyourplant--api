export const resolvers = {
  Query: {
    getManyPlants: async (root, args, context) => {
      const plants = [];

      const fs = require("fs");
      const pathToPlants = `server/plants`;
      const fileNames = fs.readdirSync(pathToPlants);
      fileNames.forEach((fileName) => {
        const fileContent = fs.readFileSync(`${pathToPlants}/${fileName}`);
        const plantJSON = JSON.parse(fileContent);
        plants.push(plantJSON);
      });

      return plants;
    },
    getPlant: (root, args, context) => {
      const { slug } = args;

      const fs = require("fs");
      const pathToPlantFile = `server/plants/${slug}.json`;
      const doesPlantExist = fs.existsSync(pathToPlantFile);

      if (!doesPlantExist) {
        return null;
      }

      const plantFileContent = fs.readFileSync(pathToPlantFile);
      const plantJSON = JSON.parse(plantFileContent);

      return { id: "2", latinName: plantJSON.latinName };
    },
  },
};

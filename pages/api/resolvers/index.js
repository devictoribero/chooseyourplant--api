export const resolvers = {
  Query: {
    getManyPlants: (root, args, context) => {
      const plants = [
        { id: "1", latinName: "Alocasia Amazonica" },
        { id: "2", latinName: "Monstera Adansonii" },
      ];

      return plants;
    },
    getPlant: (root, args, context) => {
      console.log(args);
      const { slug } = args;

      // find plant by slug
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

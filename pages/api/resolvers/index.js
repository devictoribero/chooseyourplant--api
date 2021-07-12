export const resolvers = {
  Query: {
    getPlants: async () => {
      const plants = [
        { id: "1", latinName: "Alocasia Amazonica" },
        { id: "2", latinName: "Monstera Adansonii" },
      ];

      return plants;
    },
  },
};

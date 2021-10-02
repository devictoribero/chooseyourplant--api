const dotenv = require("dotenv");
const {
  transformPlantToNewPlantApiContract,
} = require("../src/plants/application/transformPlantToNewPlantApiContract");
const {
  transformShopToNewShopApiContract,
} = require("../src/shops/application/transformShopToNewShopApiContract");
const { getDatabaseConnection } = require("../lib/mongodb");
const { InsertManyPlants } = require("src/plants/application/InsertManyPlants");

// Required to include `process.env` variables
dotenv.config();

initPopulateDB({ database: "chooseyourplant-dev" });

// Initializes the database given a database name for development purposes
async function initPopulateDB({ database }) {
  // Connection to the database
  const clientDB = await getDatabaseConnection({ database });
  console.log("✅ Connected to the server successfully :)");

  // Populate plants to database
  const insertManyPlants = new InsertManyPlants({ clientDB });
  await insertManyPlants.run(retrievePlantsFromLocal());
  console.log("🌱 Inserted plants tot he database successfully :)");

  // Populate shops to database
  // const insertManyPlants = new InsertManyPlants({ clientDB });
  // const plantsToInsertToDB = retrievePlantsFromLocal();
  // await insertManyPlants.run(plantsToInsertToDB);
  // console.log("🌱 Inserted shops tot he database successfully :)");
}

async function retrievePlantsFromLocal() {
  // Get all the plants that are generated statically
  const plantsJSON = require(`${process.cwd()}/public/plants.json`);

  // We get the new API format for all the plants
  return Object.values(plantsJSON).map(transformPlantToNewPlantApiContract);
}

// async function retrieveShops() {
//   // Get all the plants that are generated statically
//   const shopsJson = require(`${process.cwd()}/public/shops.json`);

//   // We get the new API format for all the plants
//   return Object.values(shopsJson).map(transformShopToNewShopApiContract);
// }

// function createCompanyFromShop(shop) {
//   return {
//     name: shop.name,
//     description: shop.description,
//     shops: [shop],
//   };
// }

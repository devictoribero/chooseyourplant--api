const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const {
  transformPlantToNewPlantApiContract,
} = require("../src/plants/application/transformPlantToNewPlantApiContract");
const { getDatabaseUri } = require("../lib/database");
const {
  transformShopToNewShopApiContract,
} = require("../src/shops/application/transformShopToNewShopApiContract");

// Required to include `process.env` variables
dotenv.config();

initPopulateDB({ database: "cyp-dev" });

// Initializes the database given a database name for development purposes
async function initPopulateDB({ database } = {}) {
  const dbUri = getDatabaseUri();
  const clientDB = new MongoClient(dbUri);

  try {
    await clientDB.connect();
    const db = await clientDB.db(database);
    console.log("✅ Connected to the server successfully :)");

    // Populate the database with companies
    const shops = await retrieveShops();
    const companiesToPopulate = shops.map(createCompanyFromShop);
    const companiesResults = await db
      .collection("companies")
      .insertMany(companiesToPopulate);

    console.log(
      `✅ ${companiesResults.insertedCount} companies were inserted successfully`
    );

    // Populate the database with plants
    const plantsToPopulate = await retrievePlants();
    const plantResults = await db
      .collection("plants")
      .insertMany(plantsToPopulate);

    console.log(
      `✅ ${plantResults.insertedCount} plants were inserted successfully `
    );
  } catch (error) {
    console.error(error);
  } finally {
    clientDB.close();
  }
}

async function retrievePlants() {
  // Get all the plants that are generated statically
  const plantsJSON = require(`${process.cwd()}/public/plants.json`);

  // We get the new API format for all the plants
  return Object.values(plantsJSON).map(transformPlantToNewPlantApiContract);
}

async function retrieveShops() {
  // Get all the plants that are generated statically
  const shopsJson = require(`${process.cwd()}/public/shops.json`);

  // We get the new API format for all the plants
  return Object.values(shopsJson).map(transformShopToNewShopApiContract);
}

function createCompanyFromShop(shop) {
  return {
    name: shop.name,
    description: shop.description,
    shops: [shop],
  };
}

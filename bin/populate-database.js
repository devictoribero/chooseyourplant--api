const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const {
  transformPlantToNewPlantApiContract,
} = require("../src/plants/application/transformPlantToNewPlantApiContract");
const { getDatabaseUri } = require("../lib/database");

// Required to include `process.env` variables
dotenv.config();

initPopulateDB({ database: "cyp-dev" });

// Initializes the database given a database name for development purposes
async function initPopulateDB({ database } = {}) {
  const dbUri = getDatabaseUri();
  const clientDB = new MongoClient(dbUri);

  try {
    await clientDB.connect();
    console.log("✅ Connected to the server successfully :)");

    const plantsToPopulate = await retrievePlants();

    const plantResults = await clientDB
      .db(database)
      .collection("plants")
      .insertMany(plantsToPopulate);

    console.log(
      `✅ ${plantResults.insertedCount} plants were inserted successfully `
    );

    // console.log(collections);
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

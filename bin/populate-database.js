const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const {
  transformPlantToNewPlantApiContract,
} = require("../src/plants/application/transformPlantToNewPlantApiContract");

// Required to include `process.env` variables
dotenv.config();

async function initPopulateDB({ database } = {}) {
  const dbUri = getDatabaseUri();
  const clientDB = new MongoClient(dbUri);

  try {
    await clientDB.connect();
    console.log("✅ Connected to the server successfully :)");

    const plantsToPopulate = retrievePlants();

    const results = await clientDB
      .db(database)
      .collection("plants")
      .insertMany(plantsToPopulate);

    console.log(
      `✅ ${results.insertedCount} plants were inserted successfully `
    );

    // console.log(collections);
  } catch (error) {
    console.error(error);
  } finally {
    clientDB.close();
  }
}

initPopulateDB({ database: "chooseyourplant-test" });

function getDatabaseUri() {
  const dbUriPlaceholder =
    "DB_URI=mongodb+srv://<db_user>:<db_password>@chooseyourplant-db.j0jhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const dbUri = dbUriPlaceholder
    .replace("<db_user>", process.env.DB_USER)
    .replace("<db_password>", process.env.DB_PASSWORD);

  return dbUri;
}

function retrievePlants() {
  // Get all the plants that are generated statically
  const plantsJSON = require(`${process.cwd()}/public/plants.json`);

  // We get the new API format for all the plants
  return Object.values(plantsJSON).map(transformPlantToNewPlantApiContract);
}

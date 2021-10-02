import { MongoClient } from "mongodb";
import { getDatabaseUri } from "./database";

let cachedDb;

// `database` param refers to the name of the database
export async function getDatabaseConnection({ database }) {
  if (cachedDb) {
    console.log("Existing cached connection found!");
    return cachedDb;
  }

  console.log("Aquiring new DB connection....");
  try {
    // Connect to our MongoDB database hosted on MongoDB Atlas
    const client = new MongoClient(getDatabaseUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    // Specify which database we want to use
    const db = await client.db(database);

    cachedDb = db;
    return db;
  } catch (error) {
    console.log("ERROR aquiring DB Connection!");
    console.log(error);
    throw error;
  }
}

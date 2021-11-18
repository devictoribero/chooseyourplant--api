import dotenv from "dotenv";
import { transformPlantToNewPlantApiContract } from "../src/Plant/application/transformPlantToNewPlantApiContract";
import { transformShopToNewShopApiContract } from "../src/Shop/Application/transformShopToNewShopApiContract";
import { getDatabaseConnection } from "../lib/mongodb";
// todo make absolute paths work
import { InsertManyCompanies } from "../src/Company/Application/InsertManyCompanies";
import { InsertManyPlants } from "../src/Plant/application/InsertManyPlants";

// Required to include `process.env` variables
dotenv.config();

(async function () {
  await initPopulateDB({ database: "chooseyourplant-dev" });
  process.exit();
})();

// Initializes the database given a database name for development purposes
async function initPopulateDB({ database }) {
  // Connection to the database
  const clientDB = await getDatabaseConnection({ database });
  console.log("✅ Connected to the server successfully :)");

  // Populate plants to database
  const insertManyPlants = new InsertManyPlants({ clientDB });
  await insertManyPlants.run(await retrievePlantsFromLocal());
  console.log("🌱 Inserted plants to the database successfully :)");

  // Populate companies to database
  // ⚠️ DISCLAIMER: At this moment, each shop is a company.
  // todo: I will have to somehow relate shops that are part of the same company.
  const insertManyCompanies = new InsertManyCompanies({ clientDB });
  const plantsToInsertToDB = await retrieveShopsFromLocal();
  const companies = plantsToInsertToDB
    .sort(sortCompaniesByName)
    .map(createCompanyFromShop);
  await insertManyCompanies.run(companies);
  console.log(
    "🏪 Inserted companies and shops to the database successfully :)"
  );
}

async function retrievePlantsFromLocal() {
  // Get all the plants that are generated statically
  const plantsJSON = require(`${process.cwd()}/public/plants.json`);

  // We get the new API format for all the plants
  return Object.values(plantsJSON).map(transformPlantToNewPlantApiContract);
}

async function retrieveShopsFromLocal() {
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

function sortCompaniesByName(companyA, companyB) {
  const textA = companyA.name.toUpperCase();
  const textB = companyB.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
}

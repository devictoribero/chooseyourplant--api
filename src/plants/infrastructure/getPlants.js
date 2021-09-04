// Implementation of fetching plants
// This is tightly coupled to the repository
export async function getPlants() {
  const plantsFileContent = require(`public/plants.json`);
  const plantsInLocal = Object.values(plantsFileContent);

  return plantsInLocal;
}

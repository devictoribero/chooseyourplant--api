// Implementation of fetching plants
// This is tightly coupled to the repository
export async function getPlant({ slug } = {}) {
  if (!slug) {
    throw new Error("`slug` is required to find a plant");
  }

  const plantsFileContent = require(`public/plants.json`);
  const requestedPlant = plantsFileContent[slug];

  return Boolean(requestedPlant) ? { id: null, ...requestedPlant } : null;
}

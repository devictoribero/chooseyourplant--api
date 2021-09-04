// Implementation of fetching plants
// This is tightly coupled to the repository
export async function getShops() {
  const shopsFileContent = require(`public/shops.json`);
  const shops = Object.values(shopsFileContent);

  return shops;
}

// Implementation of fetching plants
// This is tightly coupled to the repository
export async function getShops({ hasEcommerce, startsWith = "" }) {
  const shopsFileContent = require(`public/shops.json`);
  const shops = Object.values(shopsFileContent);

  const shopsFilteredByEcommerce =
    hasEcommerce !== undefined
      ? shops.filter((shop) => shop.meta.isSellingPlantsOnline === hasEcommerce)
      : shops;

  const shopsFilteredBySearchTerm = Boolean(startsWith)
    ? shopsFilteredByEcommerce.filter((shop) =>
        shopNameMatchesTerm(shop, startsWith)
      )
    : shopsFilteredByEcommerce;

  return shopsFilteredBySearchTerm;
}

function shopNameMatchesTerm(shop, startsWith) {
  const shopName = shop.name.toLowerCase();
  const startsWithLowerCased = startsWith.toLowerCase();
  const hasMatch = shopName.indexOf(startsWithLowerCased) === 0;

  return hasMatch;
}

import { ShopRepository } from "../domain/ShopRepository";

let repository;

export async function getShops({ clientDB, hasEcommerce, startsWith = "" }) {
  repository = new ShopRepository({ client: clientDB });

  const shops = repository.findMany({ query: {}, limit: 1000 });

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

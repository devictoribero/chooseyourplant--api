import { ShopRepository } from "../infrastructure/ShopMongoRepository";

export class FindManyShops {
  constructor({ clientDB }) {
    this.repository = new ShopRepository({ client: clientDB });
  }

  async run({ query = {}, limit = 1000 } = { query: {}, limit: 1000 }) {
    const { hasEcommerce, startsWith } = query;
    const shopsFound = await this.repository.findMany({ query, limit });

    if (!shopsFound || shopsFound.length === 0) {
      return [];
    }

    // TODO
    // The following logic should be implement in a criteria object
    const shopsFilteredByEcommerce =
      hasEcommerce !== undefined
        ? shopsFound.filter((shop) => shop.hasEcommerce === hasEcommerce)
        : shopsFound;

    const shopsFilteredBySearchTerm = Boolean(startsWith)
      ? shopsFilteredByEcommerce.filter((shop) =>
          shopNameMatchesTerm(shop, startsWith)
        )
      : shopsFilteredByEcommerce;

    return shopsFilteredBySearchTerm;
  }
}

function shopNameMatchesTerm(shop, startsWith) {
  const shopName = shop.name.toLowerCase();
  const startsWithLowerCased = startsWith.toLowerCase();
  const hasMatch = shopName.indexOf(startsWithLowerCased) === 0;

  return hasMatch;
}

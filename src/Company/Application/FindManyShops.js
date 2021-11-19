import { ShopRepository } from "../Infrastructure/ShopMongoRepository";

export class FindManyShops {
  constructor({ clientDB }) {
    this.repository = new ShopRepository({ client: clientDB });
  }

  async run({ query = {}, limit = 1000 } = { query: {}, limit: 1000 }) {
    const shopsFound = await this.repository.findMany({ query, limit });

    if (!shopsFound || shopsFound.length === 0) {
      return [];
    }

    const { hasEcommerce, startsWith } = query;
    // TODO
    // The following logic should be implement in a criteria object
    const shopsFilteredByEcommerce =
      hasEcommerce !== undefined
        ? shopsFound.filter((shop) => shop.hasEcommerce === hasEcommerce)
        : shopsFound;

    // Filter shops by search term
    const shopsFilteredBySearchTerm = Boolean(startsWith)
      ? shopsFilteredByEcommerce.filter((shop) =>
          shopNameMatchesTerm(shop, startsWith)
        )
      : shopsFilteredByEcommerce;

    // We group shops by the ones that have a description and not,
    // and we order them alphabetically.
    let shopsWithDescription = [];
    let shopsWithEmptyDescription = [];
    shopsFilteredBySearchTerm.forEach((shop) => {
      Boolean(shop.description)
        ? shopsWithDescription.push(shop)
        : shopsWithEmptyDescription.push(shop);
    });

    return [...shopsWithDescription, ...shopsWithEmptyDescription];
  }
}

function shopNameMatchesTerm(shop, startsWith) {
  const shopName = shop.name.toLowerCase();
  const startsWithLowerCased = startsWith.toLowerCase();

  return shopName.includes(startsWithLowerCased);
}

function sortCompaniesByName(companyA, companyB) {
  const textA = companyA.name.toUpperCase();
  const textB = companyB.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
}

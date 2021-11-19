const COMPANIES_COLLECTION = "companies";

export class ShopRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async findMany({ query, limit }) {
    const { startsWith } = query;

    // todo Cant apply a criteria object because the frontend
    // calls twice and the second time its without parameters
    // Need to fix this.
    // const criteria = startsWith
    //   ? { "shops.name": { $regex: /the sill/i } }
    //   : {};

    const cursor = await this.clientDB
      .collection(COMPANIES_COLLECTION)
      // .find(criteria)
      .find({})
      .limit(limit);

    const companiesFound = await cursor.toArray();

    if (!companiesFound) {
      return [];
    }

    // Return all the shops for all the companies.
    return companiesFound.map((company) => company.shops).flat();
  }

  async insertMany(shops) {
    return this.clientDB.collection(COMPANIES_COLLECTION).insertMany(shops);
  }
}

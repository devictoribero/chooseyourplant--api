const COMPANIES_COLLECTION = "companies";

export class ShopRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async findMany({ query, limit }) {
    const cursor = await this.clientDB
      .collection(COMPANIES_COLLECTION)
      .find(query)
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

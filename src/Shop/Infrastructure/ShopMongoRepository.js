const SHOPS_COLLECTION = "shops";

export class ShopRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async findMany({ query, limit }) {
    const cursor = await this.clientDB
      .collection(SHOPS_COLLECTION)
      .find(query)
      .limit(limit);

    return cursor.toArray() || [];
  }

  async insertMany(shops) {
    return this.clientDB.collection(SHOPS_COLLECTION).insertMany(shops);
  }
}

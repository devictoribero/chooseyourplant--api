export class ShopRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async findMany({ query, limit }) {
    const plantsCursor = await this.clientDB
      .collection("shops")
      .find(query)
      .limit(limit);

    return plantsCursor.toArray();
  }
}

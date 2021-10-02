const PLANTS_COLLECTION = "plants";

export class PlantRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async findOne({ slug }) {
    return this.clientDB.collection(PLANTS_COLLECTION).findOne({ slug });
  }

  async findMany({ query, limit }) {
    const plantsCursor = await this.clientDB
      .collection(PLANTS_COLLECTION)
      .find(query)
      .limit(limit);

    return plantsCursor.toArray();
  }

  async insert(plant) {
    return this.clientDB.collection(PLANTS_COLLECTION).insertOne(plant);
  }

  async insertMany(plants) {
    return this.clientDB.collection(PLANTS_COLLECTION).insertMany(plants);
  }
}

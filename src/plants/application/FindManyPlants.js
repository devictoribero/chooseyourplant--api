import { PlantRepository } from "../domain/PlantRepository";

export class FindManyPlants {
  constructor({ clientDB }) {
    this.repository = new PlantRepository({ client: clientDB });
  }

  async run({ query = {}, limit = 1000 } = { query: {}, limit: 1000 }) {
    return this.repository.findMany({ query, limit });
  }
}

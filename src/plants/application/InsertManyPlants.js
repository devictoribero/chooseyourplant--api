import { PlantRepository } from "../domain/PlantRepository";

export class InsertManyPlants {
  constructor({ clientDB }) {
    this.repository = new PlantRepository({ client: clientDB });
  }

  async run(plants) {
    return this.repository.insertMany(plants);
  }
}

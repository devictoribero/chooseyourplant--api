import { PlantRepository } from "../domain/PlantRepository";

export class FindOnePlant {
  constructor({ clientDB }) {
    this.repository = new PlantRepository({ client: clientDB });
  }

  async run({ slug }) {
    if (!slug) {
      throw new Error("`slug` is required to find a plant");
    }

    return this.repository.findOne({ slug });
  }
}

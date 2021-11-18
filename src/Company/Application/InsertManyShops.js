import { ShopRepository } from "../../Company/Infrastructure/ShopMongoRepository";

export class InsertManyShops {
  constructor({ clientDB }) {
    this.repository = new ShopRepository({ client: clientDB });
  }

  async run(shops) {
    return this.repository.insertMany(shops);
  }
}

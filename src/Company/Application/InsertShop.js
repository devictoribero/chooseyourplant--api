import { ShopRepository } from "../../Company/Infrastructure/ShopMongoRepository";

export class InsertShop {
  constructor({ clientDB }) {
    this.repository = new ShopRepository({ client: clientDB });
  }

  async run(shop) {
    return this.repository.insertOne(shop);
  }
}

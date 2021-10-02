import { CompanyRepository } from "../Infrastructure/CompanyMongoRepository";

export class InsertManyCompanies {
  constructor({ clientDB }) {
    this.repository = new CompanyRepository({ client: clientDB });
  }

  async run({ companies }) {
    return this.repository.insertMany({ companies });
  }
}

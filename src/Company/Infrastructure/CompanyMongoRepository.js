const COMPANY_COLLECTION = "companies";

export class CompanyRepository {
  constructor({ client }) {
    this.clientDB = client;
  }

  async insertMany(companies) {
    // TODO
    // Implement this
    return this.clientDB.collection(COMPANY_COLLECTION).insertMany(companies);
  }
}

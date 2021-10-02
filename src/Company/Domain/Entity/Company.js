export class Company {
  constructor({ name, description = null, shops = [] }) {
    if (!name || name === "") {
      throw new Error("Url is required for a SocialAccount");
    }

    this.name = name;
    this.description = description;
    this.shops = shops || [];
  }
}

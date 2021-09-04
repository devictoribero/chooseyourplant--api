export class PhoneNumber {
  constructor({ countryCode, number }) {
    if (!countryCode) {
      throw new Error("`countryCode` is required for a PhoneNumber");
    }

    if (!number) {
      throw new Error("`number` is required for a PhoneNumber");
    }

    this.countryCode = countryCode;
    this.number = number;
  }
}

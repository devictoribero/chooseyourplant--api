import { Coordinates } from "./Coordinates";

export class PhysicalLocation {
  constructor({ address = null, coordinates = null, country }) {
    if (!address && !coordinates) {
      throw new Error(
        "Address or coordinates must be provided for a physical location"
      );
    }

    this.address = address;
    this.coordinates = new Coordinates();
    this.country = country;
  }
}

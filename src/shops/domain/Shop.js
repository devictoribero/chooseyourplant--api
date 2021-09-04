import { PhoneNumber } from "./PhoneNumber";
import { PhysicalLocation } from "./PhysicalLocation";
import { SocialAccount } from "./SocialAccount";

export class Shop {
  constructor({
    name,
    website = null,
    coordinates = null,
    country,
    countryCode,
    email,
    address,
    socialUrls = null,
    phoneNumber,
  }) {
    if (!name) {
      throw new Error('"name" is required for a Shop');
    }

    this.name = name;
    this.website = website;
    this.email = email;
    this.country = country;
    this.catalogue = [];
    this.phone = new PhoneNumber({ countryCode, number: phoneNumber });
    this.location = new PhysicalLocation({
      country,
      address,
      coordinates: { lat: coordinates.lat, lng: coordinates.lng },
    });
    this.socials =
      socialUrls && socialUrls.map((url) => new SocialAccount({ url }));
  }
}

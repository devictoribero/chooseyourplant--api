import { Coordinates } from "./Coordinates";

export class Shop {
  constructor({
    name,
    website = null,
    coordinates = null,
    country,
    email,
    address,
  }) {
    if (!name) {
      throw new Error('"name" is required for a Shop');
    }

    this.name = name;
    this.website = website;
    this.email = email;
    this.country = country;

    // Physical Location of the shop
    this.location = {
      country: shop.location.country.name,
      coordinates:
        coordinates &&
        new Coordinates({ lat: coordinates.lat, lng: coordinates.lng }),
      address: address,
    };

    this.phone = {
      prefix: shop.location.country.countryCode,
      number: shop.contact.phone.number,
    };
    this.socials = getSocials(shop);
    this.catalogue = [];
  }
}

const SocialMediaPlatforms = {
  facebook: "Facebook",
  instagram: "Instagram",
};

function getSocials(shop) {
  let socials = [];

  const { social } = shop;
  const igAccount = social.instagram || "";

  if (Boolean(igAccount) && !igAccount.includes("facebook.com")) {
    socials.push({
      type: SocialMediaPlatforms.instagram,
      url: `https://www.instagram.com/${igAccount}/`,
    });
  }

  const { website } = shop;
  if (website && website.includes("facebook.com")) {
    // There are some shops that have as website a facebook url.
    socials.push({
      type: SocialMediaPlatforms.facebook,
      url: website,
    });
  } else if (igAccount && igAccount.includes("facebook.com")) {
    // There are some shops that have as instagram account a facebook url.
    socials.push({
      type: SocialMediaPlatforms.facebook,
      url: igAccount,
    });
  }

  return socials;
}

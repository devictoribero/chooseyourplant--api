export function transformShopToNewShopApiContract(shop) {
  return {
    name: shop.name,
    location: {
      country: shop.location.country.name,
      coordinates: getCoordinates(shop),
      address: shop.location.address,
    },
    website: shop.website,
    contact: {
      email: shop.contact.email,
      phone: {
        prefix: shop.location.country.countryCode,
        number: shop.contact.phone.number,
      },
    },
    socials: getSocials(shop),
    catalogue: [],
  };
}

function getCoordinates(shop) {
  const { coordinates } = shop.location;

  return coordinates
    ? {
        latitude: shop.location.coordinates.lat,
        longitude: shop.location.coordinates.lng,
      }
    : null;
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

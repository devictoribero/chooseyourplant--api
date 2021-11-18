function transformShopToNewShopApiContract(shop) {
  
  const { country } = shop.location;

  return {
    name: shop.name,
    description: shop.description,
    location: {
      country: country.name ?? null,
      coordinates: getCoordinates(shop),
      address: shop.location.address,
    },
    website: shop.website,
    hasEcommerce: shop?.meta?.isSellingPlantsOnline,
    contact: {
      email: shop.contact.email,
      phone: {
        prefix: country.countryCode ?? null,
        number: shop.contact.phone.number,
      },
    },
    socials: getSocials(shop),
    catalogue: [],
  };
}

module.exports = { transformShopToNewShopApiContract };

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
  let socialsParsed = [];

  const { socials } = shop;
  const igAccount = socials.instagram || "";

  if (Boolean(igAccount) && !igAccount.includes("facebook.com")) {
    socialsParsed.push({
      type: SocialMediaPlatforms.instagram,
      url: `https://www.instagram.com/${igAccount}/`,
    });
  }

  const { website } = shop;
  if (website && website.includes("facebook.com")) {
    // There are some shops that have as website a facebook url.
    socialsParsed.push({
      type: SocialMediaPlatforms.facebook,
      url: website,
    });
  } else if (igAccount && igAccount.includes("facebook.com")) {
    // There are some shops that have as instagram account a facebook url.
    socialsParsed.push({
      type: SocialMediaPlatforms.facebook,
      url: igAccount,
    });
  }

  return socials;
}

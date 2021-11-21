export class TransformPlantToNewPlantApiContract {
  transform(plant) {
    return {
      id: plant.id,
      latinName: plant.latinName,
      mostCommonName: plant.mostCommonName,
      names: plant.names,
      slug: plant.slug,
      description: plant.description,
      bio: {
        family: plant.family ?? null,
        subfamily: null,
        variety: plant.plantVariety ?? null,
        origins: plant.origins ?? null,
      },
      physicalCharacteristics: {
        // estimatedMaturePlantHeight is in centimeters
        estimatedMaturePlantHeight: plant.heightCm,
        foliage: {
          size: getFoliageSize(plant.leafSize),
          features: getFoliageFeatures(plant),
          // todo add feature of has pattern
          hasPattern: false,
        },
      },
      images: getPlantImages(plant.images),
      videos: getPlantVideos(plant.videos),
      popularity: getPlantPopularity(plant),
      linksToBuy: getLinksToBuyPlant(plant.productLinks),
      cares: getPlantCares(plant),
      growth: getPlantGrowth(plant),
      features: getPlantFeatures(plant),
    };
  }
}

const FoliageSize = {
  Mini: "Mini",
  Small: "Small",
  Medium: "Medium",
  Big: "Big",
  Giant: "Giant",
};

function getFoliageSize(size) {
  if (size === "mini") {
    return FoliageSize.Mini;
  }

  if (size === "small") {
    return FoliageSize.Small;
  }

  if (size === "medium") {
    return FoliageSize.Medium;
  }

  if (size === "big") {
    return FoliageSize.Big;
  }

  if (size === "giant") {
    return FoliageSize.Giant;
  }
}

const FoliageFeature = {
  Variegated: "Variegated",
  Albino: "Albino",
};

// TODO add foliage features feature
function getFoliageFeatures(plant) {
  let foliageFeatures = [];
}

function getPlantImages(images) {
  return images.map((img) => ({
    owner: img.owner
      ? {
          displayName: img.owner.name,
          url: img.owner.link,
        }
      : null,
    src: img.src,
  }));
}

function getPlantVideos(videos) {
  if (!videos) {
    return null;
  }

  return videos.map((video) => ({
    owner: { displayName: video.author.name, url: video.author.link },
    src: video.link,
  }));
}

const PlantPopularity = {
  Classic: "Classic",
  Trendy: "Trendy",
  Rare: "Rare",
};
function getPlantPopularity(plant) {
  if (plant.isTrendy) {
    return PlantPopularity.Trendy;
  }

  if (plant.isRare) {
    return PlantPopularity.Rare;
  }

  if (plant.isPopular) {
    return PlantPopularity.Classic;
  }
}

function getLinksToBuyPlant(linksToBuyPlant) {
  if (!linksToBuyPlant || (linksToBuyPlant && linksToBuyPlant.length === 0)) {
    return [];
  }

  return linksToBuyPlant.map((l) => ({
    isAffiliate: l.isAffiliate,
    shop: {
      name: l.shop,
    },
    url: l.href,
    prices: [
      {
        amount: l.lowestPrice.amount,
        currency: getCurrency(l.lowestPrice.currency),
      },
    ],
  }));
}

function getCurrency(currency) {
  if (currency.iso === "USD") {
    return {
      name: "US Dollar",
      iso: "USD",
      symbol: "$",
    };
  }

  if (currency.iso === "EUR") {
    return {
      name: "Euro",
      iso: "EUR",
      symbol: "€",
    };
  }

  if (currency.iso === "GBP") {
    return {
      name: "British Pound",
      iso: "GBP",
      symbol: "£",
    };
  }
}

const CareDifficulty = {
  Easy: "Easy",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
};

function getPlantCares(plant) {
  return {
    difficulty: getCareDifficulty(plant.difficulty),
    light: {
      preferredExposure: getPreferredLightExposure(plant.light),
      exposures: getLightExposures(plant.light),
      text: plant.lightExplanation,
    },
    watering: {
      frequency: getWateringFrequency(plant.water),
      text: plant.waterExplanation,
    },
    humidity: {
      level: getHumidityRequirements(plant.humidity),
      text: plant.humidityExplanation,
    },
    fertilization: {
      frequency: getFertilizationFrequency(plant.fertilizer),
      text: plant.fertilizerExplanation,
    },
    tips: plant.tips,
    recommendedSpaces: getRecommendedSpaces(plant.spaces),
  };
}

function getCareDifficulty(difficulty) {
  if (difficulty === "easy") return CareDifficulty.Easy;
  if (difficulty === "intermediate") return CareDifficulty.Intermediate;
  if (difficulty === "advanced") return CareDifficulty.Advanced;
}

const LightExposure = {
  Low: "Low",
  Moderate: "Moderate",
  Bright: "Bright",
};
function getLightExposures(lightExposure) {
  let exposures = [];

  if (lightExposure.includes("low")) {
    exposures.push(LightExposure.Low);
  }
  if (lightExposure.includes("moderate")) {
    exposures.push(LightExposure.Moderate);
  }
  if (lightExposure.includes("bright")) {
    exposures.push(LightExposure.Bright);
  }

  return exposures;
}
function getPreferredLightExposure() {
  return LightExposure.Bright;
}

const WateringFrequency = {
  Occasionally: "Little",
  Often: "Often",
  Frequently: "Frequent",
};
// TODO migrate chooseyourplant to use new values of watering frequency
function getWateringFrequency(wateringFrequency) {
  if (wateringFrequency === "little") return WateringFrequency.Occasionally;
  if (wateringFrequency === "often") return WateringFrequency.Often;
  if (wateringFrequency === "frequent") return WateringFrequency.Frequently;
}

const Humidity = {
  Average: "Average",
  High: "High",
};
// TODO migrate chooseyourplant to use new values of humidity
function getHumidityRequirements(humidity) {
  if (humidity === "high") return Humidity.High;
  return Humidity.Average;
}

const FertilizationFrequency = {
  Annually: "Annually",
  OncePerMonth: "OncePerMonth",
  TwicePerMonth: "TwicePerMonth",
};
// TODO fix breaking change of new values from the API
function getFertilizationFrequency(fertilizationFrequency) {
  return FertilizationFrequency.OncePerMonth;
}

function getPlantGrowth(plant) {
  return {
    speed: getGrowthSpeed(plant.growth),
    type: getPlantGrowthType(plant),
  };
}

const GrowthSpeed = {
  Slow: "Slow",
  Moderate: "Moderate",
  Fast: "Fast",
};
// TODO fix breaking change on chooseyourplant.com
function getGrowthSpeed(growthSpeed) {
  if (growthSpeed === "slow") return GrowthSpeed.Slow;
  if (growthSpeed === "moderate") return GrowthSpeed.Moderate;
  if (growthSpeed === "fast") return GrowthSpeed.Fast;
}

const GrowthType = {
  Upwards: "Upwards",
  Trailing: "Trailing",
  Cascade: "Cascade",
};
function getPlantGrowthType(plant) {
  if (plant.isHanging) return GrowthType.Cascade;
  if (plant.isClimber) return GrowthType.Trailing;
  return GrowthType.Upwards;
}

const PlantFeatures = {
  HasFlower: "HasFlower",
  IsToxic: "IsToxic",
  IsAirPurifier: "IsAirPurifier",
};
function getPlantFeatures(plant) {
  let features = [];

  plant.hasFlower && features.push(PlantFeatures.HasFlower);
  plant.isToxic && features.push(PlantFeatures.IsToxic);
  plant.isAirPurifier && features.push(PlantFeatures.IsAirPurifier);

  return features;
}

const Space = {
  Bathroom: "Bathroom",
  LivingRoom: "LivingRoom",
  Bedroom: "Bedroom",
  Office: "Office",
};
function getRecommendedSpaces(spaces) {
  let recommendedSpaces = [];
  if (spaces.includes("bathroom")) {
    recommendedSpaces.push(Space.Bathroom);
  }
  if (spaces.includes("bedroom")) {
    recommendedSpaces.push(Space.Bedroom);
  }
  if (spaces.includes("living room")) {
    recommendedSpaces.push(Space.LivingRoom);
  }
  if (spaces.includes("office")) {
    recommendedSpaces.push(Space.Office);
  }

  return recommendedSpaces;
}

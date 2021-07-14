import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Plant {
    id: ID
    latinName: String
    mostCommonName: String
    names: [String!]!
    slug: String
    description: [String]
    bio: Bio
    physicalCharacteristics: {
      estimatedMaturePlantHeight: Int
      foliage: {
        size: FoliageSize!
        features: [FoliageFeature!]
        hasPattern: boolean!
      }
    },
    images: [PlantImage!]!
    videos: [PlantVideo!]!
    popularity: PlantPopularity
    scarcity: Scarcity!
    linksToBuy: [LinkToBuyPlant]
    cares: PlantCares
    growth: Growth
    features: [PlanFeature!]
  }

  Enum PlanFeature {
    hasFlower
    IsToxic
    IsAirPurifier
  }


  Enum PlantPopularity {
    Classic
  }


  type Growth {
    speed: GrowthSpeed
    type: GrowthType
  }

  // TODO do market research or ask people from the community
  Enum GrowthType {
    Upwards
    Trailing
    Cascade
  }

  Enum GrowthSpeed {
    Slow
    Medium
    Fast
  }

  type PlantCares {
    difficulty: CareDifficulty
    light: {
      expose: LightExposure
      text: [String!]
    }
    watering: {
      frequency: WateringFrequency
      text: [String!]
    }
    humidity: {
      level: Humidity
      text: [String!]
    }
    fertilization: {
      frequency: FertilizationFrequency
      text: [String!]
    }
    tips: [String!]
    recommendedSpaces: [Space!]
  }

  Enum Space {
    Bathroom
    LivingRoom
    Bedroom
    Office
  }

  Enum FertilizationFrequency {
    Annually
    OncePerMonth
    TwicePerMonth
  }

  Enum Humidity {
    Average
    High
  }

  Enum WateringFrequency {
    Little
    Often
    Frequent
  }

  Enum LightExposure {
    Low
    Bright
    Direct
  }

  Enum CareDifficulty {
    Easy
    Difficult
  }

  type LinkToBuyPlant {
    isAffiliate: Boolean!
    shop: Shop!
    url: String!
    prices: [ProductPrice!]!
  }

  type ProductPrice {
    amount: Float
    currency: Currency
  }

  type Currency {
    name: String!
    iso: String!
    symbol: String!
  }

  type Shop {
    name: String!
  }

  type PlantVideo {
    owner: VideoOwner,
    url: String
  }

  type VideoOwner {
    name: String
    url: String
  }

  type PlantImage {
    owner: InstagramHandle
    src: String
  }

  type InstagramHandle {
    value: String
  }

  enum FoliageFeature {
    Variegated
    Albino
  }

  type Bio {
    family: String
    subfamily: String
    variety: String!
    origins: [String!]
  }

  Enum FoliageSize {
    Mini
    Small
    Medium
    Big
    Giant
  }

  type Query {
    getPlants: [Plant]
  }

`;

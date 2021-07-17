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
    physicalCharacteristics: PhysicalCharacteristics
    images: [PlantImage!]!
    videos: [PlantVideo!]!
    popularity: PlantPopularity
    linksToBuy: [LinkToBuyPlant]
    cares: PlantCares
    growth: Growth
    features: [PlanFeature!]
  }

  type PhysicalCharacteristics {
    estimatedMaturePlantHeight: Int
    foliage: Foliage
  }

  type Foliage {
    size: FoliageSize!
    features: [FoliageFeature!]
    hasPattern: Boolean!
  }

  enum PlanFeature {
    hasFlower
    IsToxic
    IsAirPurifier
  }

  enum PlantPopularity {
    Classic
    Trendy
    Rare
  }

  type Growth {
    speed: GrowthSpeed
    type: GrowthType
  }

  # TODO do market research or ask people from the community
  enum GrowthType {
    Upwards
    Trailing
    Cascade
  }

  enum GrowthSpeed {
    Slow
    Medium
    Fast
  }

  type PlantCares {
    difficulty: CareDifficulty
    light: LightCare
    watering: WateringCare
    humidity: HumidityCare
    fertilization: FertilizationCare
    tips: [String!]
    recommendedSpaces: [Space!]
  }

  type LightCare {
    expose: LightExposure
    text: [String!]
  }

  type WateringCare {
    frequency: WateringFrequency
    text: [String!]
  }

  type HumidityCare {
    level: Humidity
    text: [String!]
  }

  type FertilizationCare {
    frequency: FertilizationFrequency
    text: [String!]
  }

  enum Space {
    Bathroom
    LivingRoom
    Bedroom
    Office
  }

  enum FertilizationFrequency {
    Annually
    OncePerMonth
    TwicePerMonth
  }

  enum Humidity {
    Average
    High
  }

  enum WateringFrequency {
    Little
    Often
    Frequent
  }

  enum LightExposure {
    Low
    Bright
    Direct
  }

  enum CareDifficulty {
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
    owner: VideoOwner
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

  enum FoliageSize {
    Mini
    Small
    Medium
    Big
    Giant
  }

  type Query {
    getManyPlants: [Plant]
    getPlant(slug: String!): Plant
  }
`;

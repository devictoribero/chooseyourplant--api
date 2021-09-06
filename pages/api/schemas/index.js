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
    videos: [PlantVideo!]
    popularity: PlantPopularity
    linksToBuy: [LinkToBuyPlant]
    cares: PlantCares
    growth: Growth
    features: [PlantFeature!]
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

  enum PlantFeature {
    HasFlower
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
    Moderate
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
    preferredExposure: LightExposure
    exposures: [LightExposure]
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
    Bedroom
    Office
    LivingRoom
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
    Moderate
    Bright
  }

  enum CareDifficulty {
    Easy
    Intermediate
    Advanced
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

  type PlantVideo {
    owner: VideoOwner
    url: String
  }

  type VideoOwner {
    displayName: String
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
    variety: String
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
    getManyShops(hasEcommerce: Boolean, startsWith: String): [Shop]
  }

  type Company {
    name: String!
    description: String
    shops: [Shop!]!
  }

  type SocialMedia {
    type: SocialMediaPlatforms!
    url: String!
  }

  enum SocialMediaPlatforms {
    Facebook
    Instagram
  }

  type Shop {
    name: String!
    description: String
    location: Location
    website: String
    hasEcommerce: Boolean
    contact: Contact
    socials: [SocialMedia!]
    catalogue: [Product!]
  }

  type Location {
    country: String
    coordinates: Coordinates
    address: String
  }

  type Coordinates {
    latitude: String
    longitude: String
  }

  type Contact {
    email: String
    phone: PhoneNumber
  }

  type PhoneNumber {
    prefix: String
    number: String
  }

  type Product {
    name: String!
    description: String
    price: Price
  }

  type Price {
    amount: Float
    currency: Currency
  }
`;

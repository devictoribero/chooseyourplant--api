const { countries } = require("./countries");

const shops = [
  {
    name: "Flowerdale Nurseries",
    description:
      "Helpful staff, affordable prices and great selection found at Flowerdale Nursery in Santa Ana since 72’",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.7754216,
        lng: -117.8363172,
      },
      address: null,
    },
    website: "https://www.flowerdalenursery.com",
    contact: {
      email: null,
      phone: {
        number: "7146339200",
      },
    },
    social: {
      instagram: "flowerdalenursery",
    },
  },
  {
    name: "Yamaguchi Bonsai Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0421469,
        lng: -118.4449391,
      },
      address: null,
    },
    website: "https://yamaguchinursery.com",
    contact: {
      email: null,
      phone: {
        number: "3104735444",
      },
    },
    social: {
      instagram: "yamaguchibonsainursery",
    },
  },
  {
    name: "Hashimoto Nursery",
    description:
      "Our customers have come to expect nothing less than the best quality in plants and services.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0413546,
        lng: -118.4445525,
      },
      address: null,
    },
    website: "https://www.hashimotonursery.com",
    contact: {
      email: "shop@hashimotonursery.com",
      phone: {
        number: "3104736232",
      },
    },
    social: {
      instagram: "hashimoto_nursery",
    },
  },
  {
    name: "Gray's Garden Centers",
    description:
      " We specialize in locally grown plants and we pride ourselves on our knowledgeable staff who pride themselves on their ability to help customers with all aspects of creating and maintaining their outdoor living space.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.0536393,
        lng: -123.103819,
      },
      address: null,
    },
    website: "https://graysgardens.com",
    contact: {
      email: "ggadmin@graysgardens.com",
      phone: {
        number: "5413451569",
      },
    },
    social: {
      instagram: "graysgardencenter",
    },
  },
  {
    name: "Johnson Brothers Garden Market",
    description:
      "We are a family-owned and operated garden center that has been growing with the Eugene-Springfield area for almost 30 years.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "instagram", "email"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.1458628,
        lng: -123.0908877,
      },
      address: null,
    },
    website: "https://jbgardenmarket.com",
    contact: {
      email: "info@jbgardenmarket.com",
      phone: {
        number: "5414841649",
      },
    },
    social: {
      instagram: "johnsonbrosgarden",
    },
  },
  {
    name: "Green Acres Nursery & Supply",
    description:
      "Green Acres Nursery & Supply is a Sacramento-local, family-owned business with focus on gardening and outdoors plants. We stand for better plants, better service and better prices!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8006634,
        lng: -121.2020684,
      },
      address: null,
    },
    website: "https://idiggreenacres.com",
    contact: {
      email: "greenacres@idiggreenacres.com",
      phone: {
        number: "9168241310",
      },
    },
    social: {
      instagram: "idiggreenacres",
    },
  },
  {
    name: "Green Acres Nursery & Supply",
    description:
      "Green Acres Nursery & Supply is a Sacramento-local, family-owned business with focus on gardening and outdoors plants. We stand for better plants, better service and better prices!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.422693,
        lng: -121.392799,
      },
      address: null,
    },
    website: "https://idiggreenacres.com",
    contact: {
      email: "greenacres@idiggreenacres.com",
      phone: {
        number: "9167145600",
      },
    },
    social: {
      instagram: "idiggreenacres",
    },
  },
  {
    name: "Green Acres Nursery & Supply",
    description:
      "Green Acres Nursery & Supply is a Sacramento-local, family-owned business with focus on gardening and outdoors plants. We stand for better plants, better service and better prices!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.646068,
        lng: -121.107804,
      },
      address: null,
    },
    website: "https://idiggreenacres.com",
    contact: {
      email: "greenacres@idiggreenacres.com",
      phone: {
        number: "9167145600",
      },
    },
    social: {
      instagram: "idiggreenacres",
    },
  },
  {
    name: "Green Acres Nursery & Supply",
    description:
      "Green Acres Nursery & Supply is a Sacramento-local, family-owned business with focus on gardening and outdoors plants. We stand for better plants, better service and better prices!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.763595,
        lng: -121.26776,
      },
      address: null,
    },
    website: "https://idiggreenacres.com",
    contact: {
      email: "greenacres@idiggreenacres.com",
      phone: {
        number: "9167145600",
      },
    },
    social: {
      instagram: "idiggreenacres",
    },
  },
  {
    name: "Piep Houseplants",
    description: "We sell houseplants and help you learn to care for them!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.9816552,
        lng: -117.3729404,
      },
      address: "3770 Orange St, Riverside, CA 92501, United States",
    },
    website: "https://www.piep.co",
    contact: {
      email: "unicorn@piep.co",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "piep.co",
    },
  },
  {
    name: "Crimson Horticultural Rarities",
    description:
      "Unique plants, handmade goods & botanicals + custom floral design 💐",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8359658,
        lng: -122.2618031,
      },
      address: null,
    },
    website: "https://www.crimsonhort.com",
    contact: {
      email: "info@crimsonhort.com",
      phone: {
        number: "5109923359",
      },
    },
    social: {
      instagram: "crimsonhort",
    },
  },
  {
    name: "Venice Plants",
    description: "Family owned plant shop serving the west side for 30+ years",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0004387,
        lng: -118.4643068,
      },
      address: null,
    },
    website: null,
    contact: {
      email: "veniceplants@gmail.com",
      phone: {
        number: "3103927923",
      },
    },
    social: {
      instagram: "venice_plants",
    },
  },
  {
    name: "Big Red Sun",
    description:
      "Big Red Sun is a full-service landscape and garden design studio, lifestyle boutique, and event space",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.9988087,
        lng: -118.4721501,
      },
      address: "560 Rose Ave, Venice, CA 90291, United States",
    },
    website: "http://www.bigredsun.com",
    contact: {
      email: "info@bigredsun.com",
      phone: {
        number: "3104330019",
      },
    },
    social: {
      instagram: "bigredsun",
    },
  },
  {
    name: "Merrihew's Sunset Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0110586,
        lng: -118.4683525,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "3104521051",
      },
    },
    social: {
      instagram: "merrihewsnursery",
    },
  },
  {
    name: "Annie's Annuals & Perennials",
    description:
      "Nursery specializing in hard-to-find plants & flowers, including native wildflowers & heirlooms.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.9582945,
        lng: -122.360943,
      },
      address: null,
    },
    website: "https://www.anniesannuals.com",
    contact: {
      email: "contact@anniesannuals.com",
      phone: {
        number: "5102153301",
      },
    },
    social: {
      instagram: "anniesannuals",
    },
  },
  {
    name: "Barrels & Branches",
    description: "Plant Nursery 🌵 Garden Design/Install🌵",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0384198,
        lng: -117.2602861,
      },
      address: null,
    },
    website: "http://www.barrelsandbranches.com",
    contact: {
      email: null,
      phone: {
        number: "7607532852",
      },
    },
    social: {
      instagram: "barrelsnbranches",
    },
  },
  {
    name: "Botanica Home and Garden",
    description:
      "Botanica Home and Garden is the result of husband and wife team Ellis White and Caitlin Brooks, whose various skills and experiences helped them to shape a store, garden center, workshop and event space.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7459672,
        lng: -117.2489972,
      },
      address: null,
    },
    website: "http://www.botanicahomeandgarden.com",
    contact: {
      email: "contact@botanicahomeandgarden.com",
      phone: {
        number: "6193268173",
      },
    },
    social: {
      instagram: "botanica_home",
    },
  },
  {
    name: "Cactus Jungle Nursery and Garden",
    description:
      "Cactus Jungle Nursery and Garden is a retail nursery and garden center that offers many different types of cactus and succulents, low-water grasses, summer-drought bamboos, California natives and more at our local Bay Area stores.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["you have instagram but not linked in your page"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.9736008,
        lng: -122.561479,
      },
      address: null,
    },
    website: "https://cactusjungle.com",
    contact: {
      email: "contact@cactusjungle.com",
      phone: {
        number: "4158709930",
      },
    },
    social: {
      instagram: "cactusjungle",
    },
  },
  {
    name: "California Carnivores",
    description:
      "For over 30 years we have grown and sold the widest variety of carnivorous plants in the US! Operated by Peter D'Amato, author of the award-winning book The Revised Savage Garden: Cultivating Carnivorous Plants, and Damon Collingsworth, California Carnivores has been promoting conservation through cultivation.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["website", "phone"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.3749257,
        lng: -122.7899258,
      },
      address: null,
    },
    website: "https://www.californiacarnivores.com",
    contact: {
      email: "info@californiacarnivores.com",
      phone: {
        number: "7078240433",
      },
    },
    social: {
      instagram: "california_carnivores",
    },
  },
  {
    name: "City Farmers Nursery",
    description:
      "Mainstay for plants, bonsai trees & gardening tools, plus beekeeping & canning supplies.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7376785,
        lng: -117.0926638,
      },
      address: "3110 Euclid Ave, San Diego, CA 92105, United States",
    },
    website: "https://www.cityfarmersnursery.com",
    contact: {
      email: null,
      phone: {
        number: "6192846358",
      },
    },
    social: {
      instagram: "cityfarmersnsy",
    },
  },
  {
    name: "Colibri",
    description: "Flower studio and plant shop. 'We deal in beauty'",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5553838,
        lng: -122.6506864,
      },
      address: null,
    },
    website: "https://colibripdx.com",
    contact: {
      email: "flowers@colibripdx.com",
      phone: {
        number: "5032888369",
      },
    },
    social: {
      instagram: "colibripdx",
    },
  },
  {
    name: "Craftmossphere",
    description:
      "Craftmossphere is a plant styling company. We design and install plant decor in homes, buisnesses and events.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [
        "The social icons you have in your website doesn't go to your social, it go to wix.",
        "add phone to google. You show  it in your website",
      ],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.729072,
        lng: -117.170914,
      },
      address: "2360 India St, San Diego, CA 92101, United States",
    },
    website: "https://www.craftmossphere.com",
    contact: {
      email: null,
      phone: {
        number: "6199251060",
      },
    },
    social: {
      instagram: "craftmossphere",
    },
  },
  {
    name: "Cuffel Farms",
    description:
      "Licensed air plant nursery by appt and online Interior plantscaping, plant rentals, plant parties",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8169028,
        lng: -117.1724528,
      },
      address: "6459 Mt Aguilar Dr, San Diego, CA 92111, United States",
    },
    website: "https://cuffelfarms.com",
    contact: {
      email: "cuffelfarms@gmail.com",
      phone: {
        number: "7608026670",
      },
    },
    social: {
      instagram: "cuffelfarms",
    },
  },
  {
    name: "Dana Point Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4660875,
        lng: -117.7051272,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "9494965137",
      },
    },
    social: {
      instagram: "thedanapointnursery",
    },
  },
  {
    name: "Ecovibe Home",
    description: "Lifestyle brand with 2 shops",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5589232,
        lng: -122.645474,
      },
      address: null,
    },
    website: "https://ecovibestyle.com",
    contact: {
      email: "support@ecovibestyle.com",
      phone: {
        number: "9712669538",
      },
    },
    social: {
      instagram: "ecovibestyle",
    },
  },
  {
    name: "Eden University Heights",
    description:
      "Indoor plants, pots, succulents, unique gift items & more.🌿 ",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.761598,
        lng: -117.1464727,
      },
      address: "4636 Park Blvd, San Diego, CA 92116, United States",
    },
    website: "http://edengardenhome.com",
    contact: {
      email: null,
      phone: {
        number: "6194315095",
      },
    },
    social: {
      instagram: "eden.sd",
    },
  },
  {
    name: "Flowerland Nursery",
    description:
      "The people of Flowerland all come from life experiences which ultimately drew us to plants.  We all care deeply about our customers! We get excited about plant and pest identification.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["update your email on facebook"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8904811,
        lng: -122.2915227,
      },
      address: null,
    },
    website: "https://flowerlandshop.com",
    contact: {
      email: "info@flowerlandshop.com",
      phone: {
        number: "5105263550",
      },
    },
    social: {
      instagram: "flowerlandshop",
    },
  },
  {
    name: "Green Gardens Nursery",
    description:
      "We are an organic, creative and friendly nursery located in pacific beach, San Diego! Family owned since 1978.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8039871,
        lng: -117.2541013,
      },
      address: null,
    },
    website: "https://greengardenssd.com",
    contact: {
      email: "contact@greengardenssd.com",
      phone: {
        number: "8584837846",
      },
    },
    social: {
      instagram: "greengardenssd",
    },
  },
  {
    name: "Green Thumb Nursery - Ventura",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.256779,
        lng: -119.211347,
      },
      address: "1899 S Victoria Ave, Ventura, CA 93003, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "8056428517",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Green Thumb Nursery - Canoga Park",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.20076,
        lng: -118.603448,
      },
      address: "21812 Sherman Way, Canoga Park, CA 91303, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "8183406400",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Green Thumb Nursery - Santa Clarita",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.37201,
        lng: -118.514998,
      },
      address: "23734 Newhall Ave, Santa Clarita, CA 91321, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "6612591071",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Casey's Corner Nursery",
    description:
      "Garden center specializing in flowers, plants & trees that are native to Florida.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["the facebook account from the website doesn't work"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.470063,
        lng: -80.509437,
      },
      address: "31877 SW 197th Ave, Homestead, FL 33030, United States",
    },
    website: "https://www.fann.org/",
    contact: {
      email: null,
      phone: {
        number: "3052487284",
      },
    },
    social: {
      instagram: "fannisonline",
    },
  },
  {
    name: "United Nursery",
    description: "Growers of Exquisite Tropical Plants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["Add your instagram account in your website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.483542,
        lng: -80.542522,
      },
      address: "30401 SW 217th Ave, Homestead, FL 33030, United States",
    },
    website: "http://www.unitednursery.com",
    contact: {
      email: "sales@unitednursery.com",
      phone: {
        number: "7862430905",
      },
    },
    social: {
      instagram: "unitednursery",
    },
  },
  {
    name: "Jungle Nursery",
    description:
      "Since 1981 we are wholesale growers of foliage plants, spring blooming, palms, cycads and Japanese Blueberry tree's and columns",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.496309,
        lng: -80.453103,
      },
      address: "29100 SW 162nd Ave, Homestead, FL 33033, United States",
    },
    website: "https://www.junglenursery.com",
    contact: {
      email: "sales@junglenursery.com",
      phone: {
        number: "3052465324",
      },
    },
    social: {
      instagram: "thejunglenurseryinc",
    },
  },
  {
    name: "R Plants Inc. Nursery",
    description:
      "Since 1981 we are wholesale growers of foliage plants, spring blooming, palms, cycads and Japanese Blueberry tree's and columns",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["the link to your instagram is wrong, double https"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.521732,
        lng: -80.458357,
      },
      address: "16455 SW 264th St, Homestead, FL 33031, United States",
    },
    website: "https://rplantsinc.com",
    contact: {
      email: "michele@rplantsinc.com",
      phone: {
        number: "3052579883",
      },
    },
    social: {
      instagram: "r.plantsnursery",
    },
  },
  {
    name: "Georgie's Paradise",
    description:
      "Wholesale grower of all types of plants 🐵🌸🌱🌷🌴🌹🌿🌻🌳🌺🍃",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "no website on google, I added for you",
        "website is down",
        "no email",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.579237,
        lng: -80.48042,
      },
      address: "20300 SW 177th Ave, Miami, FL 33187, United States",
    },
    website: "https://georgiesparadise.com",
    contact: {
      email: null,
      phone: {
        number: "3052359311",
      },
    },
    social: {
      instagram: "georgiesparadise",
    },
  },
  {
    name: "Isaac Farms",
    description:
      "Garden center for hundreds of varieties of rare & exotic plants, specializing in succulents & cacti.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.490261,
        lng: -80.479564,
      },
      address: "18800 SW 177th Ave, Miami, FL 33187, United States",
    },
    website: "https://isaacfarms.com",
    contact: {
      email: "aibusiness@hotmail.com",
      phone: {
        number: "7869420551",
      },
    },
    social: {
      instagram: "isaacfarms",
    },
  },
  {
    name: "Plants To Go",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.655112,
        lng: -80.383673,
      },
      address: "12200 SW 117th Ave, Miami, FL 33186, United States",
    },
    website: "https://plants-to-go.com",
    contact: {
      email: "plantstogo1@yahoo.com",
      phone: {
        number: "3059720405",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Galloway Farm Nursery Inc.",
    description:
      "Large nursery selling a wide array of plants, water garden supplies & garden decor for 65+ years.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.697301,
        lng: -80.334401,
      },
      address: "7790 SW 87th Ave, Miami, FL 33173, United States",
    },
    website: "https://www.gallowayfarminc.com",
    contact: {
      email: "galloway_inc@bellsouth.net",
      phone: {
        number: "3052747472",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plasencia Nursery",
    description:
      "Plant enthusiasts, welcome home! 😃 Our unique Garden Center has been family owned & operated since 1978! We can help turn your home into paradise! 🔆🌴",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.701415,
        lng: -80.382041,
      },
      address: "11801 SW 72nd St, Miami, FL 33183, United States",
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "3052719885",
      },
    },
    social: {
      instagram: "plasencianursery",
    },
  },
  {
    name: "Casaplanta Garden Center",
    description:
      "Nursery and Garden Center serving the South Florida community since 2009. We love people. We love plants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "I see 2 websites, and they are not linked to each other.",
        "The website that appear in Google is not the online shop",
        "the online shop has no items and the all products page has random names.",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.702584,
        lng: -80.398451,
      },
      address: "6825 SW 127th Ave, Miami, FL 33183, United States",
    },
    website: "http://www.casaplantamiami.com",
    contact: {
      email: "daniel@casaplantamiami.com",
      phone: {
        number: "3053921791",
      },
    },
    social: {
      instagram: "casaplantamiami",
    },
  },
  {
    name: "Lighthouse Garden Center",
    description:
      "Life is good, gardening makes it better!🌱🌺 Contact us for pricing and availability 🌿. Open every day 💚",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["the link to your Instagram is wrong, it goes to wix"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.715025,
        lng: -80.389609,
      },
      address: "12000 SW 56th St, Miami, FL 33175, United States",
    },
    website: "https://lighthousegardencenter.com",
    contact: {
      email: "lighthousegarden56@gmail.com",
      phone: {
        number: "3052717190",
      },
    },
    social: {
      instagram: "lighthousegarden",
    },
  },
  {
    name: "Florida Landscape Nursery",
    description:
      "Sprawling garden center on lush grounds offering a variety of shrubs, plants, trees & supplies.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.715551,
        lng: -80.39756,
      },
      address: "12595 SW 56th St, Miami, FL 33175, United States",
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "3057884000",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Emerald Forest",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["do you have instagram?"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.531507,
        lng: -80.497093,
      },
      address: "25201 SW 189th Ave, Homestead, FL 33031, United States",
    },
    website: "https://www.emeraldforesttropicals.com",
    contact: {
      email: "sales@emeraldforesttropicals.com",
      phone: {
        number: "3052421133",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Delfosse Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["do you have instagram?"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.529019,
        lng: -80.470983,
      },
      address: "17275 SW 256th St, Homestead, FL 33031, United States",
    },
    website: "https://www.delfossenursery.com",
    contact: {
      email: null,
      phone: {
        number: "3052462950",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green Thumb Nursery - Lake Forest",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.617122,
        lng: -117.7082758,
      },
      address: "23782 Bridger Rd, Lake Forest, CA 92630, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "9498373040",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Green Thumb Nursery - San Marcos",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.133578,
        lng: -117.190066,
      },
      address: "1019 W San Marcos Blvd, San Marcos, CA 92078, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "7607443822",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Marbotts",
    description:
      "Family-owned retailer offering a large selection of perennials, annuals & herbs, plus indoor plants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: ["email"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5766131,
        lng: -122.6465712,
      },
      address: null,
    },
    website: "https://marbotts.com",
    contact: {
      email: null,
      phone: {
        number: "5032852106",
      },
    },
    social: {
      instagram: "marbotts_nursery",
    },
  },
  {
    name: "North Park Nursery",
    description: "Locally Owned & Operated Nursery & Garden Center🌿🌵🌸",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7482051,
        lng: -117.1393091,
      },
      address: "2335 University Ave, San Diego, CA 92104, United States",
    },
    website: "http://northparknursery.com",
    contact: {
      email: null,
      phone: {
        number: "6197951855",
      },
    },
    social: {
      instagram: "northparknursery",
    },
  },
  {
    name: "Plant Depot",
    description:
      "We are a family owned & operated retail garden center in San Juan Capistrano, CA.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4922712,
        lng: -117.6602587,
      },
      address: null,
    },
    website: "http://www.plantdepot.com",
    contact: {
      email: "plantdepothelp@gmail.com",
      phone: {
        number: "9492402107",
      },
    },
    social: {
      instagram: "plantdepotsjc",
    },
  },
  {
    name: "Poots Cactus Nursery",
    description:
      "House Of Cactus is one of the biggest retail cactus nurseries in California. Specializing in drought tolerant plants 🌵!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["link your instagram to your website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7984717,
        lng: -121.0982362,
      },
      address: null,
    },
    website: "http://www.pootscactusnursery.com",
    contact: {
      email: "pootscactus@gmail.com",
      phone: {
        number: "2095997241",
      },
    },
    social: {
      instagram: "poots_cactus_nursery",
    },
  },
  {
    name: "Roger's Gardens",
    description:
      "Bringing Beauty into your Home and Garden. We are a destination home, garden and landscape design center offering creative solutions and unique products for both outdoor and indoor living.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.6132481,
        lng: -117.8671252,
      },
      address:
        "2301 San Joaquin Hills Rd, Corona Del Mar, CA 92625, United States",
    },
    website: "https://www.rogersgardens.com",
    contact: {
      email: "marketing@rogersgardens.com",
      phone: {
        number: "9496405800",
      },
    },
    social: {
      instagram: "rogersgardens",
    },
  },
  {
    name: "Smith & Gardener",
    description: "Handcrafted - Local - Collective",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["website", "email", "phone"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5820616,
        lng: -122.6866876,
      },
      address: null,
    },
    website: "https://smithandgardener.com",
    contact: {
      email: "info@smithandgardener.com",
      phone: {
        number: "5038948667",
      },
    },
    social: {
      instagram: "smithandgardener",
    },
  },
  {
    name: "Terra Sol Garden Center",
    description:
      "We have been in business since 2001 providing a high variety of plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.4396601,
        lng: -119.8096805,
      },
      address: null,
    },
    website: "https://terrasolgardencenter.com",
    contact: {
      email: "support@terrasolgardencenter.com",
      phone: {
        number: "8059647811",
      },
    },
    social: {
      instagram: "terra_sol_garden_center",
    },
  },
  {
    name: "Underhill Plants",
    description:
      "Underhill Plants is a small retail plant shop in downtown Olympia, Washington.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.0449874,
        lng: -122.8990678,
      },
      address: null,
    },
    website: "https://underhillplants.com",
    contact: {
      email: "underhillplants@gmail.com",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "underhillplants",
    },
  },
  {
    name: "Wild Island Collective",
    description: "🌿Plants + Plant Stuff + Plant-Lover Things",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7635416,
        lng: -117.1171032,
      },
      address: null,
    },
    website: "https://www.wildisland-collective.com",
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "wildisland.collective",
    },
  },
  {
    name: "Gray's Garden Centers",
    description:
      " We specialize in locally grown plants and we pride ourselves on our knowledgeable staff who pride themselves on their ability to help customers with all aspects of creating and maintaining their outdoor living space.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.0453282,
        lng: -122.9569411,
      },
      address: null,
    },
    website: "https://graysgardens.com",
    contact: {
      email: "ggadmin@graysgardens.com",
      phone: {
        number: "5413575431",
      },
    },
    social: {
      instagram: "graysgardencenter",
    },
  },
  {
    name: "Down to Earth Home and Garden",
    description: "Practical Goods for Natural Living. Home, Garden & Gift",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.0539158,
        lng: -123.0948839,
      },
      address: null,
    },
    website: "https://downtoeartheugene.com",
    contact: {
      email: null,
      phone: {
        number: "5413426820",
      },
    },
    social: {
      instagram: "downtoeartheugene",
    },
  },
  {
    name: "Leafy",
    description:
      "Modern plant shop featuring unique houseplants and planters 🌵🌿🍀",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.3231754,
        lng: -121.9470811,
      },
      address: null,
    },
    website: "https://www.leafypaloalto.com",
    contact: {
      email: "info@leafypaloalto.com",
      phone: {
        number: "4086380630",
      },
    },
    social: {
      instagram: "theleafyplant",
    },
  },
  {
    name: "Leafy",
    description:
      "Modern plant shop featuring unique houseplants and planters 🌵🌿🍀",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.447285,
        lng: -122.158043,
      },
      address: null,
    },
    website: "https://www.leafypaloalto.com",
    contact: {
      email: "info@leafypaloalto.com",
      phone: {
        number: "6506186678",
      },
    },
    social: {
      instagram: "theleafyplant",
    },
  },
  {
    name: "SummerWinds Nursery",
    description:
      "Sprawling outpost of a local garden-center chain known for an ample supply of plants & garden goods.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.2974447,
        lng: -122.0333453,
      },
      address: null,
    },
    website: "https://summerwindsnursery.com",
    contact: {
      email: "shelly@summerwinds.net",
      phone: {
        number: "4089968355",
      },
    },
    social: {
      instagram: "summerwindsmtview",
    },
  },
  {
    name: "SummerWinds Nursery",
    description:
      "Sprawling outpost of a local garden-center chain known for an ample supply of plants & garden goods.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.2788406,
        lng: -121.9489415,
      },
      address: null,
    },
    website: "https://summerwindsnursery.com",
    contact: {
      email: "shelly@summerwinds.net",
      phone: {
        number: "4088660171",
      },
    },
    social: {
      instagram: "summerwindsmtview",
    },
  },
  {
    name: "SummerWinds Nursery",
    description:
      "Sprawling outpost of a local garden-center chain known for an ample supply of plants & garden goods.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.417475,
        lng: -122.103561,
      },
      address: null,
    },
    website: "https://summerwindsnursery.com",
    contact: {
      email: "shelly@summerwinds.net",
      phone: {
        number: "4088660171",
      },
    },
    social: {
      instagram: "summerwindsmtview",
    },
  },
  {
    name: "Ladera Garden & Gifts",
    description:
      "Ladera Garden and Gifts is a garden and home decor destination. One special couple has spent over 35 years working hard to create their big dreams. Beautiful plants, creative bouquets and gifts for every occasion!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.512191,
        lng: -122.292962,
      },
      address: null,
    },
    website: "https://www.leafypaloalto.com",
    contact: {
      email: null,
      phone: {
        number: "6502327154",
      },
    },
    social: {
      instagram: "laderagardenandgifts",
    },
  },
  {
    name: "Ladera Garden & Gifts",
    description:
      "Ladera Garden and Gifts is a garden and home decor destination. One special couple has spent over 35 years working hard to create their big dreams. Beautiful plants, creative bouquets and gifts for every occasion!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.401027,
        lng: -122.193372,
      },
      address: null,
    },
    website: "https://www.leafypaloalto.com",
    contact: {
      email: null,
      phone: {
        number: "6502327154",
      },
    },
    social: {
      instagram: "laderagardenandgifts",
    },
  },
  {
    name: "Evergreen Farm",
    description:
      "It has been a challenging and exciting journey for our family to grow this succulents business. We hope that growing succulents bring you joy and relaxing time after a long working day. We sincerely thank every customer that buy a plant from us.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.275321,
        lng: -121.746759,
      },
      address: null,
    },
    website: "https://evgfarm.com",
    contact: {
      email: null,
      phone: {
        number: "4088767802",
      },
    },
    social: {
      instagram: "evgfarm",
    },
  },
  {
    name: "Chinelo Design",
    description:
      "🎍A Plant + Pot Store for plant enthusiasts. 🌱 Unique, rare plants. Artistic potting experience.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.379832,
        lng: -122.116923,
      },
      address: null,
    },
    website: "https://www.chinelodesign.com",
    contact: {
      email: "raymundo@chinelodesign.com",
      phone: {
        number: "6505756362",
      },
    },
    social: {
      instagram: "evgfarm",
    },
  },
  {
    name: "A Modern Plantsman",
    description:
      "A plant shop 🌱 full of tropical plants and good vibes 🤙. In rural Eastern Washington.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "phone in web", "hours"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 46.8799885,
        lng: -117.3641454,
      },
      address: null,
    },
    website: "https://amodernplantsman.com",
    contact: {
      email: null,
      phone: {
        number: "2087171106",
      },
    },
    social: {
      instagram: "amodernplantsman",
    },
  },
  {
    name: "Talise Garden",
    description: "Share the love of plants!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5260921,
        lng: -122.6819987,
      },
      address: null,
    },
    website: "https://talisegarden.com",
    contact: {
      email: "info@talisegarden.com",
      phone: {
        number: "5036080328",
      },
    },
    social: {
      instagram: "talisegarden",
    },
  },
  {
    name: "Local Branch",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["phone", "description", "reviews"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5173338,
        lng: -122.6598836,
      },
      address: null,
    },
    website: "https://yourlocalbranch.com",
    contact: {
      email: "yourlocalbranch@gmail.com",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "localbranch",
    },
  },
  {
    name: "Appetite Shop",
    description:
      "Boutique offering house-designed fabrics turned into bags, pillows & curtains, plus offbeat decor.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5226683,
        lng: -122.6437857,
      },
      address: null,
    },
    website: "https://appetiteshop.com",
    contact: {
      email: "info@appetiteshop.com",
      phone: {
        number: "5032331223",
      },
    },
    social: {
      instagram: "appetiteshop",
    },
  },
  {
    name: "Appetite Shop",
    description:
      "Boutique offering house-designed fabrics turned into bags, pillows & curtains, plus offbeat decor.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.515881,
        lng: -122.665017,
      },
      address: null,
    },
    website: "https://appetiteshop.com",
    contact: {
      email: null,
      phone: {
        number: "5032331223",
      },
    },
    social: {
      instagram: "appetiteshop",
    },
  },
  {
    name: "Portland Nursery",
    description:
      "This sizable retailer of trees, annuals, seeds, tools, decor & gifts carries many native plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5043212,
        lng: -122.5706218,
      },
      address: null,
    },
    website: "https://portlandnursery.com",
    contact: {
      email: "info@portlandnursery.com",
      phone: {
        number: "5037889000",
      },
    },
    social: {
      instagram: "portlandnursery",
    },
  },
  {
    name: "Portland Nursery",
    description:
      "Large resource supplying garden accessories & design services plus native plants, veggies & flowers.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5187671,
        lng: -122.6110523,
      },
      address: null,
    },
    website: "https://portlandnursery.com",
    contact: {
      email: "info@portlandnursery.com",
      phone: {
        number: "5032315050",
      },
    },
    social: {
      instagram: "portlandnursery",
    },
  },
  {
    name: "Solabee Flowers & Botanicals",
    description:
      "With 10 years of experience in Portland, Oregon, Solabee is an award winning best Portland florist several times over.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "2 differetn emails? its strange"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5353428,
        lng: -122.7012357,
      },
      address: null,
    },
    website: "https://solabeeflowers.com",
    contact: {
      email: "solabeeflowersnw@gmail.com",
      phone: {
        number: "5032789077",
      },
    },
    social: {
      instagram: "solabeeflowers",
    },
  },
  {
    name: "Solabee Flowers & Botanicals",
    description:
      "With 10 years of experience in Portland, Oregon, Solabee is an award winning best Portland florist several times over.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "2 differetn emails? its strange"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.562728,
        lng: -122.675014,
      },
      address: null,
    },
    website: "https://solabeeflowers.com",
    contact: {
      email: "hello@solabeeflowers.com",
      phone: {
        number: "5033072758",
      },
    },
    social: {
      instagram: "solabeeflowers",
    },
  },
  {
    name: "Solabee Flowers & Botanicals",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5627925,
        lng: -122.6751129,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Thicket",
    description:
      "Garden boutique with botanicals, an eclectic array of vintage & new decor items & design classes.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5586442,
        lng: -122.6422255,
      },
      address: null,
    },
    website: "https://thicketpdx.com",
    contact: {
      email: "info@thicketpdx.com",
      phone: {
        number: "5039263817",
      },
    },
    social: {
      instagram: "thicketpdx",
    },
  },
  {
    name: "Potted Elephant",
    description:
      "We grow our own product by propagating from a collection of rare and unusual cacti, succulent, and tropical houseplants. We also teach classes and workshops to spread the love of caring for plants in the Pacific Northwest.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "phone", "mixed websites and stock"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5621254,
        lng: -122.8679822,
      },
      address: null,
    },
    website: "https://pottedelephant.com",
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "pottedelephant",
    },
  },
  {
    name: "hammer + vine",
    description: "Plant Shop 🌱 Portland OR",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5232352,
        lng: -122.6962752,
      },
      address: null,
    },
    website: "https://hammerandvine.com",
    contact: {
      email: "hammerandvine@gmail.com",
      phone: {
        number: "5032249678",
      },
    },
    social: {
      instagram: "hammerandvine",
    },
  },
  {
    name: "Glasswing Greenhouse",
    description: "Seattle Design Shop",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "email"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6165927,
        lng: -122.3276775,
      },
      address: null,
    },
    website: "https://glasswingshop.com",
    contact: {
      email: "hello@glasswingshop.com",
      phone: {
        number: "2068298955",
      },
    },
    social: {
      instagram: "glasswingshop",
    },
  },
  {
    name: "Swansons Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.700006,
        lng: -122.3781549,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Central Wholesale Nursery",
    description:
      "We are an independent, family owned, self-service wholesale and self-service retail ornamental nursery. Every day of the week our gates close about 15 minutes prior to closing so we can shut down on time.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.307679,
        lng: -121.919883,
      },
      address: null,
    },
    website: "https://www.centralwholesalenursery.com",
    contact: {
      email: "centralwholesale@sbcglobal.net",
      phone: {
        number: "4082801131",
      },
    },
    social: {
      instagram: "centralwholesalenursery",
    },
  },
  {
    name: "Fractal Flora",
    description:
      "We are on a mission to reconnect to a lost art. One where people and plants coexist and benefit richly from one another. In our efforts to rekindle this bond, we have created a place of exploration for people to come and nurture their curiosity for plant life.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.336403,
        lng: -121.89373,
      },
      address: null,
    },
    website: "https://www.fractalflora.com/",
    contact: {
      email: "hello@fractalflora.com",
      phone: {
        number: "6503149853",
      },
    },
    social: {
      instagram: "fractalflora",
    },
  },
  {
    name: "The Plant Store",
    description: "Neighborhood Plant Shop and Educational Resource.👨🏻‍🏫",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.5184947,
        lng: -122.3559291,
      },
      address: null,
    },
    website: "http://theplantstoreonline.com",
    contact: {
      email: "seattleplantstore@gmail.com",
      phone: {
        number: "5092409272",
      },
    },
    social: {
      instagram: "seattleplantstore",
    },
  },
  {
    name: "Folia Collective",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.1397799,
        lng: -118.2142385,
      },
      address: null,
    },
    website: "https://foliacollective.com",
    contact: {
      email: "hello@foliacollective.com",
      phone: {
        number: "6267874957",
      },
    },
    social: {
      instagram: "foliacollective",
    },
  },
  {
    name: "Sunset Boulevard Nursery",
    description: "Growing greater Seattle gardeners for over 90 years!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.096029,
        lng: -118.284929,
      },
      address: null,
    },
    website: "https://swansonsnursery.com",
    contact: {
      email: "garden@swansonsnursery.com",
      phone: {
        number: "2067822543",
      },
    },
    social: {
      instagram: "swansonsnurseryseattle",
    },
  },
  {
    name: "California Cactus Center",
    description:
      "California Cactus Center is Southen California's premiere specialty nursery featuring Cactus and Succulent from the around the world",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.142552,
        lng: -118.072929,
      },
      address: null,
    },
    website: "http://www.cactuscenter.com",
    contact: {
      email: null,
      phone: {
        number: "6267952788",
      },
    },
    social: {
      instagram: "california_cactus_center",
    },
  },
  {
    name: "Francis Cactus Succulents",
    description:
      "We have a variety of Mini Cactus that help you decorate your event with the great price of 2 for 1 dollar. We make arrangements of the selected cactus in your favorite pot at no cost, just bring it to us and we do it for you.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["Add linkn to your instagram in your page"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.185332,
        lng: -118.3609932,
      },
      address: null,
    },
    website: "http://www.franciscactus.com",
    contact: {
      email: "info@franciscactus.com",
      phone: {
        number: "8184236369",
      },
    },
    social: {
      instagram: "cactfrancis",
    },
  },
  {
    name: "Pistils Nursery",
    description:
      "This small nursery carries exotic & everyday plants, terrariums, urban farm supplies & gifts.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5340587,
        lng: -122.6953998,
      },
      address: null,
    },
    website: "https://pistilsnursery.com",
    contact: {
      email: "hello@pistilsnursery.com",
      phone: {
        number: "5032884889",
      },
    },
    social: {
      instagram: "pistilsnursery",
    },
  },
  {
    name: "Pistils Nursery",
    description:
      "This small nursery carries exotic & everyday plants, terrariums, urban farm supplies & gifts.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5504197,
        lng: -122.6757158,
      },
      address: null,
    },
    website: "https://pistilsnursery.com",
    contact: {
      email: "hello@pistilsnursery.com",
      phone: {
        number: "5032884889",
      },
    },
    social: {
      instagram: "pistilsnursery",
    },
  },
  {
    name: "Gurton's Plant Shop",
    description: "7 generations of green thumbs",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.477823,
        lng: -122.6960031,
      },
      address: null,
    },
    website: "https://gurtons.com",
    contact: {
      email: "hellogurtons@gmail.com",
      phone: {
        number: "5033877750",
      },
    },
    social: {
      instagram: "gurtonsplantshop",
    },
  },
  {
    name: "Arium Botanicals",
    description:
      "A curated shop for plants, botanical creations, and handmade goods.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.5376353,
        lng: -122.6611805,
      },
      address: null,
    },
    website: "https://ariumbotanicals.com",
    contact: {
      email: null,
      phone: {
        number: "5037194763",
      },
    },
    social: {
      instagram: "ariumbotanicals",
    },
  },
  {
    name: "Windmill Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.2036388,
        lng: -122.2152747,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Plant Shop",
    description:
      "Watch our show, Plant Chat, on BKAT. Online Orders, Local Pick Up, & Local Deliveries.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "email"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.5671106,
        lng: -122.6307677,
      },
      address: null,
    },
    website: "https://urbanplantshop.com",
    contact: {
      email: "urbanplantshop@icloud.com",
      phone: {
        number: "2062346767",
      },
    },
    social: {
      instagram: "urbanplantshop",
    },
  },
  {
    name: "Urban Sprouts",
    description:
      "Boutique plant shop specializing in helping new plant parents succeed 🌱.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.4797895,
        lng: -122.2069431,
      },
      address: null,
    },
    website: "https://urbansproutsstore.com",
    contact: {
      email: "danny@urbansproutsstore.com",
      phone: {
        number: "2067890710",
      },
    },
    social: {
      instagram: "urbansproutsstore",
    },
  },
  {
    name: "Jungle Fever Exotics",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.297927,
        lng: -122.5161269,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bark & Garden Center Inc",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description", "no instagram"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.047774,
        lng: -122.9527687,
      },
      address: null,
    },
    website: "https://barkandgarden.com",
    contact: {
      email: "barkandgarden@juno.com",
      phone: {
        number: "3603522955",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cultivate Propagate",
    description:
      "Cultivate Propagate is an independent, specialty plant shop based in the Lower Queen Anne neighborhood in Seattle.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6235135,
        lng: -122.3611553,
      },
      address: null,
    },
    website: "https://cultivatepropagate.com",
    contact: {
      email: null,
      phone: {
        number: "2064925969",
      },
    },
    social: {
      instagram: "cultivatepropagate",
    },
  },
  {
    name: "Indoor Sun Shoppe",
    description:
      "Seattle's finest source of houseplants and indoor gardening supplies. Since 1970.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.650838,
        lng: -122.354882,
      },
      address: null,
    },
    website: "https://indoorsun.com",
    contact: {
      email: "info@indoorsun.com",
      phone: {
        number: "2066343727",
      },
    },
    social: {
      instagram: "indoorsun",
    },
  },
  {
    name: "Plant Shop Seattle",
    description: "indoor plants / pots / veggies",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6172733,
        lng: -122.3033714,
      },
      address: null,
    },
    website: "https://plantshopseattle.com",
    contact: {
      email: "info@plantshopseattle.com",
      phone: {
        number: " 2064664880",
      },
    },
    social: {
      instagram: "plantshopseattle",
    },
  },
  {
    name: "Plant Shop Seattle",
    description: "indoor plants / pots / veggies",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email", "description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.61505,
        lng: -122.326095,
      },
      address: null,
    },
    website: "https://plantshopseattle.com",
    contact: {
      email: "info@plantshopseattle.com",
      phone: {
        number: " 2064664961",
      },
    },
    social: {
      instagram: "plantshopseattle",
    },
  },
  {
    name: "Theodore Payne Foundation",
    description:
      "Theodore Payne Foundation inspires and educates Southern Californians about the beauty and ecological benefits of California native plant landscapes. We have a big variety of platns.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.2373025,
        lng: -118.3596747,
      },
      address: "10459 Tuxford St, Sun Valley, CA 91352, United States",
    },
    website: "http://theodorepayne.org",
    contact: {
      email: "info@theodorepayne.org",
      phone: {
        number: "8187681802",
      },
    },
    social: {
      instagram: "theodorepayne",
    },
  },
  {
    name: "Plant Shop Seattle",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6150675,
        lng: -122.326091,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Fernseed",
    description:
      "Nationwide shipping, local delivery, and now local pickup. 📦🌱",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "email"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.2722328,
        lng: -122.4887328,
      },
      address: null,
    },
    website: "https://thefernseed.com",
    contact: {
      email: null,
      phone: {
        number: "2537594208",
      },
    },
    social: {
      instagram: "thefernseed",
    },
  },
  {
    name: "Watson's Greenhouse and Nursery",
    description: "For Garden, For Home, For Living.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.1982862,
        lng: -122.3481163,
      },
      address: null,
    },
    website: "https://shop.watsonsgreenhouse.com",
    contact: {
      email: "info@watsonsgreenhouse.com",
      phone: {
        number: "2538457359",
      },
    },
    social: {
      instagram: "watsonsgreenhouse",
    },
  },
  {
    name: "GardenSphere",
    description:
      "Cheery store offering organic lawn care products, gardening supplies, seasonal plants & trees.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.27799,
        lng: -122.489064,
      },
      address: "3310 N Proctor St, Tacoma, WA 98407, United States",
    },
    website: "http://www.gardensphere.biz/index.html",
    contact: {
      email: "customerservice@gardensphere.biz",
      phone: {
        number: "2537617936",
      },
    },
    social: {
      instagram: "gardensphere",
    },
  },
  {
    name: "Jade & Co Succulent Boutique LLC",
    description: "Plants to go!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.2359833,
        lng: -122.5268508,
      },
      address: null,
    },
    website: "https://jadeandcoplants.com",
    contact: {
      email: "jadeandco1@gmail.com",
      phone: {
        number: "2533203588",
      },
    },
    social: {
      instagram: "jadeandco1",
    },
  },
  {
    name: "Orchid Fever",
    description:
      "Best quality orchids🌸🌼 you will find in the Los Angeles area!! 🌸",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0173008,
        lng: -118.3994206,
      },
      address: null,
    },
    website: "http://www.orchidfeverla.net",
    contact: {
      email: "orchidfever@sbcglobal.net",
      phone: {
        number: "3105596599",
      },
    },
    social: {
      instagram: "orchidfeverlosangeles",
    },
  },
  {
    name: "Rainforest Flora",
    description:
      "We offer by far the greatest variety, the largest number, and the highest quality of Tillandsia in North America and the world.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.8571229,
        lng: -118.3542022,
      },
      address: null,
    },
    website: "https://www.rainforestflora.com",
    contact: {
      email: null,
      phone: {
        number: "3103708044",
      },
    },
    social: {
      instagram: "rainforestflora",
    },
  },
  {
    name: "Norman's Orchid Nursery",
    description:
      "We offer orchid arrangements and orchids as a hobby. We can ship you orchids in the states.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.053453,
        lng: -117.6970933,
      },
      address: null,
    },
    website: "http://www.orchids.com",
    contact: {
      email: null,
      phone: {
        number: "9096279515",
      },
    },
    social: {
      instagram: "normans_orchids",
    },
  },
  {
    name: "Dream Garden",
    description:
      "We have the best selection of Succulent, Castus, Exotic plants, Fruit trees, Topiary,Pots, ... and also free parking inside the nursery.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0982251,
        lng: -118.3377365,
      },
      address: null,
    },
    website: null,
    contact: {
      email: "thedream.garden@yahoo.com",
      phone: {
        number: "3234650161",
      },
    },
    social: {
      instagram: "dreamgardenla",
    },
  },
  {
    name: "Xotx-Tropico",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.0873873,
        lng: -118.3611529,
      },
      address: null,
    },
    website: "https://www.xotxtropico.com",
    contact: {
      email: null,
      phone: {
        number: "3236549999",
      },
    },
    social: {
      instagram: "xotxtropico",
    },
  },
  {
    name: "Andy's Orchids inc",
    description:
      "We are a family owned nursery featuring species orchids based out of Encinitas, CA. We have more than 7,000 species and 750,000+ plants!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0622699,
        lng: -117.2922957,
      },
      address: null,
    },
    website: "https://andysorchids.com",
    contact: {
      email: null,
      phone: {
        number: "7604364239",
      },
    },
    social: {
      instagram: "AndysOrchids",
    },
  },
  {
    name: "Flori-Culture: Orchid & Specialty Growing Supply & Nursery (formerly Calwest Tropical Supply)",
    description:
      "Flori-Culture Supplies & Rare Plant Nursery is a family owned business trading in the world's finest specialty gardening supplies and rare plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["email in website"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6376768,
        lng: -121.3246059,
      },
      address: null,
    },
    website: "https://flori-culture.com",
    contact: {
      email: "sales@flori-culture.com",
      phone: {
        number: "8003019009",
      },
    },
    social: {
      instagram: "flori.culture.orchid.supplies",
    },
  },
  {
    name: "Dig Gardens",
    description: "Garden & Lifestyle Shop ✨🌵🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.9797194,
        lng: -122.0204536,
      },
      address: null,
    },
    website: "https://www.diggardens.com",
    contact: {
      email: "shop@diggardens.com",
      phone: {
        number: "8314663444",
      },
    },
    social: {
      instagram: "diggardens",
    },
  },
  {
    name: "Leaf and Vine Urban Plant Shop",
    description: "🌿Indoor Greenery, uncommon tropicals, & all things plants🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.9797194,
        lng: -122.0204536,
      },
      address: null,
    },
    website: "https://www.leafandvineplants.com",
    contact: {
      email: "leafandvineplants@gmail.com",
      phone: {
        number: "8316008758",
      },
    },
    social: {
      instagram: "leafandvineplants",
    },
  },
  {
    name: "Far West Nursery",
    description:
      "Far West Nursery and Garden Center, a family-owned business since 1973, offers an abundance of ornamental landscape plants to satisfy your garden needs. We have colorful flowering plants, fruit trees, and privacy screening plants. Create your own tropical paradise or native habitat.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.982844,
        lng: -121.974508,
      },
      address: null,
    },
    website: "https://www.farwestnursery.com",
    contact: {
      email: null,
      phone: {
        number: "8314768866",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Capitola Nursery",
    description:
      "FBig selection of succulents , grasses, begonias,banana plants, some orchids, etc. Contact us by phone.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.978644,
        lng: -121.971069,
      },
      address: null,
    },
    website: null,
    contact: {
      email: "capitolanursery@yahoo.com",
      phone: {
        number: "8315353029",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dig Gardens Aptos",
    description:
      "1/4 acre of Annuals,Perennials,Succulents, Houseplants,Veggie starts & Fruit trees! 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.979528,
        lng: -121.907666,
      },
      address: null,
    },
    website: "https://www.diggardens.com",
    contact: {
      email: "shop@diggardens.com",
      phone: {
        number: "8316887011",
      },
    },
    social: {
      instagram: "diggardensaptos",
    },
  },
  {
    name: "Alladin Nursery & Gift Shop",
    description:
      "We carry a large selection of plants from everyday fruits, flowers, trees, and shrubs to very rare and unusual plant varieties from all around the world.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.963374,
        lng: -121.810034,
      },
      address: null,
    },
    website: "https://www.alladinnursery.com",
    contact: {
      email: null,
      phone: {
        number: "8317247517",
      },
    },
    social: {
      instagram: "alladinnursery",
    },
  },
  {
    name: "Half Moon Bay Nursery",
    description:
      'We are one of the largest nurseries located in the Bay Area with over 3 acres of retail space. We have a large and extensive collection of plants ranging from 4" annual color, bedding plants, perennials, to a variety of specialty plants such as citrus, bamboo, and succulents.',
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["add instagram to the website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.489711,
        lng: -122.390244,
      },
      address: null,
    },
    website: "http://www.halfmoonbaynurseries.com",
    contact: {
      email: null,
      phone: {
        number: "6507265392",
      },
    },
    social: {
      instagram: "hmbnursery",
    },
  },
  {
    name: "The Sill",
    description:
      "The best looking plants on the internet. Shipped direct to you. Good mood guaranteed. 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7970186,
        lng: -122.4350235,
      },
      address: null,
    },
    website: "https://www.thesill.com",
    contact: {
      email: "help@thesill.com",
      phone: {
        number: "4158729445",
      },
    },
    social: {
      instagram: "thesill",
    },
  },
  {
    name: "Hortica",
    description:
      "This small shop with a nursery in the rear carries indoor & outdoor plants plus garden supplies.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7598532,
        lng: -122.4350821,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "4158634697",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sloat Garden Center",
    description:
      "Sloat Garden Center is a premier garden center in Northern California. We offer a wide selection of fresh plants, high-quality garden tools, soils, pottery and garden expertise by our knowledgeable nursery professionals.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.78261,
        lng: -122.4616016,
      },
      address: null,
    },
    website: "https://www.sloatgardens.com",
    contact: {
      email: "info@slotgardens.com",
      phone: {
        number: "4157521614",
      },
    },
    social: {
      instagram: "sloatgardens",
    },
  },
  {
    name: "East Bay Nursery",
    description:
      "Family owned since 1942, East Bay Nursery has come to be the Bay Area’s go-to garden center for your gardening needs. Our specialty is plant selection, which includes California natives, drought tolerant plants, succulents, and much more.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8640847,
        lng: -122.2909105,
      },
      address: null,
    },
    website: "https://www.eastbaynursery.com",
    contact: {
      email: "customerservice@eastbaynursery.com",
      phone: {
        number: "5108456490",
      },
    },
    social: {
      instagram: "eastbaynursery",
    },
  },
  {
    name: "Encinal Nursery",
    description:
      "Encinal Nursery is a family owned and operated business that has been in Alameda since 1946. The staff at Encinal Nursery  can help you with your gardening and landscaping needs. We carry annuals, perennials, shrubs, trees, roses, sod, firewood, indoor plants, herbs, vegetables, fruit trees, soil, etc.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7661049,
        lng: -122.2514688,
      },
      address: null,
    },
    website: "https://encinalnursery.com",
    contact: {
      email: "orders@encinalnursery.com",
      phone: {
        number: "5105228616",
      },
    },
    social: {
      instagram: "encinalnursery",
    },
  },
  {
    name: "Dry Garden Nursery",
    description:
      "Nursery specializing in plants that require little water, ranging from succulents to cacti & more.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8513868,
        lng: -122.2657662,
      },
      address: null,
    },
    website: "https://www.thedrygardennursery.com",
    contact: {
      email: null,
      phone: {
        number: "5105473564",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cactus Jungle Nursery and Garden",
    description:
      "Cactus Jungle Nursery and Garden is a retail nursery and garden center that offers many different types of cactus and succulents, low-water grasses, summer-drought bamboos, California natives and more at our local Bay Area stores.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["you have instagram but not linked in your page"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8745219,
        lng: -122.3017132,
      },
      address: null,
    },
    website: "https://cactusjungle.com",
    contact: {
      email: "contact@cactusjungle.com",
      phone: {
        number: "5105588650",
      },
    },
    social: {
      instagram: "cactusjungle",
    },
  },
  {
    name: "The Tiny Jungle",
    description:
      "We love to grow interesting and unusual species of hybrid Orchids, Gesneriads, and Begonias. Some are seed grown from our own flasks, while others are grown by us and offered for sale in various stages from seedling to mature specimen plants. We are excited to be able to offer a number of awarded plants as divisions!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["add your website to google"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.6902869,
        lng: -122.4640282,
      },
      address: null,
    },
    website: "https://www.thetinyjungle.com/#",
    contact: {
      email: "thetinyjungle@gmail.com",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "letstalkplants",
    },
  },
  {
    name: "Flamingo Road Nursery",
    description:
      "Flamingo Road Nursery has been providing the people of South Florida with the highest quality horticultural products and services since 1996.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.08897,
        lng: -80.315587,
      },
      address: "1655 S Flamingo Rd, Davie, FL 33325, United States",
    },
    website: "http://www.flamingoroadnursery.com",
    contact: {
      email: "info@flamingoroadnursery.com",
      phone: {
        number: "9544767878",
      },
    },
    social: {
      instagram: "flamingoroadnursery",
    },
  },
  {
    name: "Utsuwa Floral Design",
    description:
      "Utsuwa Floral Design keeps creating unique designs with flowers, plants and natural materials. Also we have a large selection of plants and pots.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["link your instagram account to your website"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7885796,
        lng: -122.4201815,
      },
      address: null,
    },
    website: "https://utsuwa.myshopify.com",
    contact: {
      email: "utsuwafd@icloud.com",
      phone: {
        number: "4154478476",
      },
    },
    social: {
      instagram: "utsuwafloraldesign",
    },
  },
  {
    name: "Flora Grubb Gardens",
    description:
      "Modern, open-air gardening center offers unique plants, decor items, chic pottery & an espresso bar.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7397116,
        lng: -122.3902313,
      },
      address: null,
    },
    website: "https://www.floragrubb.com",
    contact: {
      email: "info@floragrubb.com",
      phone: {
        number: "4156267256",
      },
    },
    social: {
      instagram: "floragrubbgardens",
    },
  },
  {
    name: "Clement Nursery",
    description:
      "San Francisco's oldest nursery, housed in the historic buildings of 1904 dairy farm.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.782123,
        lng: -122.4801343,
      },
      address: null,
    },
    website: "https://www.facebook.com/clementnursery",
    contact: {
      email: "1921clement@gmail.com",
      phone: {
        number: "4157503990",
      },
    },
    social: {
      instagram: "clementnursery",
    },
  },
  {
    name: "La Sumida Nursery",
    description:
      "Since 1958 we have a large selection of landscaping plants, roses, bedding plants, vegetables, color baskets, fruit trees, houseplants and garden supplies",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.4360679,
        lng: -119.8095801,
      },
      address: null,
    },
    website: "http://www.lasumida.com",
    contact: {
      email: "nursery@lasumida.com",
      phone: {
        number: "8059649944",
      },
    },
    social: {
      instagram: "la_sumida_nursery",
    },
  },
  {
    name: "Christianson's Nursery",
    description:
      "Christianson's Nursery is known in Skagit Valley for common and unusual plants, expert advice, and a fabulous rose selection.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 48.4166649,
        lng: -122.4443753,
      },
      address: null,
    },
    website: "https://christiansonsnursery.com",
    contact: {
      email: null,
      phone: {
        number: "3604663821",
      },
    },
    social: {
      instagram: "christiansonsnursery",
    },
  },
  {
    name: "PLANTA",
    description:
      "We carry a wide selection of unique indoor and outdoor plants. We provide a calm space that customers can enjoy; a place where they can find inspiration for their own space. All of our plants and pots are curated.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.1182092,
        lng: -118.1888623,
      },
      address: null,
    },
    website: "https://plantanursery.com",
    contact: {
      email: "info@plantanursery.com",
      phone: {
        number: "3233978688",
      },
    },
    social: {
      instagram: "plantanursery",
    },
  },
  {
    name: "Leaf and Spine LLC",
    description:
      "We specialize in rare exotic plants that are difficult to find elsewhere. We have extensive knowledge of the cultivation and care of a large variety of plants. We also stage our plants in unique handmade pottery.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.1195629,
        lng: -118.1981827,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: "3232575323",
      },
    },
    social: {
      instagram: "leafandspine",
    },
  },
  {
    name: "The Plant Farm",
    description:
      "Garden center & nursery stocking a variety of plants, flowers & veggies, plus classes & workshops.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["instagram"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6531269,
        lng: -117.0372059,
      },
      address: null,
    },
    website: "https://spokaneplantfarm.com",
    contact: {
      email: "plantfarm@creachgreenhouse.com",
      phone: {
        number: "5099269397",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Berkeley Horticultural Nursery",
    description:
      "Family-owned shop known for its curated selection of specialty plants & gardening supplies.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8814109,
        lng: -122.2810331,
      },
      address: null,
    },
    website: "https://berkeleyhort.com",
    contact: {
      email: "mail@berkeleyhort.com",
      phone: {
        number: "5105264704",
      },
    },
    social: {
      instagram: "berkeleyhort",
    },
  },
  {
    name: "Succulent Gardens - Nursery and Demonstration Gardens",
    description: "Colorful succulents popular and rare",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.802293,
        lng: -121.720304,
      },
      address: null,
    },
    website: "https://sgplants.com",
    contact: {
      email: "info@sgplants.com",
      phone: {
        number: "8316320482",
      },
    },
    social: {
      instagram: "succulentgardens",
    },
  },
  {
    name: "Altman Plants",
    description:
      "We're the largest grower & breeder of succulents. Family owned and operated since 1975.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["missing phone in Google"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.746019,
        lng: -121.694147,
      },
      address: null,
    },
    website: "https://altmanplants.com",
    contact: {
      email: "marketing@altmanplants.com",
      phone: {
        number: "8003484881",
      },
    },
    social: {
      instagram: "altmanplants",
    },
  },
  {
    name: "Altman Plants",
    description:
      "We're the largest grower & breeder of succulents. Family owned and operated since 1975.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["missing phone in Google"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.623841,
        lng: -121.557641,
      },
      address: null,
    },
    website: "https://altmanplants.com",
    contact: {
      email: "marketing@altmanplants.com",
      phone: {
        number: "8003484881",
      },
    },
    social: {
      instagram: "altmanplants",
    },
  },
  {
    name: "Bokay Nursery",
    description:
      "A Legacy of Better Products and Better Service. Plants and Trees Find the quality trees and plants you're looking for at Bokay Nursery.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["Add a description to Google maps"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.645989,
        lng: -121.666202,
      },
      address: null,
    },
    website: "https://www.bokaynursery.net",
    contact: {
      email: "bokaynursery2@gmail.com",
      phone: {
        number: "8314551868",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Morris Nursery",
    description:
      "Morris Nursery has been in business since 1977. Our goal is to provide a beautiful and inspiring setting, with the finest quality plants and unique products. 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["add email to the website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.7339363,
        lng: -120.9661295,
      },
      address: null,
    },
    website: "https://www.morrisnursery.com",
    contact: {
      email: null,
      phone: {
        number: "2095275553",
      },
    },
    social: {
      instagram: "morrisnursery",
    },
  },
  {
    name: "Green Acres Nursery & Supply",
    description:
      "Green Acres Nursery & Supply is a Sacramento-local, family-owned business with focus on gardening and outdoors plants. We stand for better plants, better service and better prices!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.5446753,
        lng: -121.3903286,
      },
      address: null,
    },
    website: "https://idiggreenacres.com",
    contact: {
      email: "greenacres@idiggreenacres.com",
      phone: {
        number: "9163811625",
      },
    },
    social: {
      instagram: "idiggreenacres",
    },
  },
  {
    name: "Prickett's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.592453,
        lng: -122.850731,
      },
      address: null,
    },
    website: "http://prickettsnursery.com",
    contact: {
      email: "prickettsnursery@att.net",
      phone: {
        number: "7074338904",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Prickett's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.456778,
        lng: -122.62757,
      },
      address: null,
    },
    website: "http://prickettsnursery.com",
    contact: {
      email: "prickettsnursery@att.net",
      phone: {
        number: "7074338904",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lone Pine Gardens",
    description:
      "A shop with a beautiful garden to buy succulents, catus and bonsais.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.3691746,
        lng: -122.803993,
      },
      address: null,
    },
    website: "http://www.lonepinegardens.com",
    contact: {
      email: null,
      phone: {
        number: "7078235024",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bennett Valley Gardens",
    description:
      "A boutique nursery located in the heart of the Bennett Valley neighborhood in Santa Rosa, CA. Houseplants, perennials, succulents, vegetables and more",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.4267403,
        lng: -122.6673444,
      },
      address: null,
    },
    website: "https://www.bennettvalleygardens.com",
    contact: {
      email: "jeanne@bennettvalleygardens.com",
      phone: {
        number: "7075698624",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wintercreek Nursery",
    description:
      "Ecology based landscape design and construction. Native plant propagation nursery. Focus on resource conservation and reduction in water use.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.1022052,
        lng: -121.2603144,
      },
      address: null,
    },
    website: "https://wintercreeknative.com",
    contact: {
      email: "karen@wintercreekrestoration.com",
      phone: {
        number: "5419480063",
      },
    },
    social: {
      instagram: "wintercreekrest",
    },
  },
  {
    name: "Kreative Gardens",
    description:
      "Where art and nature meet. Kreative Gardens is the home of the Root Orb, Patent #8,607,500. Retail and wholesale available.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.726003,
        lng: -80.312187,
      },
      address: "7247 SW 48th St, Miami, FL 33155, United States",
    },
    website: "http://kreativegardens.com",
    contact: {
      email: "kreativegardens@gmail.com",
      phone: {
        number: "3056662531",
      },
    },
    social: {
      instagram: "kreativegardens",
    },
  },
  {
    name: "Alton Road Nurseries",
    description:
      "Garden boutique selling indoor & outdoor plants, including exotics, plus garden decor & fountains.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.783538,
        lng: -80.14075,
      },
      address: "1239 Alton Rd, Miami Beach, FL 33139, United States",
    },
    website: "http://www.altonroadnurseries.com",
    contact: {
      email: "kreativegardens@gmail.com",
      phone: {
        number: "3055327939",
      },
    },
    social: {
      instagram: "kreativegardens",
    },
  },
  {
    name: "Reclamation",
    description: "Handmade goods, art, and plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["phone", "email"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.551018,
        lng: -122.6669547,
      },
      address: null,
    },
    website: "https://shopreclamation.com",
    contact: {
      email: "shopreclamationpdx@gmail.com",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "reclamationpdx",
    },
  },
  {
    name: "Westbrae Nursery",
    description:
      "Longtime local nursery offering indoor & outdoor plants, edibles & organic soil.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.8813725,
        lng: -122.2907438,
      },
      address: null,
    },
    website: "https://westbrae-nursery.com",
    contact: {
      email: "info@westbrae-nursery.com",
      phone: {
        number: "5105265517",
      },
    },
    social: {
      instagram: "westbraenursery",
    },
  },
  {
    name: "Broadway Terrace Nursery",
    description:
      "This full-service nursery carries a wide selection of plants, plus containers & gardening supplies.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["the instagram account does not exist"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.840546,
        lng: -122.236806,
      },
      address: null,
    },
    website: "http://www.broadwayterracenursery.com",
    contact: {
      email: "btnursery@gmail.com",
      phone: {
        number: "5106583729",
      },
    },
    social: {
      instagram: "broadwaytplants",
    },
  },
  {
    name: "Kent East Hill Nursery",
    description:
      "A family-owned plant nursery on four beautiful acres in Kent, WA. Our products range from trees, perennials and annuals, to houseplants and decor.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.3878151,
        lng: -122.1858781,
      },
      address: null,
    },
    website: "https://kenteasthillnursery.shop",
    contact: {
      email: "info@kenteasthillnursery.com",
      phone: {
        number: "2536315320",
      },
    },
    social: {
      instagram: "kenteasthillnursery",
    },
  },
  {
    name: "Peace Love and Happiness Club",
    description:
      "A boutique in Fremont (Seattle) offering a unique shopping experience. Fashion, rare plants, apothecary, + more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "email"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.6503628,
        lng: -122.3502071,
      },
      address: null,
    },
    website: "https://peaceloveandhappiness.club",
    contact: {
      email: null,
      phone: {
        number: "2065471211",
      },
    },
    social: {
      instagram: "peaceloveandhappinessclub",
    },
  },
  {
    name: "Houseplants Galore",
    description: "An indoor plant shop with a glorious variety.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description", "email"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.9076569,
        lng: -122.234264,
      },
      address: null,
    },
    website: "https://houseplantsgalore.com",
    contact: {
      email: null,
      phone: {
        number: "4254825276",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Kiko + Sven",
    description:
      "We have thoughtfully selected the best items from around the globe to provide an exceptional shopping experience. Plants and pots, Jewelry, clothing, and more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.763191,
        lng: -117.112902,
      },
      address: null,
    },
    website: "https://www.kikoandsven.com",
    contact: {
      email: null,
      phone: {
        number: "6196772192",
      },
    },
    social: {
      instagram: "kikoandsven",
    },
  },
  {
    name: "Hunter's Nursery Inc",
    description:
      "Family owned since 1919, this nursery specializes in fruit trees, plus roses, houseplants & seeds.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.73875,
        lng: -117.014635,
      },
      address: null,
    },
    website: "http://www.huntersnursery.com",
    contact: {
      email: null,
      phone: {
        number: "6196772192",
      },
    },
    social: {
      instagram: "hunters_nursery",
    },
  },
  {
    name: "Artifacts and Artichokes",
    description:
      "Home - Botanicals - Gifts. Rare Plant Vault. Venue space for art and small gatherings.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8071953,
        lng: -117.0761121,
      },
      address: "7549 Mission Gorge Rd, San Diego, CA 92120, United States",
    },
    website: "https://artifactsandartichokes.com",
    contact: {
      email: "info@artifactsandartichokes.com",
      phone: {
        number: "6195017476",
      },
    },
    social: {
      instagram: "shopartifactsandartichokes",
    },
  },
  {
    name: "Jungle Music Palms, Cycads & Tropical Plants",
    description:
      "Jungle Music is a family-run business. We have decades of experience and have been the Palm, Cycad & Tropical Plants source since 1977.🌿🌾🌴🌵🌱🌼🌴",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0565897,
        lng: -117.2928554,
      },
      address: null,
    },
    website: "https://www.junglemusic.net",
    contact: {
      email: "phil@junglemusic.net",
      phone: {
        number: "6192914605",
      },
    },
    social: {
      instagram: "junglemusicpalmsandcycads",
    },
  },
  {
    name: "Bird Rock Tropicals",
    description:
      "Grower & Award winning hybridizer of Tillandisa (airplants). For more than 30 years we have been dedicated to the collecting, growing and hybridization of bromeliads, with an emphasis on the genus tillandsia.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.049446,
        lng: -117.2715212,
      },
      address: "221 Princehouse Ln, Encinitas, CA 92024, United States",
    },
    website: "https://www.birdrocktropicals.com",
    contact: {
      email: "info@birdrocktropicals.com",
      phone: {
        number: "7604363088",
      },
    },
    social: {
      instagram: "birdrocktropicals",
    },
  },
  {
    name: "Babygreens plant shop & cafe",
    description:
      "Indoor plant shop & café ☕. Happy plants shipped direct to your door 🌱",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 48.7491175,
        lng: -122.4807242,
      },
      address: "1201 Cornwall Ave #103, Bellingham, WA 98225, United States",
    },
    website: "https://shop.babygreens.co",
    contact: {
      email: "info@babygreens.co",
      phone: {
        number: "3603550759",
      },
    },
    social: {
      instagram: "babygreens.co",
    },
  },
  {
    name: "Anderson's La Costa Nursery",
    description:
      "We strive to stock exotic and unique selections within plant families without overlooking those tried and tested favorites",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0842396,
        lng: -117.3038239,
      },
      address: null,
    },
    website: "https://www.andersonslacostanursery.com",
    contact: {
      email: null,
      phone: {
        number: "7607533153",
      },
    },
    social: {
      instagram: "andersonslacosta",
    },
  },
  {
    name: "Cordova Gardens",
    description:
      "Cordova Gardens has the finest selection of tropical plants, drought tolerant succulents, fountains, statuary, pottery, benches, and arbors.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0477618,
        lng: -117.271827,
      },
      address: null,
    },
    website: "https://www.cordovagardens.com",
    contact: {
      email: "cordovagardens@sbcglobal.net",
      phone: {
        number: "7609446984",
      },
    },
    social: {
      instagram: "cordovagardens",
    },
  },
  {
    name: "Grow",
    description:
      "We specialize in rare and unusual succulents as well as handmade pottery, Tillandsias (Airplants) and mineral specimens from around the world.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5630214,
        lng: -121.0842863,
      },
      address: "2024 Main St, Cambria, CA 93428, United States",
    },
    website: "http://www.grownursery.com",
    contact: {
      email: "nick@grownursery.com",
      phone: {
        number: "8059241340",
      },
    },
    social: {
      instagram: "grownursery",
    },
  },
  {
    name: "Evergreen Garden Center Inc.",
    description:
      "Full service garden center with the valley’s largest selection of roses 🌹",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.8445159,
        lng: -119.715804,
      },
      address: null,
    },
    website: "https://www.evergreenclovis.com",
    contact: {
      email: "mike@evergreenclovis.com",
      phone: {
        number: "5592993107",
      },
    },
    social: {
      instagram: "evergreengardencenter",
    },
  },
  {
    name: "High-Hand Nursery",
    description:
      "Nursery offering a range of farm-fresh eats in a serene locale and other type of plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8192643,
        lng: -121.1958181,
      },
      address: null,
    },
    website: "https://www.highhandnursery.com",
    contact: {
      email: "thoughts@highhand.com",
      phone: {
        number: "9166522065",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Talini's Nursery",
    description:
      "Talini’s is a family-owned neighborhood nursery in East Sacramento. Serving Sacramento since 1976.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.55856,
        lng: -121.4379589,
      },
      address: null,
    },
    website: "http://talinisnursery.com",
    contact: {
      email: "www.talinisnursery.com",
      phone: {
        number: "9164518150",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fair Oaks Boulevard Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["better website"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.5873572,
        lng: -121.3544812,
      },
      address: null,
    },
    website: "http://www.fairoaksblvdnursery.com",
    contact: {
      email: "askus@fairoaksblvdnursery.com",
      phone: {
        number: "9164831830",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Semillas Plant Studio",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.857707,
        lng: -87.66239,
      },
      address: "1425 W 18th St, Chicago, IL 60608, United States",
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "semillaschicago",
    },
  },
  {
    name: "The Stem",
    description:
      "Ethically-driven online garden centre 🌱 We hand deliver #planthappiness all across London 🚚",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: null,
      address: null,
    },
    website: "https://thestem.co.uk",
    contact: {
      email: "info@thestem.co.uk",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "semillaschicago",
    },
  },
  {
    name: "The Plant Foundry | Nursery & Store",
    description:
      "Local garden center with premium, drought-tolerant plants & organic supplies, plus statuary & books.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.5509221,
        lng: -121.4684681,
      },
      address: null,
    },
    website: "https://www.plantfoundry.com",
    contact: {
      email: "info@plantfoundry.com",
      phone: {
        number: "9169175787",
      },
    },
    social: {
      instagram: "plantfoundry",
    },
  },
  {
    name: "Eisley Nursery Inc",
    description:
      "Since 1932, Eisley Nursery Inc has been growing beautiful and healthy plants for your gardens, yards, and homes. No one beats our variety, our knowledge, and our service. We also have gift wrapping services for your special occasions.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["instagram"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9081012,
        lng: -121.0818612,
      },
      address: null,
    },
    website: "https://www.eisleynursery.com",
    contact: {
      email: "cyndi.eisley@gmail.com",
      phone: {
        number: "5308855163",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bushnell Gardens, Home & Gift",
    description:
      "Plant Nursery • Landscape • Home Decor & Gift. We Grow Our Own Plants 🌱. 2018 Voted Best Home Decor Store",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [
        "the icons of the social media have no links",
        "add email to the web",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.744969,
        lng: -121.2015947,
      },
      address: null,
    },
    website: "https://www.bushnellgardens.com",
    contact: {
      email: "promotions@bushnellgardens.com",
      phone: {
        number: "9167914199",
      },
    },
    social: {
      instagram: "bushnell_gardens",
    },
  },
  {
    name: "Avantgarden",
    description:
      "Succulents, Perennials, Houseplants, Yard Art, Pottery, Gifts, Jewelry & Workshops.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["link the social media in the website, not only mention it"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8997662,
        lng: -121.069686,
      },
      address: null,
    },
    website: "https://www.avantgardenauburn.com",
    contact: {
      email: "sales.avantgarden@gmail.com",
      phone: {
        number: "5308881510",
      },
    },
    social: {
      instagram: "avantgarden_auburn",
    },
  },
  {
    name: "Peacock Horticultural Nursery",
    description:
      "A retail nursery featuring unusual, hard-to-find, and interesting plants. Open by appointment only.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.3595999,
        lng: -122.7720009,
      },
      address: null,
    },
    website: "https://peacockhorticulturalnursery.com",
    contact: {
      email: "peahortnursery@comcast.net",
      phone: {
        number: "7072910547",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cornell Farm",
    description:
      "Garden center featuring indoor & outdoor plants, tools, seeds, pottery, gift items & statuary.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.510721,
        lng: -122.760201,
      },
      address: null,
    },
    website: "https://cornellfarms.com",
    contact: {
      email: "info@cornellfarms.com",
      phone: {
        number: "5032929895",
      },
    },
    social: {
      instagram: "cornellfarm",
    },
  },
  {
    name: "The Plant Ally",
    description:
      "Offering local plant-based goods, indoor plants, seeds and gardening supplies, herbal body care, workshops, & community herbalism.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 47.5954267,
        lng: -120.6592377,
      },
      address: null,
    },
    website: "https://theplantally.com",
    contact: {
      email: "contact@theplantally.com",
      phone: {
        number: "2065360405",
      },
    },
    social: {
      instagram: "theplantally",
    },
  },
  {
    name: "Steve's Leaves, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0311121,
        lng: -97.0237813,
      },
      address: "1062 Kingston Dr, Lewisville, TX 75067",
    },
    website: "https://stevesleaves.com",
    contact: {
      email: null,
      phone: {
        number: "2143680530",
      },
    },
    social: {
      instagram: "stevesleavesinc",
    },
  },
  {
    name: "The Natural Gardener",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.257061,
        lng: -97.8905333,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sunshine Miniature Trees",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8761292,
        lng: -96.761575,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Robinson Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 31.4875382,
        lng: -97.122268,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greenlife Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 31.5375047,
        lng: -97.1800423,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Westview Nursery & Landscape",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 31.5301853,
        lng: -97.1875984,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Waco Flower Tent",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 31.5182918,
        lng: -97.2120856,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Round Rock Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.5167469,
        lng: -97.6918153,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pueblo",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4559629,
        lng: -112.060505,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "East Austin Succulents",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.2610492,
        lng: -97.7042183,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "1101 E Butler Ave",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.190978,
        lng: -111.6368486,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Archie's Gardenland",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7230142,
        lng: -97.4329503,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Accent Plant Interior",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.3930424,
        lng: -98.3884578,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8809724,
        lng: -96.7594738,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.014059,
        lng: -96.79413,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0215912,
        lng: -96.7342717,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.59788,
        lng: -97.1349819,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7568057,
        lng: -97.1033473,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8949533,
        lng: -97.3027405,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dr. Delphinium Designs & Events",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8510047,
        lng: -96.8127662,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dr Delphinium Flower & Orchid House",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.9757973,
        lng: -96.7375221,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Evergreen Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.466169,
        lng: -98.508809,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Grow Plant Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7308148,
        lng: -97.338787,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hill Country Water Gardens and Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.5261745,
        lng: -97.8332317,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Landscape Systems of Texas",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.935578,
        lng: -97.20863,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mike's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.9568495,
        lng: -97.1433471,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nicholson-Hardie Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8514027,
        lng: -96.8144611,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oasis Plant Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7478752,
        lng: -96.8291348,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plants & Planters",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.965106,
        lng: -96.720875,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Puckett's Nursery & Landscape",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.1007558,
        lng: -96.6511639,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Roots Garden Center & Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.5244027,
        lng: -97.2685916,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rainbow Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.5219742,
        lng: -98.6377161,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "redenta's garden shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8141014,
        lng: -96.7617915,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ruibal's Plants of Texas",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.778552,
        lng: -96.7905,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ruibal's Plants of Texas -Whiterock",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8078294,
        lng: -96.7332609,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ruibal's Rosemeade Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.0111009,
        lng: -96.854645,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Shades of Green",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.5071365,
        lng: -98.4726416,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Shades of Green",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.1396702,
        lng: -96.7687286,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Shoal Creek Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.3273013,
        lng: -97.7481309,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Cactus King",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.8743713,
        lng: -95.4096464,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Great Outdoors",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.2345848,
        lng: -97.7575758,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tillage",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.4465355,
        lng: -98.47511,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rainbow Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.5848196,
        lng: -98.4484387,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tillery Street Plant Co.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.2610776,
        lng: -97.7042474,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tom's Thumb Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.284147,
        lng: -94.8137141,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tropic Of Capricorn",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.2565495,
        lng: -97.7030599,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Peckerwood Garden Conservation Foundation",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.0560299,
        lng: -96.0383534,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "River Oaks Flower House",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.730623,
        lng: -95.43212,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Houston Garden Centers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.725001,
        lng: -95.4589869,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nelson Water Gardens & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7947987,
        lng: -95.800985,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Thompson + Hanson Stone House",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7386442,
        lng: -95.4346345,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fairbanks Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.9211393,
        lng: -95.5241646,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Maas Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.5926986,
        lng: -94.9972471,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Caldwell Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.506421,
        lng: -95.819258,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Buchanan's Native Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.790995,
        lng: -95.391405,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Enchanted Gardens",
    description:
      "Tucked between two main roadways of Fort Bend, County, Enchanted Gardens is an unexpected gem. With its rustic Texas flair and old country charm, the Gardens will surprise you with its selection of plants, many of which are grown on site in its greenhouses",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.631945,
        lng: -95.810515,
      },
      address: "6420 FM 359 Richmond, TX 77406",
    },
    website: "https://www.myenchanted.com/",
    contact: {
      email: "gardens@myenchanted.com",
      phone: {
        number: "2813411206",
      },
    },
    social: {
      instagram: "enchantedgardensrichmond",
    },
  },
  {
    name: "Fred Reyes Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.6787552,
        lng: -96.0038747,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Southwood Landscape and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.032719,
        lng: -95.95313,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bustani Plant Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.0722221,
        lng: -97.0419249,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Coulter Gardens & Nursery Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.164024,
        lng: -101.921034,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bella Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.457143,
        lng: -103.197098,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Little Red Riding Hood Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.563679,
        lng: -101.8996028,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bluebonnet House",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.1418321,
        lng: -96.2569826,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Congo Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.6822966,
        lng: -95.1936459,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Natius Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.0332668,
        lng: -95.257548,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pete's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.1324357,
        lng: -101.9001749,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Osuna Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.1517619,
        lng: -106.6200991,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Traci's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.3966365,
        lng: -103.1723047,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "EcoGro, LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.228567,
        lng: -110.980782,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Harlow Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.2431295,
        lng: -110.8720467,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bach's Greenhouse Cactus Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.3611768,
        lng: -111.0442837,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Berridge Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.5083646,
        lng: -111.9788559,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant Stand of Arizona",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.388622,
        lng: -112.022713,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mesquite Valley Growers Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.2361022,
        lng: -110.8219032,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green Things",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.2762461,
        lng: -110.9240016,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green 'n Growing",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.4412358,
        lng: -97.6250545,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cornelius Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7874758,
        lng: -95.729927,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Joshua's Native Plants & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.801646,
        lng: -95.40633,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Zone 9 Tropicals",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7894825,
        lng: -95.3944255,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terrarium",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.0968189,
        lng: -95.6164523,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Flora Culture",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7326487,
        lng: -95.4768446,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Kingwood Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.051183,
        lng: -95.238651,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "JRN Nursery 2 Vườn Cây Ăn Trái Houston",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7152175,
        lng: -95.5845671,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Warren's Southern Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.0691653,
        lng: -95.2303584,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tall Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7834935,
        lng: -95.5172299,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cornelius Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7441653,
        lng: -95.5002316,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Another Place in Time",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.7908252,
        lng: -95.4020742,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "TLC Garden Centers - NW",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.566689,
        lng: -97.659753,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "TLC Garden Centers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.6095895,
        lng: -97.5159446,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Southern Window Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.4774802,
        lng: -97.5145292,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant Wisdom Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5190812,
        lng: -97.5656726,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Greenhouse Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.197817,
        lng: -97.477358,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jade & Clover",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.783923,
        lng: -96.785009,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calvert's Plant Interiors Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5253369,
        lng: -97.5346035,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Precure Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.465292,
        lng: -97.656986,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cottage Cuttings",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.126384,
        lng: -93.7919876,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rehm's Nursery and Garden Center",
    description: "5801 Lomas Blvd NE, Albuquerque, NM 87110.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.0877899,
        lng: -106.5816413,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Marcum's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.295549,
        lng: -97.422212,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sharum's Garden Center LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.289917,
        lng: -94.384791,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Westwood Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.087802,
        lng: -94.130069,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Westwood Gardens Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.079784,
        lng: -94.222524,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Westwood Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.3115951,
        lng: -94.169667,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Westwood Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.2012227,
        lng: -94.137775,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "White River Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.045791,
        lng: -94.0803556,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Chicken Holler Lawn & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.041307,
        lng: -94.2508804,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sanders Nursery & Distribution",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.9326953,
        lng: -95.7472856,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Colebrook Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.1193281,
        lng: -96.057061,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Civano Nursery - Retail Location",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.1542688,
        lng: -110.7719423,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wright in the garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.5857413,
        lng: -112.0140094,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Bosque at Pueblo- Life, Curated",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4560326,
        lng: -112.0605603,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dig It Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4824888,
        lng: -112.0474088,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Whitfill Nurseries Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.5386278,
        lng: -112.0610102,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Blooming Colors Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.9278905,
        lng: -97.1024203,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tropical Greenery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8273795,
        lng: -97.2239111,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rainbow Plant Sales Saginaw",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.863682,
        lng: -97.3674017,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Calloway's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.9403212,
        lng: -97.1468972,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "North Haven Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.900451,
        lng: -96.775312,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wayside Garden Center Rochester NY",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0639391,
        lng: -77.370674,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bristol's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0037997,
        lng: -77.4397188,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gallea's Florist & Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.088023,
        lng: -77.542068,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Williams Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.677458,
        lng: -74.331024,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wentworth Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.2163867,
        lng: -70.8604016,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Sill",
    description:
      "The best looking plants on the internet. Shipped direct to you. Good mood guaranteed. 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.784908,
        lng: -73.977354,
      },
      address: null,
    },
    website: "https://www.thesill.com",
    contact: {
      email: "help@thesill.com",
      phone: {
        number: "6468994015",
      },
    },
    social: {
      instagram: "thesill",
    },
  },
  {
    name: "The Sill",
    description:
      "The best looking plants on the internet. Shipped direct to you. Good mood guaranteed. 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.716195,
        lng: -73.992264,
      },
      address: null,
    },
    website: "https://www.thesill.com",
    contact: {
      email: "help@thesill.com",
      phone: {
        number: "6468994015",
      },
    },
    social: {
      instagram: "thesill",
    },
  },
  {
    name: "The Sill",
    description:
      "The best looking plants on the internet. Shipped direct to you. Good mood guaranteed. 🌿",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.072406,
        lng: -118.366685,
      },
      address: null,
    },
    website: "https://www.thesill.com",
    contact: {
      email: "help@thesill.com",
      phone: {
        number: "3238799720",
      },
    },
    social: {
      instagram: "thesill",
    },
  },
  {
    name: "Briggs Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9916521,
        lng: -71.2894398,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahoney's Garden Centers",
    description: "East Falmouth",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5800904,
        lng: -70.5413959,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Chelsea Garden Center Williamsburg",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7138255,
        lng: -73.9558797,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Seed To Stem",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.2562404,
        lng: -71.7975295,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bayport Flower Houses, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7476259,
        lng: -73.047419,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Da Hing Florist",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.717515,
        lng: -73.992432,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dahing Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7175139,
        lng: -73.9924339,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Broadway Gardens Greenhouses Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.6293373,
        lng: -70.3024478,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sprague's Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.8279126,
        lng: -68.8334796,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sprout Home",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7160023,
        lng: -73.9649632,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Joy's Flower Pot",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7155133,
        lng: -73.9900477,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "risbara's greenhouse inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.7015507,
        lng: -70.3027975,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Osborne's Agway Concord",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.2167918,
        lng: -71.4825461,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Found Things co.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0689042,
        lng: -76.1077837,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "82 Wakefield St",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.3083252,
        lng: -70.9775042,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Leaf",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.6315304,
        lng: -70.2668925,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "GREEN FINGERS MARKET",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7212785,
        lng: -73.9929467,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Farmer's Daughter",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4910233,
        lng: -71.4816768,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "448 Amsterdam Ave",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.784923,
        lng: -73.977382,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bell Nurseries Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3829735,
        lng: -72.88143,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ballek's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4711181,
        lng: -72.44692,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Olde Saratoga Home & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.1029709,
        lng: -73.642109,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dehn's Flowers & Greenhouses, Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0832504,
        lng: -73.7933822,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sunnyside Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0864561,
        lng: -73.8104837,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Banker Orchards",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.7042432,
        lng: -73.5442484,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bonesteel Farm Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.847095,
        lng: -74.381034,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gonyea's Greenhouses Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.8573473,
        lng: -74.2885094,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Adirondack Growers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.6899732,
        lng: -74.7061996,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cropley's Lawn & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7975026,
        lng: -72.4185157,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Moscarillo's Garden Shoppe",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.786648,
        lng: -72.755433,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Flower Power Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8932015,
        lng: -72.608748,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hadley Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.351262,
        lng: -72.5630906,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sixteen Acres",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.1067079,
        lng: -72.502735,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Van Wilgen's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3073644,
        lng: -72.7659822,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sunny View Greenery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.9353999,
        lng: -74.5936076,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Greenery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.8818884,
        lng: -73.785621,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden Sales llc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8040569,
        lng: -72.5184992,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Malone Farm & Home Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.855273,
        lng: -74.2795318,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Woodland Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7890306,
        lng: -72.5324525,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Garden Barn Nursery & Landscape",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8449072,
        lng: -72.4657049,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Old Country Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.788808,
        lng: -75.5322646,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gardener's Supply Company",
    description: "Burlington",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.4921709,
        lng: -73.203708,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gardener's Supply Company",
    description: "Williston",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.4464352,
        lng: -73.1203033,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Brookside Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.0597347,
        lng: -77.0390212,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rooted NYC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7186898,
        lng: -73.9997895,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Crest Hardware & Urban Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7137949,
        lng: -73.9502673,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greenery Unlimited",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7296535,
        lng: -73.9592909,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ginkgo Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8788367,
        lng: -76.9917685,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tula Plants & Design",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7264157,
        lng: -73.9550744,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greenstreet Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.78127,
        lng: -76.627117,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Farmers Market Place",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0738092,
        lng: -76.1675219,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Willey Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3905826,
        lng: -75.6627201,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lasnicki Landscaping & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.33893,
        lng: -76.1465583,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "big reds greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.262915,
        lng: -76.3450891,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Chuck Hafner's Farmers Market and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.122756,
        lng: -76.160768,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Phoenix Flower Farm & Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.2180009,
        lng: -76.3265639,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Homestead Gardens Horticulture Supply",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9479,
        lng: -76.650402,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "B.Willow",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3207049,
        lng: -76.620566,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plantacea",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.2786209,
        lng: -76.6146163,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Valley View Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4897287,
        lng: -76.6464323,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pepper Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.800453,
        lng: -75.324105,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bountiful Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2897703,
        lng: -74.7967998,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Magnolia Garden Village",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.852612,
        lng: -75.024695,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dragonfly Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2141984,
        lng: -74.7074606,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Flagg's Garden Center & Landscaping, LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.999276,
        lng: -74.9402607,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahoney's Garden Center",
    description: "Tewksbury",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.5963142,
        lng: -71.2165605,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahoney's Garden Centers",
    description: "Concord",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.422155,
        lng: -71.371393,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Peckham's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.528005,
        lng: -71.1941454,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ricky's Flower Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.3792817,
        lng: -71.0937558,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahoney's Garden Center",
    description: "Winchester",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.4521496,
        lng: -71.158419,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jordan's Jungle",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8591221,
        lng: -71.3982925,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahoney's Garden Centers",
    description: "Brighton",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.3624067,
        lng: -71.1418926,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Longwood Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.871271,
        lng: -75.6747203,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Morris County Farms Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.862513,
        lng: -74.513099,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greenology Organic Living",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3480555,
        lng: -75.0308445,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Geerlings Garden, Gift, and Patio",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3071888,
        lng: -75.0452801,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Living Earth",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3652,
        lng: -74.961107,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Seasons Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2908127,
        lng: -74.8688102,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "County Line Landscape Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2948404,
        lng: -75.3766558,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bountiful Acres",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3323795,
        lng: -75.0514985,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Primex Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.10468,
        lng: -75.160871,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "ILLExotics",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.928225,
        lng: -75.1656535,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "City Planter",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9642173,
        lng: -75.1444631,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "STUMP : Philadelphia",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.965589,
        lng: -75.1405784,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Jungle",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.930388,
        lng: -75.163065,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hickory Grove Greenhouses Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.663134,
        lng: -75.471091,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Rhoads Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2154053,
        lng: -75.2490464,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Frederick's Flowers & Gifts",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.321077,
        lng: -75.302893,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ott's Exotic Plants",
    description: "Has a known pest problem, inspect plants carefully.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2390543,
        lng: -75.4563078,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Logee's Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8154977,
        lng: -71.8824614,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "14th Street Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7324607,
        lng: -74.0446655,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant Detectives Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.809398,
        lng: -74.712377,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hicks Nurseries, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7628356,
        lng: -73.5969959,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Barlow's",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.132902,
        lng: -74.049123,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "American Plant",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9653731,
        lng: -77.1053341,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "McNaughton's Garden Center and Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8933513,
        lng: -75.0108014,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Metropolitan Plant and Flower Exchange",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.8587003,
        lng: -73.9732774,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Seasons Nursery Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1646194,
        lng: -77.1671645,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Genrich's Florist & Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.2181944,
        lng: -77.5990785,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden Factory Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.1488129,
        lng: -77.708582,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lavocat's Family Greenhouse and Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0323599,
        lng: -78.6798226,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Badding Bros Farm Market and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0632781,
        lng: -78.6976557,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Niagara County Produce",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0838196,
        lng: -78.6955106,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.799362,
        lng: -73.943202,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Plant Shack",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.768118,
        lng: -78.611975,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Life is Succulent",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.9624957,
        lng: -78.8037243,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Daddy's Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.9183666,
        lng: -78.8996168,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Roots Cooperative Garden Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.9116417,
        lng: -78.8859937,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lockwood's Greenhouses & Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.7307229,
        lng: -78.81632,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Angle Acres Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.808366,
        lng: -78.716181,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "A & J Landscape Supply",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9681639,
        lng: -75.0238949,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Achin' Back Garden Center Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.243557,
        lng: -75.560213,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Albrecht Nurseries and Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.331965,
        lng: -75.0504452,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Axten's Nursery & Landscape",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8691,
        lng: -74.893,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Behmerwald Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2544012,
        lng: -75.4433365,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Briar Rose Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.107792,
        lng: -76.0087,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Buckman's Home & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2816453,
        lng: -75.1263487,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Chadds Ford Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8712541,
        lng: -75.5722555,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cinnaminson Nurseries, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9512209,
        lng: -74.857487,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dambly's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7594278,
        lng: -74.9251891,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Distinctive Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9500406,
        lng: -75.6970077,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fairless Hills Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1893209,
        lng: -74.8301373,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Feeney's Wholesale Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.306242,
        lng: -75.0270024,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Field Plant and Supply",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9794136,
        lng: -75.1300397,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gardner's Landscape Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.069397,
        lng: -75.6447796,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greensgrow Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.978254,
        lng: -75.120951,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Groff's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7345628,
        lng: -75.1137835,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Haines Farm & Garden Supply",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9862211,
        lng: -75.0127133,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hillside Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9331081,
        lng: -75.2853236,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hilltop Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8230279,
        lng: -75.0675438,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Holly Days Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2135772,
        lng: -75.1894585,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "New Moon Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.6468884,
        lng: -75.3740976,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lakedale Nurseries Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7383669,
        lng: -74.932885,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Laurel Hill Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.072935,
        lng: -75.2022206,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Leonberg Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9660566,
        lng: -74.9868066,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Linvilla Orchards",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8854306,
        lng: -75.4111734,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Little Brook Orchids",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.037664,
        lng: -76.3248799,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Medford Nursery Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.944813,
        lng: -74.7871937,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Miller Greenhouses of Wallingford",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8774767,
        lng: -75.3752139,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mostardi Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9837104,
        lng: -75.4215918,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mutschler's Florist & Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2884192,
        lng: -75.8191319,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nurseries Moon",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9415,
        lng: -74.853,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "PHS Meadowbrook Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1183215,
        lng: -75.0956212,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Platt's Farm Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8065562,
        lng: -75.2297201,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Redbud Native Plant Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.929352,
        lng: -75.387528,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Roberts Nursery & Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.752457,
        lng: -75.073167,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Taddeo's Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.990297,
        lng: -75.304325,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terrain Cafe",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0458437,
        lng: -75.4222872,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tinari Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1255069,
        lng: -75.0753692,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Triple Oaks Nursery & Herb Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.61432,
        lng: -75.077042,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wedgewood Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9453281,
        lng: -75.502146,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Willow Brook Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0684671,
        lng: -75.9141624,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Waldor Orchids",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3503995,
        lng: -74.5651425,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Black Creek Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1735821,
        lng: -75.9991787,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Big 8 Supermarket",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9392105,
        lng: -75.1702764,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bucks Country Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3591445,
        lng: -75.1399755,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Clearwater Ponds & Aquatics",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1849726,
        lng: -76.0104408,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Germantown Kitchen Garden Farm Stand and Plant Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0348587,
        lng: -75.166909,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Good Host Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0079393,
        lng: -75.1290395,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greensgrow West",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9480069,
        lng: -75.2262874,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "King's Herb Nook",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.077274,
        lng: -75.914203,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plants Etc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9675053,
        lng: -75.175839,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Secret Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0518217,
        lng: -75.2354057,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terrain",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8841041,
        lng: -75.5319299,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Vault + Vine",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0137158,
        lng: -75.1926508,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cultivaire Plant Store",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9741355,
        lng: -75.181647,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fairmount Hardware",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9674079,
        lng: -75.170436,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terrain Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0455981,
        lng: -75.42246,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1188087,
        lng: -76.932191,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Frank's Produce & Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.186852,
        lng: -76.7896656,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Patuxent Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.922881,
        lng: -76.714529,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Homestead Gardens",
    description: "Davidsonville",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9234675,
        lng: -76.6247287,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green Fields Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3610131,
        lng: -76.6464299,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Radebaugh Florist and Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3949286,
        lng: -76.5977002,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Little Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4027639,
        lng: -76.516922,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Chapel Hills Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.403861,
        lng: -76.4494397,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Maryland Flower & Foliage Co",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3690111,
        lng: -76.4163468,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "B.Willow Studio",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.2804643,
        lng: -76.5759709,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Walther Gardens at White Oak",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3415239,
        lng: -76.5629666,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Willow Oak Flower & Herb Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1126734,
        lng: -76.6917435,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Homestead Gardens",
    description: "Severna Park",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.0785065,
        lng: -76.547763,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "A.A. Co. Lawn & Garden Center LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.0854323,
        lng: -76.5843922,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Evergreen Gene's, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1597412,
        lng: -76.627735,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dutch Plant Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4188915,
        lng: -77.438319,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "D.R. Snell Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.343048,
        lng: -77.181625,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "White House Nursery - retail outlet",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.6031318,
        lng: -76.7752203,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Carnivorous Plant Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.610587,
        lng: -77.538635,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Little Leaf",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9142482,
        lng: -77.0322977,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wentworth Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.5012969,
        lng: -76.7758233,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "REWILD",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9167795,
        lng: -77.0238516,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Johnson's Florist and Garden Centers",
    description: "Kensington",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.0254201,
        lng: -77.0714779,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Johnson's Florist and Garden Centers",
    description: "Olney",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1790858,
        lng: -77.1009213,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ken's Gardens: Garden Center & Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0400195,
        lng: -76.2035026,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Atlantic Nursery & Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.6458737,
        lng: -73.5870014,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Benson Lumber & Hardware",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.8606402,
        lng: -71.3551586,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Creekside Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5161671,
        lng: -75.9615443,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Class Glass Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.2558481,
        lng: -72.5173372,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Estabrook's",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.3725059,
        lng: -70.5533458,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sunscape Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.1776539,
        lng: -77.5027911,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden's Dream",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.99692,
        lng: -72.515484,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Graziano Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.0798495,
        lng: -72.5083334,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tioga gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.0914713,
        lng: -76.2108707,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Binghamton Agway",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.117075,
        lng: -75.890407,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nanticoke Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.1273183,
        lng: -76.0661056,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Point 211",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.2777508,
        lng: -72.8230693,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Soulbury Cultural Gifts Store",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5228832,
        lng: -73.2017976,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Amity Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4388521,
        lng: -72.9907486,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "EBM Vintage",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.305792,
        lng: -72.9249271,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terri's Flower Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4898637,
        lng: -73.0557623,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Li ’l Plant Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.671107,
        lng: -72.866892,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Town & Country Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4747816,
        lng: -72.5050813,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Winterberry Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.6449329,
        lng: -72.9032514,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Uncle Bob's Flower & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5451372,
        lng: -72.7106568,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Country Flower Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5244096,
        lng: -72.7282201,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ganim's Garden Center and Florist, LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.161285,
        lng: -73.2400112,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dietrich Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5534116,
        lng: -72.8902675,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Terrain",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.1395478,
        lng: -73.3458369,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hart's Greenhouse & Florist",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7938224,
        lng: -71.9385076,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Madison Flower Shop & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3046718,
        lng: -72.6039541,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hollandia Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4130437,
        lng: -73.3763116,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "River Crest Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.2381698,
        lng: -73.0910284,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "White Flower Farm Store & Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.698519,
        lng: -73.184571,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Verab Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4411049,
        lng: -72.9884824,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Town & Country Farm & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.239202,
        lng: -73.4328339,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Smith's Acres Llc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3218183,
        lng: -72.2034114,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wolf's Blooms Berries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3932563,
        lng: -83.5545867,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Yelo Aple",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9870128,
        lng: -83.0059967,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Klein's Floral And Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.11888,
        lng: -89.322999,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Alsip Home & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4330578,
        lng: -87.4692196,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dunkler's Farm Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.078459,
        lng: -81.588664,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Suncrest Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.2093516,
        lng: -81.4921337,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bowood Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.649364,
        lng: -90.257177,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "County Line Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4952286,
        lng: -87.2201614,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "De Bloemen Hof",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4115856,
        lng: -92.9417992,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Flowers & Weeds",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.5949207,
        lng: -90.2369742,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gethsemane Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9867675,
        lng: -87.6691322,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Goode Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.6517767,
        lng: -93.6054629,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Joplin Greenhouse and the Coffee Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.0544304,
        lng: -94.4808126,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nick's Greenhouse & Floral",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3981941,
        lng: -92.9079409,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Orchids by Hausermann Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9082372,
        lng: -87.9899293,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Premier Succulents",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4576768,
        lng: -87.5592888,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Remus Farms Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5512557,
        lng: -87.2241969,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ted Lare Design Build & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4837567,
        lng: -93.739623,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Woldhuis Farms Sunrise Greenhouse, Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.2493722,
        lng: -87.6759236,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Baker's Acres Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.10651,
        lng: -82.636892,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Boyert's Greenhouse & Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.0789967,
        lng: -81.8631639,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Furst The Florist & Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7856359,
        lng: -84.1710059,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "North Dayton Garden Center & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.79558,
        lng: -84.154481,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cappelli's Country Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8930813,
        lng: -83.7824181,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Little Fairy Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8061734,
        lng: -83.8893591,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stoney Creek Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.81171,
        lng: -83.877467,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oakland Nursery - New Albany",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0617185,
        lng: -82.8322958,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oakland Nursery Delaware",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2961529,
        lng: -83.0391216,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Delhi Flower & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3919618,
        lng: -84.3689082,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "White Oak Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.2123596,
        lng: -84.6001459,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Buchwalter Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.8297353,
        lng: -81.8509718,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Downs Farm Market & Greenhouse",
    description:
      "Small little Farmers Market with 1-2 Greenhouses full of Houseplants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.8027258,
        lng: -82.5904758,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stratton Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.834813,
        lng: -83.91779,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Art Form Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.441975,
        lng: -81.346203,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bob's Market & Greenhouses Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.2800382,
        lng: -81.6129932,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wright Landscape Supply And Market Place",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.685232,
        lng: -82.682989,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Kitch Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.647373,
        lng: -84.274049,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Glasshouse Works",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3063233,
        lng: -81.8943155,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Petitti Garden Centers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.0418452,
        lng: -80.6331468,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Manda's Plant Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.875576,
        lng: -81.578011,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lancaster Greenhouse & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.731609,
        lng: -82.5914373,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Singing Springs Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.500429,
        lng: -82.9081973,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Daysspring Nursery Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.893571,
        lng: -82.724059,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Scheiderer Farms Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1959532,
        lng: -83.3747697,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wilson's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.064885,
        lng: -82.340938,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Baskets and Blooms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.598395,
        lng: -81.8161733,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mt Eaton Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.6962619,
        lng: -81.714549,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "de Monye's Greenhouse Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9922794,
        lng: -82.9367816,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Perfection Landscape & Greenhouse, LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.004483,
        lng: -82.8814749,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cliffs Greenhouse & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.0186739,
        lng: -82.387155,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Groovy Plants Ranch",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3574457,
        lng: -82.8247129,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green Valley Growers Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.8253316,
        lng: -82.2649819,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hadam Hills Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.9317846,
        lng: -82.2733794,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "LuRay Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.953972,
        lng: -82.582963,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Country Lane Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.8547728,
        lng: -82.5131848,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wade & Gatton Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.596643,
        lng: -82.463838,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stony Ridge Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.9516418,
        lng: -82.6386234,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Yoder's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7263402,
        lng: -81.7752261,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Richardson's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.653365,
        lng: -82.198742,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Country Nook Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3067009,
        lng: -83.20668,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Alta Florist & Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7336151,
        lng: -82.5703088,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Arnold's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7605362,
        lng: -82.6274583,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "STUMP : Cleveland",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4670676,
        lng: -81.5377819,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Uncle John's Plant Farm Home & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.36728,
        lng: -81.9014,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden Village Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3993081,
        lng: -81.9926815,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadow View Growers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.925924,
        lng: -84.031172,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Luna Gifts & Botanicals",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7573748,
        lng: -84.1826567,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Knollwood Garden Center and Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7356216,
        lng: -84.0749877,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Strader's Garden Center",
    description: "2625 London Groveport Rd, Grove City, OH ",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8387029,
        lng: -83.0769674,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "A J Rahn Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1824284,
        lng: -84.5264844,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Strader's Garden Center",
    description: "5350 Riverside Dr, Columbus, OH",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0664258,
        lng: -83.1040032,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Strader's Garden Centers",
    description: "7141 E Broad St, Columbus, OH",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.982266,
        lng: -82.811392,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oakland Nursery - Columbus",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.033361,
        lng: -82.9831559,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "STUMP : Italian Village",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.9866227,
        lng: -82.9971458,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oakland Nursery",
    description: "Dublin",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0984093,
        lng: -83.1036521,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Havel's Flowers & Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.677768,
        lng: -81.306864,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Planting Cleveland",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.486367,
        lng: -81.760665,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lakewood Plant Company",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4851221,
        lng: -81.806377,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Hirt's Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.1408419,
        lng: -81.7346281,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gale's Westlake Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.4572129,
        lng: -81.8909848,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Grant Line Garden Center & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.3094499,
        lng: -85.8214716,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ferguson's Floral and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.4066186,
        lng: -95.1278949,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Telly's Greenhouse and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.5690728,
        lng: -83.1089922,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Graye's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.3523092,
        lng: -83.458448,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Heartland Nursery and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.935314,
        lng: -94.451317,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Colonial Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9669753,
        lng: -94.2596578,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Family Tree Nursery",
    description: "Liberty",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.24104,
        lng: -94.434091,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Suburban Lawn & Garden",
    description: "Kansas City",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8849729,
        lng: -94.5980311,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Suburban Lawn & Garden - Garden Center",
    description: "Overland Park",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.937546,
        lng: -94.6386587,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Suburban Lawn & Garden",
    description: "Lenexa",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9608824,
        lng: -94.8567351,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Larry's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.169739,
        lng: -94.610081,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Family Tree Nursery - Nieman",
    description: "Shawnee",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.000865,
        lng: -94.715235,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jungle House",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9662797,
        lng: -95.2276338,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Family Tree Nursery",
    description: "Overland Park",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9758294,
        lng: -94.7007588,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pierson's Flower Shop & Greenhouses Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.992699,
        lng: -91.682785,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Frontier Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.0346623,
        lng: -91.6648135,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mother Earth Gardens",
    description: "3738 42nd Ave S, Minneapolis, MN",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.934467,
        lng: -93.213129,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mother Earth Gardens",
    description: "2318 NE Lowry Ave, Minneapolis, MN",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 45.0130734,
        lng: -93.2273215,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sunnyside Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.9224775,
        lng: -93.3278555,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tonkadale Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.9347318,
        lng: -93.4811739,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Maypop Coffee & Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6042179,
        lng: -90.3371597,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden Heights Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6246968,
        lng: -90.3210569,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rolling Ridge Nursery Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.595264,
        lng: -90.3599883,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fendler Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.527857,
        lng: -90.292976,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bug Store",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.616956,
        lng: -90.261173,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sugar Creek Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.598753,
        lng: -90.396839,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Missouri Botanical Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6127672,
        lng: -90.2593798,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Planthaven Farms - Olivette",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6737656,
        lng: -90.3817878,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Planthaven Farms - Oakville",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.4437684,
        lng: -90.3191505,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bayer Garden Shops Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.3730259,
        lng: -90.3788917,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bayer's Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.6006972,
        lng: -90.2923014,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fred Drummond Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.0941026,
        lng: -90.5050293,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jung Garden Center",
    description: "Fitchburg",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0138825,
        lng: -89.4748901,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jung Garden Center",
    description: "Madison",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.1346487,
        lng: -89.3739804,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Madison Greenhouse Store",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.0853059,
        lng: -89.3617791,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Country Arbors Nursery",
    description: "1742 County Rd 1400N   https://countryarbors.com",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0847284,
        lng: -88.1357462,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Prairie Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1137563,
        lng: -88.2967427,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Danville Gardens Too",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1306175,
        lng: -88.2583811,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Danville Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.1117501,
        lng: -87.6043033,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Vilt's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.3027645,
        lng: -88.210988,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Eisele Greenhouse Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 44.7167108,
        lng: -93.2346579,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bittersweet Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.309769,
        lng: -86.564051,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Huyck Farms",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.0962897,
        lng: -88.6447668,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Plantier",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8977677,
        lng: -87.6676528,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Farmers Market - Chicago's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9552565,
        lng: -87.7220525,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant Shop Chicago",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9647685,
        lng: -87.7349658,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Foyer Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.9781582,
        lng: -87.6678116,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sprout Home",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.895349,
        lng: -87.6768319,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cultivate Urban Rainforest & Gallery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.033827,
        lng: -87.680895,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Landscape Garden Centers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.479122,
        lng: -96.728447,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cliff Avenue Greenhouse & Garden Center",
    description: "7310 W 41st St, Sioux Falls, SD",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.5154323,
        lng: -96.8162763,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cliff Avenue Greenhouse & Garden Center",
    description: "2101 E 26th St, Sioux Falls, SD",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.5284532,
        lng: -96.6980528,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stark Bro's Nurseries & Orchards Co.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4276971,
        lng: -91.0822659,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ray Wiegand's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.6477571,
        lng: -82.9376368,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Canoyer Garden Center",
    description: "Grimes",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.6606359,
        lng: -93.776678,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Canoyer Garden Center",
    description: "Papillion",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.147993,
        lng: -96.015464,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Canoyer Garden Center - Ankeny",
    description: "Ankeny",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7028151,
        lng: -93.6023327,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Natorp's Nursery Outlet & Landscaping",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.3136243,
        lng: -84.3329534,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Earl Thieneman Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.2581436,
        lng: -85.5174723,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Brian’s Botanicals",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.0709111,
        lng: -85.6693503,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Allisonville Nursery, Garden & Home",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.95306,
        lng: -86.040414,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Dammann's Lawn & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7657313,
        lng: -86.2446718,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Root 31",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.0408692,
        lng: -86.1305134,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Forest Flower",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8832383,
        lng: -86.2144004,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Grounded Plant and Floral Co",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7741629,
        lng: -86.1331142,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Mahonia",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.2529396,
        lng: -85.7371513,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wallitsch Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.2019275,
        lng: -85.6504684,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Plant Kingdom",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.2576025,
        lng: -85.6476995,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wickman's Garden Village",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.190577,
        lng: -93.30949,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Maria Gardens Center",
    description: "North Royalton",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.334791,
        lng: -81.784384,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Maria Gardens Center",
    description: "Strongsville",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.311233,
        lng: -81.851932,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oak Creek Plants and Flowers.",
    description: "Oak Creek Plants and Flowers.  ",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7781676,
        lng: -96.7036369,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ginger Valley",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7327948,
        lng: -86.1606701,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Point 156",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.7917211,
        lng: -87.8549077,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ted's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.5828188,
        lng: -87.8238245,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Christy Webber Farm & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.8954544,
        lng: -87.6981315,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Yankton Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 42.8891022,
        lng: -97.374488,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fensel's Greenhouse & Flower Hotel",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.3586129,
        lng: -97.4197422,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Moana Nursery",
    description:
      "Moana Nursery has proudly served northern Nevada with nursery and landscaping services since 1967. More than 100 varieties of shrubs and 120 varieties of trees are grown by Moana Nursery - all specifically designed to thrive in the northern Nevada climate.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4289994,
        lng: -119.7633556,
      },
      address: null,
    },
    website: "https://www.moananursery.com",
    contact: {
      email: "customerservice@moananursery.com",
      phone: {
        number: "7758531319",
      },
    },
    social: {
      instagram: "moananursery",
    },
  },
  {
    name: "Moana Nursery",
    description:
      "Moana Nursery has proudly served northern Nevada with nursery and landscaping services since 1967. More than 100 varieties of shrubs and 120 varieties of trees are grown by Moana Nursery - all specifically designed to thrive in the northern Nevada climate.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.560089,
        lng: -119.7529968,
      },
      address: null,
    },
    website: "https://www.moananursery.com",
    contact: {
      email: "customerservice@moananursery.com",
      phone: {
        number: "7754254300",
      },
    },
    social: {
      instagram: "moananursery",
    },
  },
  {
    name: "Urban Scout Reno",
    description:
      "A design-driven boutique headlining a curated selection of furniture, lighting, art, apparel + plants. We hand pick all of our houseplants every week🌱",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.4924516,
        lng: -119.807771,
      },
      address: null,
    },
    website: "https://www.urbanscout.us",
    contact: {
      email: "info@urbanscout.us",
      phone: {
        number: "7758266605",
      },
    },
    social: {
      instagram: "urbanscoutreno",
    },
  },
  {
    name: "Natural Selection",
    description:
      "Purveyors of quality specimens, located in the heart of midtown Reno NV. We're in love with all things glorious and natural.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.5181271,
        lng: -119.8102028,
      },
      address: null,
    },
    website: "https://www.naturalselectionstore.com",
    contact: {
      email: "emily@naturalselectionstore.com",
      phone: {
        number: "7753762282",
      },
    },
    social: {
      instagram: "naturalselectionstore",
    },
  },
  {
    name: "Sierra Water Gardens",
    description:
      "Plant Store ↠ Indoor Plants, Succulents, Air Plants and other plant accessories",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["the facebook link in your website is broken"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.5221834,
        lng: -119.8371144,
      },
      address: null,
    },
    website: "https://www.sierrawatergardens.com",
    contact: {
      email: "sam@sierrawatergardens.com",
      phone: {
        number: "7756224090",
      },
    },
    social: {
      instagram: "sierrawatergardens",
    },
  },
  {
    name: "Moana Nursery Landscape Services",
    description:
      "Moana Nursery has proudly served northern Nevada with nursery and landscaping services since 1967. More than 100 varieties of shrubs and 120 varieties of trees are grown by Moana Nursery - all specifically designed to thrive in the northern Nevada climate.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.490946,
        lng: -119.809804,
      },
      address: null,
    },
    website: "https://www.moananursery.com",
    contact: {
      email: "customerservice@moananursery.com",
      phone: {
        number: "7758250602",
      },
    },
    social: {
      instagram: "moananursery",
    },
  },
  {
    name: "Sin City Plants",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.06898,
        lng: -115.191231,
      },
      address:
        "6625 S Valley View Blvd #232, Las Vegas, NV 89118, United States",
    },
    website: "http://sincityplants.com",
    contact: {
      email: "sales@sincityplants.com",
      phone: {
        number: "7029974094",
      },
    },
    social: {
      instagram: "sincityplants",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.241367,
        lng: -115.226944,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.203893,
        lng: -115.065117,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.162925,
        lng: -115.335538,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.182233,
        lng: -115.257707,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.156685,
        lng: -115.204579,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.157753,
        lng: -115.111692,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.097163,
        lng: -115.2938,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.084148,
        lng: -115.122099,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.006941,
        lng: -115.118303,
      },
      address: null,
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7028040054",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Carrie Lynn’s plants",
    description:
      "Carrie Lynn's Plant Shop is a specialty houseplant & goods store that cares about quality and customers.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description in google maps"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.167058,
        lng: -115.133911,
      },
      address: "1028 Fremont St, Las Vegas, NV 89101, United States",
    },
    website: "https://www.carrielynns.com",
    contact: {
      email: "support@carrielynns.com",
      phone: {
        number: "7029100400",
      },
    },
    social: {
      instagram: "carrielynnsplants",
    },
  },
  {
    name: "Cactus Joe's Blue Diamond Nursery",
    description:
      "A wide variety cacti & desert plants, plus pottery & art on offer in this sprawling, quirky nursery.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["description in google maps"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.039305,
        lng: -115.367358,
      },
      address: null,
    },
    website: "http://www.cactusjoeslasvegas.com",
    contact: {
      email: "cactusjoeslasvegas@gmail.com",
      phone: {
        number: "7028751968",
      },
    },
    social: {
      instagram: "cactus.joes",
    },
  },
  {
    name: "Shade Home and Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.2891106,
        lng: -111.7330946,
      },
      address: "435 S Geneva Rd #5862, Orem, UT 84058, United States",
    },
    website: "http://shadehomeandgarden.com",
    contact: {
      email: null,
      phone: {
        number: "8012254357",
      },
    },
    social: {
      instagram: "shadehomeandgarden",
    },
  },
  {
    name: "Cactus & Tropicals",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.5277459,
        lng: -111.8525903,
      },
      address: "12252 Draper Gate Dr, Draper, UT 84020, United States",
    },
    website: "http://www.cactusandtropicals.com",
    contact: {
      email: "draper@cactusandtropicals.com",
      phone: {
        number: "8016760935",
      },
    },
    social: {
      instagram: "cactusandtropicals",
    },
  },
  {
    name: "Thyme and Place",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.749516,
        lng: -111.8805241,
      },
      address: "362 E 900 S, Salt Lake City, UT 84111, United States",
    },
    website: "https://www.thymeandplaceshop.com",
    contact: {
      email: "hello@thymeandplaceshop.com",
      phone: {
        number: "3852181684",
      },
    },
    social: {
      instagram: "ThymeandPlaceSLC",
    },
  },
  {
    name: "Orchid Dynasty",
    description:
      "We invite you to visit our shop and get to know us. We specialize in Orchids, Flowers and Events.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7494509,
        lng: -111.9018061,
      },
      address: "365 W 900 S, Salt Lake City, UT 84105, United States",
    },
    website: "http://www.orchiddynasty.com",
    contact: {
      email: "orders@orchiddynasty.com",
      phone: {
        number: "8015834754",
      },
    },
    social: {
      instagram: "orchiddynasty",
    },
  },
  {
    name: "Bookcliff Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.1137768,
        lng: -108.5722558,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Herbery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7257474,
        lng: -104.9770597,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "City Floral Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.73902,
        lng: -104.9168889,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "O'Toole's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.6222093,
        lng: -105.0291675,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Green Lady Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7280837,
        lng: -104.9989985,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tagawa Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.5766059,
        lng: -104.7953062,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "O'Toole's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.8671944,
        lng: -105.0854254,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "O'Toole's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7385918,
        lng: -105.1225734,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Echter's Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.790109,
        lng: -105.099625,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Nick's Garden Center & Farm Market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.6793688,
        lng: -104.811221,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Flower Bin Garden Center & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.151726,
        lng: -105.1226481,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "J&J Nursery and Garden Center",
    description:
      "Utah’s largest producing nursery—with over 100 acres of nursery & over 45 years of experience, plus a huge garden & gift center!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 41.059446,
        lng: -112.000538,
      },
      address: "1815 W Gentile St, Layton, UT 84041, United States",
    },
    website: "http://www.jjnursery.com",
    contact: {
      email: "nursery@jjnursery.com",
      phone: {
        number: "8015441211",
      },
    },
    social: {
      instagram: "jjnursery",
    },
  },
  {
    name: "Paradise Palm Inc",
    description:
      "Paradise Palm is a local longstanding Interior Plantcare contractor and Indoor Garden Store. Since 1977 we have been providing houseplants, Bonsai Trees, Orchids, Air Plants,  Plant Rentals, & Unique and unusual tropical plants.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7630209,
        lng: -111.881952,
      },
      address: "307 E Broadway, Salt Lake City, UT 84111, United States",
    },
    website: "http://www.paradisepalm.com",
    contact: {
      email: "john@paradisepalm.com",
      phone: {
        number: "8015823212",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Madeline George Garden Design Nursery",
    description:
      "We are a boutique garden center & nursery with a superb collection of plants for all garden styles. We also offer landscape & garden design services.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.6925018,
        lng: -116.3133642,
      },
      address: null,
    },
    website: "http://www.madelinegeorge.com",
    contact: {
      email: "info@madelinegeorge.com",
      phone: {
        number: "2089952815",
      },
    },
    social: {
      instagram: "madelinegeorgenursery",
    },
  },
  {
    name: "36TH STREET GARDEN CENTER",
    description:
      "We inspire creativity and encourage growth through plants and design. 🌱",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.654776,
        lng: -116.234492,
      },
      address: null,
    },
    website: "http://www.36streetgardencenter.com",
    contact: {
      email: "info@36streetgardencenter.com",
      phone: {
        number: "2084335100",
      },
    },
    social: {
      instagram: "36th_street_garden_center",
    },
  },
  {
    name: "Sun River Gardens",
    description:
      "Spacious garden center stocking plants & accessories, plus home decor, gifts & seasonal items.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.3200287,
        lng: -111.7041346,
      },
      address: null,
    },
    website: "https://sunrivergardens.com",
    contact: {
      email: "info@sunrivergardens.com",
      phone: {
        number: "8012291975",
      },
    },
    social: {
      instagram: "sunrivergardens",
    },
  },
  {
    name: "Cactus & Tropicals",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.7120101,
        lng: -111.8335183,
      },
      address: "2735 S 2000 E, Salt Lake City, UT 84109, United States",
    },
    website: "http://www.cactusandtropicals.com",
    contact: {
      email: "saltlake@cactusandtropicals.com",
      phone: {
        number: "8014852542",
      },
    },
    social: {
      instagram: "cactusandtropicals",
    },
  },
  {
    name: "North End Organic Nursery",
    description:
      "North End Organic Nursery is your neighborhood garden center specializing in organic gardening supplies, xeric, native and edible plants, houseplants, gifts and helpful folks!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: ["I added your website too google maps so people can find you"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.6258676,
        lng: -116.2444883,
      },
      address: null,
    },
    website: "https://www.northendnursery.com",
    contact: {
      email: "info@northendnursery.com",
      phone: {
        number: "2083894769",
      },
    },
    social: {
      instagram: "northendorganicnursery",
    },
  },
  {
    name: "Edwards Greenhouse",
    description:
      "A family owned business since 1930 and the largest retail greenhouse in the Treasure Valley.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 43.657661,
        lng: -116.240552,
      },
      address: null,
    },
    website: "https://www.edwardsgreenhouse.com",
    contact: {
      email: "info@edwardsgreenhouse.com",
      phone: {
        number: "2083427548",
      },
    },
    social: {
      instagram: "edwardsgreenhouse",
    },
  },
  {
    name: "Gulley Greenhouse and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 40.501482,
        lng: -105.097329,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Phelan Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9030289,
        lng: -104.739244,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Good Earth Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8530341,
        lng: -104.8337097,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rick's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8476778,
        lng: -104.8490369,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Summerland Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8090693,
        lng: -104.8418166,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Harding Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8422559,
        lng: -104.7197887,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Abner's Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.7777778,
        lng: -105.1366667,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "PlantBar",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.8592548,
        lng: -75.9827486,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Norfolk County Feed and Seed",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.829324,
        lng: -76.3448127,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Paradise Found Nursery",
    description:
      "We sell rare & exotic succulent plants from all over the world.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.4028741,
        lng: -82.5182666,
      },
      address: "3570 Tallevast Rd, Sarasota, FL 34243, United States",
    },
    website: "https://www.paradisefoundnursery.com",
    contact: {
      email: null,
      phone: {
        number: "5402291997",
      },
    },
    social: {
      instagram: "paradisefoundnursery",
    },
  },
  {
    name: "Godley's Garden Center & Nursery Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.6953107,
        lng: -80.5242234,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Brawley Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5898908,
        lng: -80.7954369,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Upchurch Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.3920906,
        lng: -81.3633113,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Kerby's Nursery & Landscaping",
    description:
      "A retail garden center in the Brandon, FL area that loves to inspire gardeners and plant lovers to get outside and create their own piece of paradise.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.9746235,
        lng: -82.2863337,
      },
      address: "2311 S Parsons Ave, Seffner, FL 33584, United States",
    },
    website: "http://www.kerbysnursery.com",
    contact: {
      email: "admin@kerbysnursery.com",
      phone: {
        number: "8136853265",
      },
    },
    social: {
      instagram: "kerbysnursery",
    },
  },
  {
    name: "South Pleasantburg Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.8091284,
        lng: -82.3686609,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Martin Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.7853998,
        lng: -82.3546958,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stranges Florist & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.5718825,
        lng: -77.3985979,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "POP'S NURSERY",
    description:
      "Resource for a full range of tropical plants & gardening needs, plus landscape design services.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.035766,
        lng: -80.248018,
      },
      address: "2807 N University Dr, Hollywood, FL 33024, United States",
    },
    website: "http://www.popsnursery.com",
    contact: {
      email: null,
      phone: {
        number: "9544327302",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Stanley's Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.949653,
        lng: -83.8999663,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Living Color Garden Center",
    description:
      "Open-air nursery features a variety of plants, fountains, statuary & gardening supplies on 5 acres.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.062988,
        lng: -80.195786,
      },
      address: "3691 FL-818, Fort Lauderdale, FL 33312, United States",
    },
    website: "https://www.livingcolorgardencenter.net",
    contact: {
      email: "office@livingcolorgardencenter.net",
      phone: {
        number: "9549858787",
      },
    },
    social: {
      instagram: "livingcolorgardencenter",
    },
  },
  {
    name: "Perfect Choice Nursery",
    description:
      "We are a family owned nursery and garden center retailer that prides itself on exceptional service, selection, and quality. We treat our customers as our friends and family, and appreciate the support of our community. We hope you enjoy your visit!",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.0612504,
        lng: -80.3962018,
      },
      address: "4700 SW 186th Ave, Southwest Ranches, FL 33332, United States",
    },
    website: "https://www.perfectchoicenursery.com",
    contact: {
      email: "perfectchoicelc@bellsouth.net",
      phone: {
        number: "9544457234",
      },
    },
    social: {
      instagram: "perfectchoicenu",
    },
  },
  {
    name: "The Plant Place",
    description:
      "We began as Adams Nursery, a neighborhood nursery on Whitfield Ave in 1962. We are once again your full service neighborhood nursery. Visit The Plant Place, for all your plant needs ranging from landscape material to plants & Bonsai materials.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.423258,
        lng: -82.575052,
      },
      address: "6611 14th St W, Bradenton, FL 34207, United States",
    },
    website: "http://www.plantplace.com",
    contact: {
      email: "info@plantplace.com",
      phone: {
        number: "9417536611",
      },
    },
    social: {
      instagram: "theplantplace1962",
    },
  },
  {
    name: "Garden Gate Nursery",
    description:
      "We sell locally grown Trees, Shrubs, Annuals, Perennials, Houseplants as well as Fertilizers, Soils, Garden Related Gifts and Accessories.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.6753434,
        lng: -82.3895749,
      },
      address: "2406 NW 43rd St, Gainesville, FL 32606, United States",
    },
    website: "http://www.gardengatenursery.net",
    contact: {
      email: null,
      phone: {
        number: "3523764922",
      },
    },
    social: {
      instagram: "garden.gate.nursery",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.676556,
        lng: -82.340884,
      },
      address: "2564 NW 13th St, Gainesville, FL 32609, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "3523678900",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.62526,
        lng: -82.381412,
      },
      address: "3101 Clark Butler Blvd, Gainesville, FL 32608, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "3524482000",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "The Green House Nursery",
    description:
      "The largest retail nursery and Garden Center in the Gainesville area and the Paver and Patio Professionals.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.652818,
        lng: -82.50619,
      },
      address: "15207 W Newberry Rd, Newberry, FL 32669, United States",
    },
    website: "http://www.tghnfl.com",
    contact: {
      email: "info@tghnfl.com",
      phone: {
        number: "3524723699",
      },
    },
    social: {
      instagram: "greenhousenursery",
    },
  },
  {
    name: "The Transplanted Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.2303211,
        lng: -77.9285748,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Oakdale Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.2968834,
        lng: -80.7883541,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Strange's Florists, Greenhouses and Garden Centers",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.657583,
        lng: -77.634771,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "McDonald Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.8734198,
        lng: -76.0380861,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "McDonald Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.877283,
        lng: -76.132558,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Anderson's Newport News",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 37.0635512,
        lng: -76.4668438,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fiddleheads Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.7582801,
        lng: -84.9895751,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Williams Greenhouses & Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.0216937,
        lng: -77.4141556,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: "Chantilly",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9277249,
        lng: -77.5127956,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: "Falls Church",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8705335,
        lng: -77.1655694,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Merrifield Garden Center",
    description: "Falls Church",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8757011,
        lng: -77.2264388,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Twigs Nursery",
    description: "7653 Oktoc Rd",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.4071647,
        lng: -88.7762978,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Clegg's Nursery #3",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.4938529,
        lng: -91.0653141,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Clegg's Nursery #2",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.3991092,
        lng: -91.0565357,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Clegg's Nursery #1",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.45279,
        lng: -91.1180436,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Carolina Garden World",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.9248304,
        lng: -81.8863317,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Red Barn Greenhouse & Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.527646,
        lng: -82.9965034,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Malone's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.301293,
        lng: -80.895323,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Louisiana Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.3869234,
        lng: -91.1046279,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Baton Rouge Succulent Co.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.37855,
        lng: -91.140754,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Flora/Fauna",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.7480602,
        lng: -84.3627074,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Victorian Atlanta",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.772768,
        lng: -84.365758,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ninth Ward Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.9791658,
        lng: -90.0185721,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "TPG - The Plant Gallery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.972548,
        lng: -90.123537,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Urban Roots Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.9221025,
        lng: -90.0745047,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Harolds Indoor Outdoor Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.968851,
        lng: -90.0464006,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Good Earth Produce & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.5059794,
        lng: -82.0824665,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Griffin's Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.295115,
        lng: -81.961426,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gabriella Plants",
    description:
      "Our mission is to grow vigorous plants & ship our tropical plants straight from our greenhouse to your house.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.628904,
        lng: -81.2595193,
      },
      address: "4875 Gabriella Ln, Oviedo, FL 32765, United States",
    },
    website: "http://www.gabriellaplants.com",
    contact: {
      email: "orders@gabriellaplants.com",
      phone: {
        number: null,
      },
    },
    social: {
      instagram: "gabriellaplantsonline",
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: "Herndon",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9957271,
        lng: -77.3349708,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: "Vienna",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.9778701,
        lng: -77.3143648,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Meadows Farms Nurseries and Landscape",
    description: "Annandale",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8192668,
        lng: -77.1904481,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Merrifield Garden Center",
    description: "Fairfax",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8461587,
        lng: -77.3658514,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Holly, Woods & Vines",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.727306,
        lng: -77.110631,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wild Roots",
    description:
      "We provide a welcoming environment where customers can browse for plants and learn how to successfully incorporate them into their homes. We have our inventory to include a curated selection of locally made goods. We also share our space as a creative studio for workshops, photo shoots and special events.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.7703524,
        lng: -82.6598302,
      },
      address: "1949 1st Ave S Unit A, St. Petersburg, FL 33712, United States",
    },
    website: "https://www.wildrootsstpete.com",
    contact: {
      email: "wildrootsstpete@gmail.com",
      phone: {
        number: "3528716975",
      },
    },
    social: {
      instagram: "wildrootsstpete",
    },
  },
  {
    name: "Bloom Garden Shop",
    description:
      "We strive to constantly reinvent our creative botanical space that many call their “HAPPY PLACE” …the ultimate compliment that lets us know we are doing our job!",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.919191,
        lng: -82.493782,
      },
      address: "3005 S MacDill Ave, Tampa, FL 33629, United States",
    },
    website: "http://www.bloomtampa.com",
    contact: {
      email: "info@bloomtampa.com",
      phone: {
        number: "8138052151",
      },
    },
    social: {
      instagram: "bloom.gardenshop",
    },
  },
  {
    name: "Green Thumb Nursery - Tampa",
    description:
      "We offer a variety of products that include plants, gardening supplies, hardware, irrigation, casual patio furniture, garden art, water features and much more!",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.01387,
        lng: -82.58241,
      },
      address: "6913 Sheldon Rd, Tampa, FL 33615, United States",
    },
    website: "https://www.greenthumb.com",
    contact: {
      email: null,
      phone: {
        number: "8138843797",
      },
    },
    social: {
      instagram: "greenthumbnursery",
    },
  },
  {
    name: "Kathy's Korner Nursery Inc",
    description:
      "We offer a wide variety of indoor and outdoor decorative plants as well as landscape plants and trees that will help to make any home or business more beautiful and attractive",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.827424,
        lng: -82.674641,
      },
      address: "3118 62nd Ave N, St. Petersburg, FL 33702, United States",
    },
    website: "http://kathyskornernursery.com",
    contact: {
      email: null,
      phone: {
        number: "7275259640",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "ABC Tropical Plant Nursery, Inc.",
    description:
      "ABC specializes in the Hawaiian Lei Flowers. We carry over 50 of what we have determined are the most popular cultivars.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.89229,
        lng: -82.728306,
      },
      address: "13275 66th St N, Largo, FL 33773, United States",
    },
    website: "http://www.buyplumerias.com",
    contact: {
      email: "sales@buyplumerias.com",
      phone: {
        number: "7275468787",
      },
    },
    social: {
      instagram: "buyplumerias",
    },
  },
  {
    name: "Haynor's Potting Shed and Nursery",
    description:
      "We offer a not only a wide variety of plants but of services as well. Welcome to come whenever you want!",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.901526,
        lng: -82.761328,
      },
      address: "1625 Starkey Rd, Largo, FL 33771, United States",
    },
    website: "https://www.gardendesign-inc.com",
    contact: {
      email: "george@gardendesign-inc.com",
      phone: {
        number: "7275856171",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Discount Palms & Plants",
    description:
      "Discount palms and plants is your one stop shopping for all your palm tree and planting needs.  come by and see some of our unique plants that you will not find at other nurseries and big box stores!",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.854561,
        lng: -82.786715,
      },
      address: "9009 Seminole Blvd, Seminole, FL 33772, United States",
    },
    website: "https://www.discountpalmsandplants.com",
    contact: {
      email: "sdlawnandlandscape@earthlink.net",
      phone: {
        number: "7273857851",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Wilcox Nursery and Landscape",
    description:
      "Native Florida Plants, Trees, Full Service Landscaping and Design, and Edibles since 1947.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.886702,
        lng: -82.832179,
      },
      address: "12501 Indian Rocks Rd, Largo, FL 33774, United States",
    },
    website: "https://www.wilcoxnursery.com",
    contact: {
      email: null,
      phone: {
        number: "7275952073",
      },
    },
    social: {
      instagram: "wilcox_nursery",
    },
  },
  {
    name: "Eden Nursery",
    description:
      "We have a full retail nursery with everything you need to improve your gardens, including fresh greenery and blooms, and our knowledgeable sales team can answer any questions you have.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.034488,
        lng: -82.70786,
      },
      address: "3145 N, McMullen Booth Rd, Clearwater, FL 33761, United States",
    },
    website: "https://www.edennursery.com",
    contact: {
      email: "edennurseryfl@aol.com",
      phone: {
        number: "7277254207",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Local gardens plant shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.148707,
        lng: -82.754857,
      },
      address: "136 Cypress St, Tarpon Springs, FL 34689, United States",
    },
    website: "http://www.localgardensplantshop.com",
    contact: {
      email: "localgardensbym@gmail.com",
      phone: {
        number: "7275071283",
      },
    },
    social: {
      instagram: "localgardensplantshop",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.151643,
        lng: -82.74267,
      },
      address: "41800 US Hwy 19 N, Tarpon Springs, FL 34689, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "7272799000",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Grand Garden Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.194774,
        lng: -82.723943,
      },
      address: "2449 Grand Blvd, Holiday, FL 34690, United States",
    },
    website: "https://grand-garden-nursery.business.site",
    contact: {
      email: null,
      phone: {
        number: "7273898238",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "ADU Tropical Plants",
    description:
      "Our collection started with succulents, and now we have a wide variety of plants that you will love. We're waiting for you.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.219753,
        lng: -82.690916,
      },
      address: "4154 Rowan Rd, New Port Richey, FL 34653, United States",
    },
    website: "https://adu-tropical-plants.business.site",
    contact: {
      email: null,
      phone: {
        number: "7278461230",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Christine's Tropical & Exotic Plants",
    description:
      "We are a tropical and exotic plant store in the Oldsmar Flea Martket, Oldsmar Florida.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "add your instagram to your website",
        "can you tell me once your shop is live? so I can upload it on my website",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.035536,
        lng: -82.648993,
      },
      address: "180 Race Track Road North, Oldsmar, FL 34677, United States",
    },
    website: "http://www.plantlocator1.com",
    contact: {
      email: null,
      phone: {
        number: "8138545888",
      },
    },
    social: {
      instagram: "christinesplants",
    },
  },
  {
    name: "Dolins Garden Center",
    description:
      "Dolins Garden Center offers a variety of annuals, perennials, shrubs, trees, natives, mulches, pottery, fountains and statuary to meet all of your gardening needs. More than 40 years of experience.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.828759,
        lng: -82.646003,
      },
      address: "801 62nd Ave N, St. Petersburg, FL 33702, United States",
    },
    website: "http://dolinsgardencenter.com",
    contact: {
      email: "mail@dolinsgardencenter.com",
      phone: {
        number: "7275253434",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "E.F.G. Orchids inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.12114,
        lng: -81.269241,
      },
      address: "4265 Marsh Rd, DeLand, FL 32724, United States",
    },
    website: "http://www.efgorchids.com",
    contact: {
      email: "efg.orchids@gmail.com",
      phone: {
        number: "3864906924",
      },
    },
    social: {
      instagram: "efgorchids",
    },
  },
  {
    name: "Ellis Home Decor and Garden",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.5497343,
        lng: -93.6666872,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fancy Free Nursery",
    description:
      "We welcome all, from beginners to experts, to come into our store and find a plant that speaks to your individual personalities. We don't just sell you plants and have you go on your way, we love educating you on where your plant comes from and how to care for it.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "impossible to read the menu, apply some overlay or something, the white text it's not readable if not.",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.9585458,
        lng: -82.4596883,
      },
      address: "1502 N Florida Ave, Tampa, FL 33602, United States",
    },
    website: "https://www.fancyfreenursery.com",
    contact: {
      email: "hello@fancyfreenursery.com",
      phone: {
        number: "8132600217",
      },
    },
    social: {
      instagram: "fancyfreenursery",
    },
  },
  {
    name: "Seeds",
    description: "Succulent, cactus, & house plant garden store",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["add your instagram in your facebook account"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.011136,
        lng: -82.7895659,
      },
      address: "719 Broadway, Dunedin, FL 34698, United States",
    },
    website: "https://seedsdunedin.com",
    contact: {
      email: "succulentsbyseeds@gmail.com",
      phone: {
        number: "7272282254",
      },
    },
    social: {
      instagram: "seeds_dunedin",
    },
  },
  {
    name: "Tarheel Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.508214,
        lng: -78.6882237,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "DeWayne's",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5164733,
        lng: -78.2987192,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Painters Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5789466,
        lng: -82.1969645,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Appalachian Tropicals",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5437641,
        lng: -82.4439709,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "217 Old Airport Rd",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.3928377,
        lng: -80.547274,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Signal Mountain Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.180813,
        lng: -85.3174388,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "2914 Sandy Ridge Rd",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.0878439,
        lng: -79.989675,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tallahassee Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 30.4823602,
        lng: -84.2566043,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Cold Creek Nurseries",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 33.554308,
        lng: -81.779554,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Forest Lake Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.1485277,
        lng: -79.8354736,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "B. B. Barns The Garden Company",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.484137,
        lng: -82.519377,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Jesse Israel & Sons Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5554443,
        lng: -82.5985156,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rose's Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.6070302,
        lng: -82.5458197,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Carolina Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.9853415,
        lng: -79.801615,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Tiny Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.0846452,
        lng: -79.8038049,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Guilford Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.087994,
        lng: -79.887235,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Big Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.0610646,
        lng: -79.853678,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Big Bloomers Flower Farm",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.4325919,
        lng: -79.229836,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "J&C Gardenworld",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.458947,
        lng: -78.1419497,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The ZEN Succulent",
    description: "Durham",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.9968122,
        lng: -78.9021574,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "For Garden's Sake",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.8649942,
        lng: -78.9461607,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Logan's One Stop Garden Shop",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.789951,
        lng: -78.640877,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant Delights Nursery, Inc.",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.6263887,
        lng: -78.6395756,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Growin Green Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.0061896,
        lng: -78.0012091,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gunters Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.93851,
        lng: -78.826035,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Fairview Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.707115,
        lng: -78.765091,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Plant and See Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.5487562,
        lng: -77.3849722,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The Potted Plant",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.7294534,
        lng: -76.6391934,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pender Pines Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.4322185,
        lng: -77.6348952,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Anderson's Virginia Beach",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.7475423,
        lng: -76.0059377,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Homewood Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.9275588,
        lng: -78.6220569,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Atlantic Gardening Company",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.854089,
        lng: -78.600297,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Garden Supply Company",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.7663613,
        lng: -78.8094483,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Campbell Road Nursery - Retail",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.7412154,
        lng: -78.7368082,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Farmers market",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.7627683,
        lng: -78.6640634,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "The ZEN Succulent",
    description: "Raleigh",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.7779513,
        lng: -78.6384231,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Macon Gardens",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.9175357,
        lng: -78.540486,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Abernethy & Spencer Greenhouse and Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.117834,
        lng: -77.697791,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Al's Orchid Greenhouse",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.086158,
        lng: -77.582123,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greenstreet Gardens of Virginia",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 38.8271424,
        lng: -77.0868441,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Weber's Nursery & Garden Center",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 39.2208674,
        lng: -78.1298508,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Abide A While Garden Boutique",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8160823,
        lng: -79.8475212,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Brownswood Nursery and Landscape Design",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.7384234,
        lng: -80.0757843,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "plant babe",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 32.8292664,
        lng: -79.9518398,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Brafford's Greenhouses",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.3909047,
        lng: -80.5470985,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Rountree Plantation",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.1715218,
        lng: -80.8805061,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "A B Seed Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.087863,
        lng: -79.989141,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "A & A Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 36.218788,
        lng: -79.6350779,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Ecuagenera USA",
    description:
      "Propagation and sale of Orchids, Aroids, Bromeliads and many other tropical plants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.7366094,
        lng: -81.5599502,
      },
      address: "3600 Plymouth Sorrento Rd, Apopka, FL 32712, United States",
    },
    website: "http://ecuageneraus.com",
    contact: {
      email: "marketing@ecuageneraus.com",
      phone: {
        number: "9419606950",
      },
    },
    social: {
      instagram: "ecuagenerausa",
    },
  },
  {
    name: "P & P Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.531609,
        lng: -80.475844,
      },
      address: "25201 SW 177th Ave, Homestead, FL 33031, United States",
    },
    website: "https://www.pnpnursery.com",
    contact: {
      email: "sales@pnpnursery.com",
      phone: {
        number: "3052488200",
      },
    },
    social: {
      instagram: "pnp_nursery_",
    },
  },
  {
    name: "Redland Nursery, Inc.",
    description:
      "Veteran nursery (since 1970) featuring tropical foliage ranging from bushes to palm trees.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "I added the website on google for you so you can reach more people",
        "Don't you have instagram account?",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.5216914,
        lng: -80.4911538,
      },
      address: "18455 SW 264th St, Homestead, FL 33031, United States",
    },
    website: null,
    contact: {
      email: "info@redlandnursery.com",
      phone: {
        number: "3052485109",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Bonita Bromeliads",
    description: "We are a nursery specialist in bromelias plants",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.3518521,
        lng: -81.7460823,
      },
      address: "12525 Tower Rd, Bonita Springs, FL 34135, United States",
    },
    website: "http://www.bonitabromeliads.com",
    contact: {
      email: null,
      phone: {
        number: "2397784193",
      },
    },
    social: {
      instagram: "bonitabromeliads",
    },
  },
  {
    name: "Driftwood Garden Center",
    description:
      "We have thousands of green and colorful interior and outdoor plants. We also possess the areas largest selection of pottery offering over 10,000 containers to choose from.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.4472091,
        lng: -81.8158162,
      },
      address: "20071 South Tamiami Trail, Estero, FL 33928, United States",
    },
    website: "http://www.driftwoodgardencenter.com",
    contact: {
      email: "estero@driftwoodgardencenter.com",
      phone: {
        number: "2399479676",
      },
    },
    social: {
      instagram: "driftwood_garden_center",
    },
  },
  {
    name: "Landscaper's Choice: Wholesale Plant Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.389607,
        lng: -81.807264,
      },
      address: "24242 Production Cir, Bonita Springs, FL 34135, United States",
    },
    website: "http://lcflorida.com",
    contact: {
      email: "info@lcflorida.com",
      phone: {
        number: "2396768293",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Sundance Orchids & Bromeliads",
    description:
      "Sundance Orchids and Bromeliads is a retail & wholesale orchid and bromeliad nursery. Nine modern, clean and organized greenhouses are set on nearly 5 acres of landscaped grounds.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.508214,
        lng: -81.83884,
      },
      address: "16095 S Pebble Ln, Fort Myers, FL 33912, United States",
    },
    website: "http://www.sundanceorchids.com",
    contact: {
      email: "info@sundanceorchids.com",
      phone: {
        number: "2394891234",
      },
    },
    social: {
      instagram: "sundanceorchids",
    },
  },
  {
    name: "Ray's Forest",
    description:
      " I am a wise guy I've been dealing with nature on my life like it was my very own life I'm experienced I am the best and most affordable one in the area with the greatest smile you can think of.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.617069,
        lng: -81.646064,
      },
      address: "415 Williams Ave, Lehigh Acres, FL 33972, United States",
    },
    website: "https://rays-forest.business.site",
    contact: {
      email: null,
      phone: {
        number: "2392589653",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "R S Walsh Landscaping - In The Garden",
    description:
      "A family owned custom landscape architecture firm + retail storefront offering a high end selection of plants + goods 🍃.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.445609,
        lng: -82.116324,
      },
      address: "3889 Sanibel Captiva Rd, Sanibel, FL 33957, United States",
    },
    website: "https://rswalsh.com/garden-center",
    contact: {
      email: "inthegarden@rswalsh.com",
      phone: {
        number: "2393955859",
      },
    },
    social: {
      instagram: "rswalsh",
    },
  },
  {
    name: "Powell Nursery & Landscaping",
    description:
      "We are a family run plant nursery that has been established since 1963. We have approximately 10 acres of a variety trees, plants, and other exotics that grow well in our area. We also have a variety of eco-friendly fertilizers & chemicals needed to care for your plants.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.937036,
        lng: -82.037276,
      },
      address: "6366 Elliott St, Punta Gorda, FL 33950, United States",
    },
    website: "http://www.powellsnursery.com",
    contact: {
      email: "info@powellsnursery.com",
      phone: {
        number: "9416392446",
      },
    },
    social: {
      instagram: "powells_nursery_nc",
    },
  },
  {
    name: "Emerald Air Plants",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "your FB, twitter and Instagram linkk in your website take you to wix.",
        "your location links take nowhere. might be interested to add as links the location via Google Maps",
      ],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.924798,
        lng: -82.070045,
      },
      address: "W Marion Ave, Punta Gorda, FL 33950, United States",
    },
    website: null,
    contact: {
      email: "info@emeraldairplants.com",
      phone: {
        number: "2393219527",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "D & B Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "the links to facebook and twitter are wrong. People can't find you",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.028621,
        lng: -82.130521,
      },
      address: "142 Panther Ct, Port Charlotte, FL 33954, United States",
    },
    website: "http://www.dbnursery.com",
    contact: {
      email: null,
      phone: {
        number: "9412767758",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.006247,
        lng: -82.127687,
      },
      address: "2000 Tamiami Trail, Port Charlotte, FL 33948, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "9414211041",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.042038,
        lng: -82.228349,
      },
      address: "5601 Tuscola Blvd, North Port, FL 34287, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "9412572200",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "RoJo's Nursery & Landscape Design",
    description:
      "RoJo’s is a 5 acre Retail Nursery located in Beautiful Englewood, FL. We specialize in Landscape Design & also our abundance of Palm & Plant selections.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.959294,
        lng: -82.330725,
      },
      address: "733 Crestwood Rd, Englewood, FL 34223, United States",
    },
    website: null,
    contact: {
      email: "rojosnursery733@gmail.com",
      phone: {
        number: "9414730070",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gulf Breeze Garden Center",
    description:
      "You'll find everything that you need for your plants and gardens at Gulf Breeze Garden Center. Our knowledgeable and helpful staff are always available to answer your questions about plants, fertiizers, watering, and pruning. Don't hesitate to stop in and see for yourself.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.984637,
        lng: -82.353422,
      },
      address: "1200 N Indiana Ave, Englewood, FL 34223, United States",
    },
    website: "https://gulfbreezegardencenter.com",
    contact: {
      email: null,
      phone: {
        number: "9414749177",
      },
    },
    social: {
      instagram: "gulfbreezegardencenter",
    },
  },
  {
    name: "Michael's Bromeliads, Inc.",
    description:
      "A family owned and operated nursery where quality and reliability are our primary concerns.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["beautiful website!"],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.124849,
        lng: -82.358446,
      },
      address: "973 1st Dirt Rd, Venice, FL 34292, United States",
    },
    website: "http://www.michaelsbromeliads.com",
    contact: {
      email: "mike@michaelsbromeliads.com",
      phone: {
        number: "7274157276",
      },
    },
    social: {
      instagram: "michaelsbromeliads",
    },
  },
  {
    name: "Lowe's Garden Center",
    description:
      "We will provide customer-valued solutions with the best prices, products and services to make Lowe's the first choice for home improvement.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.224617,
        lng: -82.489008,
      },
      address: "4020 Central Sarasota Pkwy, Sarasota, FL 34238, United States",
    },
    website: "https://www.lowes.com",
    contact: {
      email: null,
      phone: {
        number: "9419184000",
      },
    },
    social: {
      instagram: "loweshomeimprovement",
    },
  },
  {
    name: "Beneva Flowers & Plantscapes",
    description:
      "Spacious floral shop brimming with gifts, from bouquets & plants to stuffed animals & wine.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.254869,
        lng: -82.49822,
      },
      address: "6980 S Beneva Rd, Sarasota, FL 34238, United States",
    },
    website: "https://www.beneva.com",
    contact: {
      email: "store@beneva.com",
      phone: {
        number: "9419237401",
      },
    },
    social: {
      instagram: "benevaflowers",
    },
  },
  {
    name: "Troy's Tropics Inc.",
    description:
      "We are a 5 acre family owned plant nursery and garden shop in Sarasota, Florida. We are open 7 days a week and offer landscaping services.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.283886,
        lng: -82.466353,
      },
      address: "5224 Proctor Rd, Sarasota, FL 34233, United States",
    },
    website: "http://troystropics.com",
    contact: {
      email: "nursery@troystropics.com",
      phone: {
        number: "9419233756",
      },
    },
    social: {
      instagram: "troystropics",
    },
  },
  {
    name: "Albritton's Nursery",
    description:
      "We've been growing quality plants locally for over 30 years. We are proud to grow all of our annuals and many of our landscape plants. Because of this, you can be assured your plants have received the ultimate in care!",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.274824,
        lng: -82.486342,
      },
      address: "4151 Proctor Rd, Sarasota, FL 34233, United States",
    },
    website: "https://www.albrittonsnursery.com",
    contact: {
      email: "info@albrittonsnursery.com",
      phone: {
        number: "9419250344",
      },
    },
    social: {
      instagram: "albrittonsnursery",
    },
  },
  {
    name: "Your Farm & Garden",
    description:
      "A family owned garden center .We are dedicated to help make your outdoor oasis. As a family owned business, we're dedicated to providing the personal service and expertise that's often missing in our big-box world.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.329501,
        lng: -82.496848,
      },
      address: "735 S Beneva Rd, Sarasota, FL 34232, United States",
    },
    website: "https://yourfarmandgarden.com",
    contact: {
      email: null,
      phone: {
        number: "9413664954",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Tropiflora",
    description:
      "Family-owned business specializing in exotic/rare Tillansdias, Bromeliads, Succulents and other plant oddities! 🌱",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.401767,
        lng: -82.518694,
      },
      address: "3530 Tallevast Rd, Sarasota, FL 34243, United States",
    },
    website: "https://tropiflora.com",
    contact: {
      email: "dennis@tropiflora.com",
      phone: {
        number: "8006137520",
      },
    },
    social: {
      instagram: "tropiflora",
    },
  },
  {
    name: "Mariposa Nursery Inc.",
    description:
      "Apart from offering a huge variety of plants, we offer free weekly educational gardening classes, events for children, consultation and installation services, as well as a variety of specialty services.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.451353,
        lng: -82.396417,
      },
      address: "5020 Lorraine Rd #5301, Bradenton, FL 34211, United States",
    },
    website: "https://mariposanursery.com",
    contact: {
      email: "info@mariposanursery.com",
      phone: {
        number: "9417470499",
      },
    },
    social: {
      instagram: "https://www.facebook.com/MariposaNursery",
    },
  },
  {
    name: "Wagon Wheel Plants",
    description:
      "We have high quality outdoor plants and florist. We specialize in organic products.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["I added your website to google maps"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.57163,
        lng: -82.475462,
      },
      address: "8855 Erie Rd, Parrish, FL 34219, United States",
    },
    website: "http://wagonwheelinc.com",
    contact: {
      email: "alexgwagonwheel@gmail.com",
      phone: {
        number: "9417762220",
      },
    },
    social: {
      instagram: "wagonwheelfarmstand",
    },
  },
  {
    name: "Green Door Nursery",
    description:
      "We pride ourselves in having amazing high quality rare and unusual plant material and pottery for every style garden and gardener.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.1191008,
        lng: -81.7708258,
      },
      address: "3700 Bayshore Dr, Naples, FL 34112, United States",
    },
    website: "http://www.greendoornursery.com",
    contact: {
      email: "greendoornaples@aol.com",
      phone: {
        number: "2394034736",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Top Tropicals Garden Center",
    description:
      "Sizable outdoor garden center offering an array of rare & tropical plants, including fruit trees.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.6755263,
        lng: -81.7288186,
      },
      address: "13890 Orange River Blvd, Fort Myers, FL 33905, United States",
    },
    website: "https://toptropicals.com",
    contact: {
      email: "info@toptripicals.com",
      phone: {
        number: "2396895745",
      },
    },
    social: {
      instagram: "TopTropicals",
    },
  },
  {
    name: "Green Side Up Garden & Gifts",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 34.9639408,
        lng: -78.8444192,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Gulley's Garden Center Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.170736,
        lng: -79.396214,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Excelsa Gardens Nursery",
    description:
      "30 acres of unique and rare tropicals🌸. Local and nation wide🚛",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.7144697,
        lng: -80.246748,
      },
      address: "12839 25th St N, Loxahatchee, FL 33470, United States",
    },
    website: "http://www.excelsagardens.com",
    contact: {
      email: null,
      phone: {
        number: "5617903789",
      },
    },
    social: {
      instagram: "excelsagardens",
    },
  },
  {
    name: "First Orchid",
    description:
      "Since 1995, our family has orchid businesses in South Korea. Three years later we opened our second nursery in Taiwan, where today is our research center. After the success our both nurseries we decided to open our last facility in Florida",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 28.7144458,
        lng: -81.5559071,
      },
      address: "2107 Plymouth Sorrento Rd, Apopka, FL 32712, United States",
    },
    website: "https://firstorchidnursery.com",
    contact: {
      email: "firstorchid@outlook.com",
      phone: {
        number: "4078149394",
      },
    },
    social: {
      instagram: "firstorchid",
    },
  },
  {
    name: "Golden Gate Nursery & Sod",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.257102,
        lng: -81.689742,
      },
      address: "14765 Collier Blvd, Naples, FL 34119, United States",
    },
    website: "http://www.goldengatenursery.com",
    contact: {
      email: "info@goldengatenursery.com",
      phone: {
        number: "2394557233",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Greendale Nursery Inc",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.5041946,
        lng: -80.4781491,
      },
      address: "28300 SW 177th Ave, Homestead, FL 33033, United States",
    },
    website: "http://greendalenursery.com",
    contact: {
      email: "sales@greendalenursery.com",
      phone: {
        number: "8007717071",
      },
    },
    social: {
      instagram: "greendalenursery",
    },
  },
  {
    name: "Plant Creations",
    description:
      "Nursery with a range of plants, trees & shrubs for the general public & pros. Call for appointments.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [
        "beautiful website",
        "the link from your website to your facebook account is broken",
      ],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.5037045,
        lng: -80.4685057,
      },
      address: "28301 SW 172nd Ave, Homestead, FL 33030, United States",
    },
    website: "http://www.plantcreations.com",
    contact: {
      email: "natives@plantcreations.com",
      phone: {
        number: "3052488147",
      },
    },
    social: {
      instagram: "plant.creations",
    },
  },
  {
    name: "Summer Day Garden Nursery , LLC",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 25.8801648,
        lng: -80.1673545,
      },
      address: "11338 Biscayne Blvd, Miami, FL 33181, United States",
    },
    website: "https://summer-day-garden-nursery-llc.business.site",
    contact: {
      email: null,
      phone: {
        number: "3054507661",
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "Pinder's Nursery",
    description: null,
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: ["there's no email in your website!"],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.1605615,
        lng: -80.3281491,
      },
      address: "5500 SW Martin Hwy, Palm City, FL 34990, United States",
    },
    website: "http://www.pindersnursery.com",
    contact: {
      email: "info@pindersnursery.com",
      phone: {
        number: "7727818085",
      },
    },
    social: {
      instagram: "pindersnursery",
    },
  },
  {
    name: "Blooming Freedom Inc",
    description:
      "Unique arrangement & landscape designs ~ Specializing in orchids, bromeliads & succulents.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 27.156266,
        lng: -80.305563,
      },
      address: "3993 SW Leighton Farm Ave, Palm City, FL 34990, United States",
    },
    website: "http://www.bloomingfreedom.com",
    contact: {
      email: "info@bloomingfreedom.com",
      phone: {
        number: "7726265333",
      },
    },
    social: {
      instagram: "bloomingfreedom",
    },
  },
  {
    name: "Amelia's SmartyPlants",
    description:
      "8 years later, we have managed to fill every nook and cranny with many interesting garden décor items as well as unique plants, pots, + more.",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 26.6339919,
        lng: -80.057574,
      },
      address: "1515 N Dixie Hwy, Lake Worth, FL 33460, United States",
    },
    website: "http://www.amelias-smartyplants.com",
    contact: {
      email: "smartyplantslw@gmail.com",
      phone: {
        number: "5615406296",
      },
    },
    social: {
      instagram: "amelias_smartyplants",
    },
  },
  {
    name: "Grateful Maple Nursery",
    description: "Specializing in Japanese maple and conifers",
    meta: {
      hasAlreadyContacted: false,
      isPendingToContact: false,
      notes: [],
      isSellingPlantsOnline: false,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 35.6109813,
        lng: -78.6590753,
      },
      address: null,
    },
    website: null,
    contact: {
      email: null,
      phone: {
        number: null,
      },
    },
    social: {
      instagram: null,
    },
  },
  {
    name: "POTPLANT STUDIO",
    description: "🌵 Indoor Plant Store for New Zealand",
    meta: {
      hasAlreadyContacted: true,
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.newZealand.name,
        iso: countries.newZealand.iso,
        countryCode: countries.newZealand.countryCode,
      },
      coordinates: null,
      address: null,
    },
    website: "https://www.potplantstudio.co.nz/",
    contact: {
      email: null,
      phone: {
        number: "276539605",
      },
    },
    social: {
      instagram: "potplant_studio",
    },
  },
  {
    name: "Enchanted Forest",
    description:
      "Hidden away beneath beautiful Texas native trees, the Enchanted Forest is a retail garden center that shares its site with Enchanted Landscapes. With an established loyal customer base, this location provides a quiet getaway to satisfy your gardening needs. It is located in Richmond near Sugar Land and Houston, right off of HWY 59. ",
    meta: {
      hasAlreadyContacted: false,
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.usa.name,
        iso: countries.usa.iso,
        countryCode: countries.usa.countryCode,
      },
      coordinates: {
        lat: 29.525852,
        lng: -95.640395,
      },
      address: "10611 FM 2759 Rd, Richmond, TX 77469, United States",
    },
    website: "https://www.myenchanted.com/",
    contact: {
      email: "forest@myenchanted.com",
      phone: {
        number: "2819379449",
      },
    },
    social: {
      instagram: "enchanted_forest_richmond",
    },
  },
  {
    name: "DancingAirplants!",
    description: null,
    meta: {
      hasAlreadyContacted: true,
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.spain.name,
        iso: countries.spain.iso,
        countryCode: countries.spain.countryCode,
      },
      coordinates: null,
      address: null,
    },
    website: "www.dancingairplants.com",
    contact: {
      email: null,
      phone: {
        number: "699148464",
      },
    },
    social: {
      instagram: "dancing.airplants",
    },
  },
  {
    name: "The Jungle Club",
    description:
      "We sell indoor plants, pots and terrariums. Our plants range from tropical to cacti, ornamental to easy care, small to big suitable for your home or in the workplace.",
    meta: {
      hasAlreadyContacted: true,
      isPendingToContact: true,
      notes: [],
      isSellingPlantsOnline: true,
    },
    location: {
      country: {
        name: countries.england.name,
        iso: countries.england.iso,
        countryCode: countries.england.countryCode,
      },
      coordinates: {
        lat: 52.201405,
        lng: -2.225505,
      },
      address: "7 Barbourne Road, Worcester, WR1 1RS, UK",
    },
    website: "https://www.thejungleclubworcester.co.uk",
    contact: {
      email: "thejungleclubworcester@gmail.com",
      phone: {
        number: "0190524714",
      },
    },
    social: {
      instagram: "thejungleclubworcester",
    },
  },
];

module.exports = { shops };

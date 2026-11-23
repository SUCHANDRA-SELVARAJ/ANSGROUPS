/**
 * ANS GROUPS - Central Business Configuration
 * Self Drive Car Rental Business
 * Exact fleet details and rates updated from official ANS GROUPS booking sheet
 */

export const BUSINESS_CONFIG = {
  name: "ANS GROUP CAR RENTAL PVT LMTD",
  fullName: "ANS GROUP CAR RENTAL PVT LMTD",
  shortName: "ANS GROUP",
  tagline: "Self Drive Car Rental. Premium Cars, Best Rates.",
  shortDescription: "Welcome to ANS GROUP CAR RENTAL PVT LMTD. Whether it is a quick city run, a family outstation trip, or a rugged highway drive, choose from our verified fleet. Every rate is listed upfront per day with 200 km included.",
  logoUrl: "./images/logo.png",
  
  // Official Phone Numbers
  contacts: {
    primary: {
      raw: "8111015298",
      formatted: "81110 15298",
      tel: "tel:+918111015298",
      whatsapp: "https://wa.me/918111015298"
    },
    secondary: {
      raw: "9944052203",
      formatted: "99440 52203",
      tel: "tel:+919944052203",
      whatsapp: "https://wa.me/919944052203"
    }
  },

  // WhatsApp helper
  getWhatsAppLink: (customMessage = "") => {
    const text = customMessage || "Hello ANS GROUP CAR RENTAL PVT LMTD, I would like to check car availability.";
    return `https://wa.me/918111015298?text=${encodeURIComponent(text)}`;
  },

  location: {
    title: "Office Location",
    display: "Location details to be updated shortly.",
    subtext: "Vehicle pickup & drop points will be communicated upon booking confirmation.",
    address: "Location details to be provided"
  },

  email: {
    display: "To be added later.",
    subtext: "Please connect directly via our phone lines or WhatsApp for instant bookings."
  },

  rentalRules: {
    minBooking: "Minimum Booking 24 Hours.",
    documents: "Aadhaar And Driving Licence Are Compulsory To Confirm A Booking.",
    kmLimit: "200km/Day included in every rate.",
    fuel: "Fuel Not Included (Return at same level).",
    speedLimit: "City 60 km/h, Highway 90 km/h.",
    extra5Seater: "5-Seater: Extra Hours ₹200/hr | Extra Km ₹10/km",
    extra7Seater: "7-Seater: Extra Hours ₹400/hr | Extra Km ₹12 - ₹15/km"
  },

  // Full Fleet with official rates from ANS GROUPS Sheet
  cars: [
    // ==========================================
    // 7 SEATER FLEET (from official price sheet)
    // ==========================================
    {
      id: "xuv-700",
      name: "Mahindra XUV 700",
      rent: 7000,
      extraHour: 400,
      extraKm: 15,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater", "SUV"],
      seats: "7 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: "./images/cars/xuv-700.jpg"
    },
    {
      id: "innova-crysta",
      name: "Toyota Innova Crysta",
      rent: 4500,
      extraHour: 400,
      extraKm: 15,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater", "SUV"],
      seats: "7 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: "./images/cars/innova-crysta-ans.jpg"
    },
    {
      id: "tata-hexa",
      name: "Tata Hexa",
      rent: 4500,
      extraHour: 400,
      extraKm: 15,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater", "SUV"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "innova",
      name: "Toyota Innova",
      rent: 4000,
      extraHour: 400,
      extraKm: 15,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "kia-carens",
      name: "Kia Carens",
      rent: 4000,
      extraHour: 400,
      extraKm: 15,
      fuel: "Diesel / Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater", "SUV"],
      seats: "7 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: "./images/cars/carens.jpg"
    },
    {
      id: "ertiga",
      name: "Maruti Ertiga",
      rent: 3500,
      extraHour: 400,
      extraKm: 12,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/maruti-ertiga.jpg"
    },
    {
      id: "rumion",
      name: "Toyota Rumion",
      rent: 3500,
      extraHour: 400,
      extraKm: 12,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "xl6",
      name: "Maruti XL6",
      rent: 3500,
      extraHour: 400,
      extraKm: 12,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater"],
      seats: "6/7 Seater",
      transmission: "Manual / AT",
      popular: false,
      image: null
    },
    {
      id: "renault-triber",
      name: "Renault Triber",
      rent: 3000,
      extraHour: 400,
      extraKm: 12,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/triber.jpg"
    },
    {
      id: "mahindra-bolero",
      name: "Mahindra Bolero",
      rent: 3000,
      extraHour: 400,
      extraKm: 12,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["7 Seater", "SUV"],
      seats: "7 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/bolero.jpg"
    },

    // ==================================================
    // 5 SEATER AUTOMATIC FLEET (from official price sheet)
    // ==================================================
    {
      id: "creta-at",
      name: "Hyundai Creta (Automatic)",
      rent: 4000,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel / Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "SUV"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: null
    },
    {
      id: "hyundai-aura-at",
      name: "Hyundai Aura (Automatic)",
      rent: 3000,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Sedan"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/hyundai-aura.jpg"
    },
    {
      id: "baleno-at",
      name: "Maruti Baleno (Automatic)",
      rent: 2800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Hatchback"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/maruti-baleno.jpg"
    },
    {
      id: "glanza-at",
      name: "Toyota Glanza (Automatic)",
      rent: 2800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Hatchback"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: false,
      image: null
    },
    {
      id: "fronx-at",
      name: "Maruti Fronx (Automatic)",
      rent: 2800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "SUV"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/fronx.jpg"
    },
    {
      id: "swift-dzire-at",
      name: "Swift Dzire (Automatic)",
      rent: 2800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Sedan"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: null
    },
    {
      id: "swift-at",
      name: "Maruti Swift (Automatic)",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Hatchback"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/swift.jpg"
    },
    {
      id: "hyundai-santro-at",
      name: "Hyundai Santro (Automatic)",
      rent: 2200,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Hatchback"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: false,
      image: "./images/cars/hyundai-santro.jpg"
    },
    {
      id: "alto-k10-at",
      name: "Maruti Alto K10 (Automatic)",
      rent: 1800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Hatchback"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/maruti-alto-k10.jpg"
    },

    // ==========================================
    // 5 SEATER FLEET (from official price sheet)
    // ==========================================
    {
      id: "audi-a6",
      name: "Audi A6 (Automatic)",
      rent: 8000,
      extraHour: 200,
      extraKm: 15,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "5 Seater Automatic", "Sedan", "Luxury"],
      seats: "5 Seater",
      transmission: "Automatic",
      popular: true,
      image: "./images/cars/audi-a6-ans.jpg"
    },
    {
      id: "thar-4x4",
      name: "Mahindra Thar 4x4",
      rent: 4500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "4 Seater",
      transmission: "Manual / 4x4",
      popular: true,
      image: "./images/cars/thar.jpg"
    },
    {
      id: "honda-city",
      name: "Honda City",
      rent: 3500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Sedan"],
      seats: "5 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: "./images/cars/city.jpg"
    },
    {
      id: "kia-seltos",
      name: "Kia Seltos",
      rent: 3500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel / Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: null
    },
    {
      id: "venue",
      name: "Hyundai Venue",
      rent: 3500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: null
    },
    {
      id: "xuv-300",
      name: "Mahindra XUV 300",
      rent: 3500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel / Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "honda-amaze",
      name: "Honda Amaze",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol / Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Sedan"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/honda-amaze.jpg"
    },
    {
      id: "baleno",
      name: "Maruti Baleno",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/maruti-baleno.jpg"
    },
    {
      id: "elite-i20",
      name: "Hyundai i20",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol / Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/i20.jpg"
    },
    {
      id: "hyundai-exter",
      name: "Hyundai Exter",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual / AT",
      popular: true,
      image: "./images/cars/hyundai-exter.jpg"
    },
    {
      id: "swift-dzire",
      name: "Swift Dzire",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Sedan"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: null
    },
    {
      id: "glanza",
      name: "Toyota Glanza",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "honda-wrv",
      name: "Honda WR-V",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel / Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "ecosport",
      name: "Ford EcoSport",
      rent: 2500,
      extraHour: 200,
      extraKm: 10,
      fuel: "Diesel",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "SUV"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "swift-manual",
      name: "Maruti Swift",
      rent: 2300,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/swift.jpg"
    },
    {
      id: "tata-tiago",
      name: "Tata Tiago",
      rent: 2200,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/tata-tiago.jpg"
    },
    {
      id: "celerio",
      name: "Maruti Celerio",
      rent: 1800,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: false,
      image: null
    },
    {
      id: "alto-k10-manual",
      name: "Maruti Alto K10 (Manual)",
      rent: 1600,
      extraHour: 200,
      extraKm: 10,
      fuel: "Petrol",
      speed: "City 60 km/h, Highway 90 km/h",
      categories: ["5 Seater", "Hatchback"],
      seats: "5 Seater",
      transmission: "Manual",
      popular: true,
      image: "./images/cars/maruti-alto-k10.jpg"
    }
  ],

  categories: [
    "All",
    "5 Seater",
    "5 Seater Automatic",
    "7 Seater",
    "SUV",
    "Sedan",
    "Hatchback",
    "Luxury"
  ],

  services: [
    {
      id: "self-drive",
      title: "Self Drive Car Rental",
      desc: "Drive on your own terms. Well-maintained cars with upfront daily rates and 200 km/day included.",
      tag: "Self Drive"
    },
    {
      id: "family-trips",
      title: "Family Trips & 7 Seaters",
      desc: "Spacious Ertiga, Carens, Triber, and Innova Crysta rentals for comfortable group and family road trips.",
      tag: "7 Seater"
    },
    {
      id: "automatic-cars",
      title: "5-Seater Automatic Cars",
      desc: "Effortless city and highway driving with automatic Fronx, Hyundai Aura, Alto K10, and Santro AT.",
      tag: "Automatic"
    },
    {
      id: "suv-rentals",
      title: "SUV & 4x4 Adventures",
      desc: "Thar 4x4, Carens, Seltos, and Venue with high ground clearance for memorable weekend getaways.",
      tag: "SUV & 4x4"
    }
  ]
};

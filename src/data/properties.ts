import type { Property } from "../types/property";

export const properties: Property[] = [
  // =====================================================
  // PITALITO
  // =====================================================

  {
    id: 1,

    title: {
      es: "Hotel Colonial Andino",
      en: "Hotel Colonial Andino",
    },

    description: {
      es: "Hotel ubicado en el centro de Pitalito, en una casa de estilo colonial, con habitaciones confortables y servicios para viajeros que visitan el sur del Huila.",
      en: "Hotel located in downtown Pitalito, in a colonial-style house, offering comfortable rooms and services for travelers visiting southern Huila.",
    },

    location: {
      es: "Pitalito, Huila, Colombia",
      en: "Pitalito, Huila, Colombia",
    },

    address: {
      es: "Calle 5 No. 4-27 Centro",
      en: "Calle 5 No. 4-27 Centro",
    },

    price: 80000,

    priceDescription: {
      es: "Desde $100.000 COP por noche",
      en: "From $100,000 COP per night",
    },

    type: "Hotel",

    contactPhone: "3219180958",
    contactEmail: "hotelcolonialandino@gmail.com",

    image:
      "/images/properties/hotel-colonial-andin/principal.jpg",

    gallery: [
      "/images/properties/hotel-colonial-andin/habitacion-1.jpg",
      "/images/properties/hotel-colonial-andin/habitacion-2.jpg",
      "/images/properties/hotel-colonial-andin/patio.jpg",
      "/images/properties/hotel-colonial-andin/bano.jpg",
    ],

    amenities: [
      { es: "Recepción 24 horas", en: "24-hour reception" },
      { es: "Restaurante", en: "Restaurant" },
      { es: "Lavandería", en: "Laundry" },
      { es: "Wi-Fi", en: "Wi-Fi" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Televisión", en: "TV" },
      { es: "Parqueadero", en: "Parking" },
      { es: "Desayuno", en: "Breakfast" },
      { es: "Agua caliente", en: "Hot water" },
      { es: "Aire acondicionado", en: "Air conditioning" },
      { es: "Ventilador", en: "Fan" },
    ],
  },

  {
    id: 2,

    title: {
      es: "Hotel Gardenia Pitalito",
      en: "Hotel Gardenia Pitalito",
    },

    description: {
      es: "Hotel ubicado en Pitalito con habitaciones sencilla, doble y familiares, recepción 24 horas y servicios orientados al descanso de sus huéspedes.",
      en: "Hotel located in Pitalito with single, double and family rooms, 24-hour reception and services focused on guest comfort.",
    },

    location: {
      es: "Pitalito, Huila, Colombia",
      en: "Pitalito, Huila, Colombia",
    },

    address: {
      es: "Calle 8 No. 2-51",
      en: "Calle 8 No. 2-51",
    },

    price: 90000,

    priceDescription: {
      es: "Desde $90.000 COP por noche",
      en: "From $90,000 COP per night",
    },

    type: "Hotel",

    contactPhone: "3118964124",
    contactEmail: "",

    image:
      "/public/images/properties/hotel-gardenia/principal.webp",

    gallery: [
      "/public/images/properties/hotel-gardenia/habitacion-1.jpg",
      "/public/images/properties/hotel-gardenia/habitacion-2.jpg",
      "/public/images/properties/hotel-gardenia/patio.jpg",
      "/public/images/properties/hotel-gardenia/bano.jpg",
    ],

    amenities: [
      { es: "Recepción 24 horas", en: "24-hour reception" },
      { es: "Cafetería", en: "Cafeteria" },
      { es: "Lavandería", en: "Laundry" },
      { es: "Wi-Fi", en: "Wi-Fi" },
      { es: "Desayuno", en: "Breakfast" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Aire acondicionado", en: "Air conditioning" },
      { es: "Televisión", en: "TV" },
    ],
  },

  // =====================================================
  // SAN AGUSTÍN
  // =====================================================

  {
    id: 3,

    title: {
      es: "Hotel Yalconia",
      en: "Hotel Yalconia",
    },

    description: {
      es: "Hotel ubicado en la vía al Parque Arqueológico de San Agustín, con amplias zonas naturales, jardines y diferentes tipos de habitaciones.",
      en: "Hotel located on the road to the San Agustín Archaeological Park, featuring extensive natural areas, gardens and different types of rooms.",
    },

    location: {
      es: "San Agustín, Huila, Colombia",
      en: "San Agustín, Huila, Colombia",
    },

    address: {
      es: "Vía Parque Arqueológico",
      en: "Archaeological Park Road",
    },

    type: "Hotel",

    contactPhone: "3118227663",
    contactEmail: "recepcionhotelyalconia@gmail.com",

    image:
      "/public/images/properties/hotel-yalconia/principlal.webp",

    gallery: [
      "/public/images/properties/hotel-yalconia/habitacion-1.webp",
      "/public/images/properties/hotel-yalconia/habitacion-2.webp",
      "/public/images/properties/hotel-yalconia/patio.webp",
      "/public/images/properties/hotel-yalconia/bano.jpg",
    ],

    rooms: 39,

    amenities: [
      { es: "Piscina", en: "Swimming pool" },
      { es: "Recepción 24 horas", en: "24-hour reception" },
      { es: "Restaurante", en: "Restaurant" },
      { es: "Cafetería", en: "Cafeteria" },
      { es: "Servicio de habitaciones", en: "Room service" },
      { es: "Lavandería", en: "Laundry" },
      { es: "Wi-Fi", en: "Wi-Fi" },
      { es: "Parqueadero", en: "Parking" },
      { es: "Cámaras de seguridad", en: "Security cameras" },
      { es: "Centro de negocios", en: "Business center" },
      { es: "Salones de reunión", en: "Meeting rooms" },
      { es: "Zona de juegos infantil", en: "Children's play area" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Agua caliente", en: "Hot water" },
    ],
  },

  {
    id: 4,

    title: {
      es: "Hotel Monasterio San Agustín",
      en: "Hotel Monasterio San Agustín",
    },

    description: {
      es: "Hotel de arquitectura colonial ubicado en San Agustín, rodeado de montañas y con espacios para alojamiento, gastronomía, eventos y descanso.",
      en: "Colonial-style hotel located in San Agustín, surrounded by mountains and offering spaces for accommodation, dining, events and relaxation.",
    },

    location: {
      es: "San Agustín, Huila, Colombia",
      en: "San Agustín, Huila, Colombia",
    },

    address: {
      es: "Vereda La Cuchilla",
      en: "La Cuchilla Rural Area",
    },

    price: 372000,

    priceDescription: {
      es: "Desde $372.000 COP por noche",
      en: "From $372,000 COP per night",
    },

    type: "Hotel",

    contactPhone: "3162717967",
    contactEmail: "recepcionmonasteriosanagustin@gmail.com",

    image:
      "/public/images/properties/hotel-monasterio/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-monasterio/habitacion-1.jpg",
      "/public/images/properties/hotel-monasterio/habitacion-2.jpg",
      "/public/images/properties/hotel-monasterio/patio.jpg",
      "/public/images/properties/hotel-monasterio/bano.jpg",
    ],

    rooms: 15,

    amenities: [
      { es: "Recepción 24 horas", en: "24-hour reception" },
      { es: "Restaurante", en: "Restaurant" },
      { es: "Lavandería", en: "Laundry" },
      { es: "Wi-Fi", en: "Wi-Fi" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Agua caliente", en: "Hot water" },
      { es: "Salones de reunión", en: "Meeting rooms" },
      { es: "Ayudas audiovisuales", en: "Audiovisual equipment" },
    ],
  },

  // =====================================================
  // VILLAVIEJA
  // =====================================================

  {
    id: 5,

    title: {
      es: "Hotel Sol del Desierto",
      en: "Hotel Sol del Desierto",
    },

    description: {
      es: "Alojamiento ubicado en Villavieja, en la zona de acceso al Desierto de la Tatacoa, pensado para visitantes que recorren este destino turístico.",
      en: "Accommodation located in Villavieja, near the access area to the Tatacoa Desert, designed for visitors exploring this tourist destination.",
    },

    location: {
      es: "Villavieja, Huila, Colombia",
      en: "Villavieja, Huila, Colombia",
    },

    address: {
      es: "Villavieja, Huila",
      en: "Villavieja, Huila",
    },

    type: "Hotel",

    contactPhone: "3144004122",

    image:
      "/public/images/properties/hotel-sol/principal.webp",

    gallery: [
      "/public/images/properties/hotel-sol/habitacion-1.webp",
      "/public/images/properties/hotel-sol/habitacion-2.webp",
      "/public/images/properties/hotel-sol/patio.jpg",
      "/public/images/properties/hotel-sol/bano.webp",
    ],

    amenities: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Wi-Fi", en: "Wi-Fi" },
    ],
  },

  {
    id: 6,

    title: {
      es: "Hotel Sueño Real Tatacoa",
      en: "Hotel Sueño Real Tatacoa",
    },

    description: {
      es: "Hotel ubicado en la vía hacia el Desierto de la Tatacoa, una alternativa de alojamiento para viajeros que visitan Villavieja y sus atractivos naturales.",
      en: "Hotel located on the road to the Tatacoa Desert, an accommodation option for travelers visiting Villavieja and its natural attractions.",
    },

    location: {
      es: "Villavieja, Huila, Colombia",
      en: "Villavieja, Huila, Colombia",
    },

    address: {
    es: "Km 1 vía al Desierto de la Tatacoa, vereda El Cuzco",
    en: "Km 1, road to the Tatacoa Desert, El Cuzco rural area",
},

    type: "Hotel",

    contactPhone: "3202634216",

    image:
      "/public/images/properties/hotel-tatacoa/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-tatacoa/habitacion-2.jpg",
      "/public/images/properties/hotel-tatacoa/habitacion-1.jpg",
      "/public/images/properties/hotel-tatacoa/patio.jpg",
      "/public/images/properties/hotel-tatacoa/bano.jpg",
    ],

    amenities: [
  { es: "Piscina", en: "Swimming pool" },
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Cámaras de seguridad", en: "Security cameras" },
  { es: "Desayuno", en: "Breakfast" },
  { es: "Desayuno en la habitación", en: "Breakfast in the room" },
  { es: "Información turística", en: "Tourist information" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Televisión", en: "TV" },
],
  },

  // =====================================================
  // GARZÓN
  // =====================================================

  {
    id: 7,

    title: {
      es: "Hotel Kahvé",
      en: "Hotel Kahvé",
    },

    description: {
      es: "Hotel ubicado en el centro de Garzón, una opción de alojamiento para viajeros que visitan el municipio y recorren el centro del Huila.",
      en: "Hotel located in downtown Garzón, an accommodation option for travelers visiting the municipality and exploring central Huila.",
    },

    location: {
      es: "Garzón, Huila, Colombia",
      en: "Garzón, Huila, Colombia",
    },

    address: {
      es: "Calle 10A #3-38",
      en: "Calle 10A #3-38",
    },

    type: "Hotel",

    contactPhone: "3204307836",

    image:
      "/public/images/properties/hotel-kahve/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-kahve/habitacion-1.jpg",
      "/public/images/properties/hotel-kahve/habitacion-2.jpg",
      "/public/images/properties/hotel-kahve/patio.jpg",
      "/public/images/properties/hotel-kahve/bano.jpg",
    ],

    rooms: 18,

    amenities: [
  { es: "Restaurante", en: "Restaurant" },
  { es: "Bar", en: "Bar" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Servicio de lavandería", en: "Laundry service" },
],
  },

  {
    id: 8,

    title: {
      es: "Hotel Paris Mirador",
      en: "Hotel Paris Mirador",
    },

    description: {
      es: "Hotel ubicado en el centro de Garzón, con alojamiento para visitantes que desean conocer el municipio y sus alrededores.",
      en: "Hotel located in downtown Garzón, offering accommodation for visitors who want to explore the municipality and its surroundings.",
    },

    location: {
      es: "Garzón, Huila, Colombia",
      en: "Garzón, Huila, Colombia",
    },

    address: {
      es: "Calle 4 #11-64, Centro",
      en: "Calle 4 #11-64, Downtown",
    },

    type: "Hotel",

    contactPhone: "3134240040",

    image:
      "/public/images/properties/hotel-paris/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-paris/habitacion-1.jpg",
      "/public/images/properties/hotel-paris/habitacion-2.jpg",
      "/public/images/properties/hotel-paris/patio.jpg",
      "/public/images/properties/hotel-paris/bano.jpg",
    ],

    amenities: [
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Servicio de habitaciones", en: "Room service" },
  { es: "Lavandería", en: "Laundry service" },
  { es: "Spa", en: "Spa" },
],
  },

  // =====================================================
  // NEIVA
  // =====================================================

  {
    id: 9,

    title: {
      es: "GHL Style Hotel Neiva",
      en: "GHL Style Hotel Neiva",
    },

    description: {
      es: "Hotel ubicado dentro del Centro Comercial San Pedro Plaza, en Neiva, con una ubicación estratégica para viajeros de negocios y turismo.",
      en: "Hotel located inside San Pedro Plaza Shopping Center in Neiva, with a strategic location for business and leisure travelers.",
    },

    location: {
      es: "Neiva, Huila, Colombia",
      en: "Neiva, Huila, Colombia",
    },

    address: {
      es: "Carrera 16 No. 42-195, Centro Comercial San Pedro Plaza",
      en: "Carrera 16 No. 42-195, San Pedro Plaza Shopping Center",
    },

    type: "Hotel",

    contactPhone: "3162293484",
    contactEmail: "reservas.neiva@ghlhoteles.com",

    image:
      "/public/images/properties/hotel-ghl/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-ghl/habitacion-1.jpg",
      "/public/images/properties/hotel-ghl/habitacion-2.jpg",
      "/public/images/properties/hotel-ghl/patio.jpg",
      "/public/images/properties/hotel-ghl/bano.jpg",
    ],

    rooms: 102,

    amenities: [
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Room service", en: "Room service" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Cámaras de seguridad", en: "Security cameras" },
  { es: "Desayuno en la habitación", en: "Breakfast in the room" },
  { es: "Información turística", en: "Tourist information" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Cafetería", en: "Cafeteria" },
  { es: "Lavandería", en: "Laundry service" },
],
  },

  {
    id: 10,

    title: {
      es: "Hotel Neiva Plaza",
      en: "Hotel Neiva Plaza",
    },

    description: {
      es: "Hotel ubicado en el centro de Neiva, una de las opciones tradicionales de alojamiento para visitantes de la capital del Huila.",
      en: "Hotel located in downtown Neiva, one of the traditional accommodation options for visitors to the capital of Huila.",
    },

    location: {
      es: "Neiva, Huila, Colombia",
      en: "Neiva, Huila, Colombia",
    },

    address: {
      es: "Calle 7 #4-62",
      en: "Calle 7 #4-62",
    },

    type: "Hotel",

    contactPhone: "3160101770",

    image:
      "/public/images/properties/hotel-plaza/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-plaza/habitacion-1.jpg",
      "/public/images/properties/hotel-plaza/habitacion-2.jpg",
      "/public/images/properties/hotel-plaza/patio.jpg",
      "/public/images/properties/hotel-plaza/bano.jpg",
    ],

    rooms: 87,

    amenities: [
  { es: "Piscina", en: "Swimming pool" },
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Lavandería", en: "Laundry service" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Cámaras de seguridad", en: "Security cameras" },
  { es: "Salones de reunión", en: "Meeting rooms" },
  { es: "Spa", en: "Spa" },
  { es: "Desayuno", en: "Breakfast" },
  { es: "Caja fuerte", en: "Safe" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Agua caliente", en: "Hot water" },
  { es: "Aire acondicionado", en: "Air conditioning" },
],
  },

  {
    id: 11,

    title: {
      es: "Hotel Chicalá",
      en: "Hotel Chicalá",
    },

    description: {
      es: "Hotel ubicado en el centro de Neiva, con habitaciones estándar, plus, junior suite y suite, además de servicios para viajeros y eventos.",
      en: "Hotel located in downtown Neiva, with standard, plus, junior suite and suite rooms, as well as services for travelers and events.",
    },

    location: {
      es: "Neiva, Huila, Colombia",
      en: "Neiva, Huila, Colombia",
    },

    address: {
      es: "Calle 6 No. 2-57",
      en: "Calle 6 No. 2-57",
    },

    type: "Hotel",

    contactPhone: "3112289360",

    image:
      "/public/images/properties/hotel-chicala/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-chicala/habitacion-1.jpg",
      "/public/images/properties/hotel-chicala/habitacion-2.jpg",
      "/public/images/properties/hotel-chicala/patio.jpg",
      "/public/images/properties/hotel-chicala/bano.jpg",
    ],

    rooms: 73,

    amenities: [
  { es: "Piscina", en: "Swimming pool" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Bar", en: "Bar" },
],
  },

  {
    id: 12,

    title: {
      es: "Hotel Boutique La Cabrera",
      en: "Hotel Boutique La Cabrera",
    },

    description: {
      es: "Hotel boutique ubicado en Neiva, orientado a viajeros que buscan alojamiento en una zona urbana de la capital del Huila.",
      en: "Boutique hotel located in Neiva, designed for travelers looking for accommodation in an urban area of the capital of Huila.",
    },

    location: {
      es: "Neiva, Huila, Colombia",
      en: "Neiva, Huila, Colombia",
    },

    address: {
      es: "Calle 15 #5-61",
      en: "Calle 15 #5-61",
    },

    type: "Hotel",

    contactPhone: "3176413057",

    contactEmail: "reservas@lacabrera.co",

    image:
      "/public/images/properties/hotel-cabrera/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-cabrera/habitacion-1.jpg",
      "/public/images/properties/hotel-cabrera/habitacion-2.jpg",
      "/public/images/properties/hotel-cabrera/patio.jpg",
      "/public/images/properties/hotel-cabrera/bano.jpg",
    ],

    rooms: 21,

    capacity: 24,

    amenities: [
  { es: "Restaurante", en: "Restaurant" },
  { es: "Desayuno", en: "Breakfast" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Caja fuerte", en: "Safe" },
  { es: "Sala de reuniones", en: "Meeting room" },
  { es: "Transporte al aeropuerto", en: "Airport transportation" },
  { es: "Recepción", en: "Reception" },
],
  },

  // =====================================================
  // ISNOS
  // =====================================================

  {
    id: 13,

    title: {
      es: "Hotel Las Piedras San Jose",
      en: "Hotel Las Piedras San Jose",
    },

    description: {
      es: "Hotel ubicado en Isnos, cerca de los atractivos naturales del sur del Huila y de los recorridos turísticos de la zona.",
      en: "Hotel located in Isnos, near the natural attractions of southern Huila and the area's tourist routes.",
    },

    location: {
      es: "Isnos, Huila, Colombia",
      en: "Isnos, Huila, Colombia",
    },

    address: {
      es: "Carrera 3A #2-06",
      en: "Carrera 3A #2-06",
    },

    type: "Hotel",

    contactPhone: "3158030725",

    image:
      "/public/images/properties/hotel-piedras/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-piedras/habitacion-1.jpg",
      "/public/images/properties/hotel-piedras/habitacion-2.jpg",
      "/public/images/properties/hotel-piedras/patio.jpg",
      "/public/images/properties/hotel-piedras/bano.jpg",
    ],

    rooms: 19,

    amenities: [
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Cafetería", en: "Cafeteria" },
  { es: "Servicio de habitaciones", en: "Room service" },
  { es: "Lavandería", en: "Laundry service" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Desayuno", en: "Breakfast" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Televisión", en: "TV" },
],
  },

  {
    id: 14,

    title: {
      es: "Ecohotel Bordones: Utaki Estancia de Bienestar",
      en: "Ecohotel Bordones: Utaki Wellness Stay",
    },

    description: {
      es: "Alojamiento ubicado en la zona del Salto de Bordones, en Isnos, orientado al descanso, la naturaleza y las actividades de bienestar.",
      en: "Accommodation located near Salto de Bordones in Isnos, focused on relaxation, nature and wellness activities.",
    },

    location: {
      es: "Isnos, Huila, Colombia",
      en: "Isnos, Huila, Colombia",
    },

    address: {
      es: "Vía a Salto de Bordones, El Salto de Bordones, Isnos",
      en: "Road to Salto de Bordones, El Salto de Bordones, Isnos",
    },

    type: "Hotel",

    contactPhone: "3138332706",

    image:
      "/public/images/properties/hotel-bordones/principal.jpg",

    gallery: [
      "/public/images/properties/hotel-bordones/habitacion-1.jpg",
      "/public/images/properties/hotel-bordones/habitacion-2.jpg",
      "/public/images/properties/hotel-bordones/patio.jpg",
      "/public/images/properties/hotel-bordones/bano.jpg",
    ],

    amenities: [
  { es: "Parqueadero gratuito", en: "Free parking" },
  { es: "Desayuno gratuito", en: "Free breakfast" },
  { es: "Wi-Fi gratuito", en: "Free Wi-Fi" },
  { es: "Transporte desde y hacia el aeropuerto", en: "Airport shuttle" },
],
  },

  // =====================================================
  // EL PITAL
  // =====================================================

  {
    id: 15,

    title: {
      es: "Hotel Colonial Pitayo",
      en: "Hotel Colonial Pitayo",
    },

    description: {
      es: "Hotel ubicado en el municipio de El Pital, Huila, una alternativa de alojamiento para visitantes que recorren el centro del departamento.",
      en: "Hotel located in the municipality of El Pital, Huila, an accommodation option for visitors exploring central Huila.",
    },

    location: {
      es: "El Pital, Huila, Colombia",
      en: "El Pital, Huila, Colombia",
    },

    address: {
  es: "Calle 6 No. 9-54, El Pital, Huila",
  en: "Calle 6 No. 9-54, El Pital, Huila",
},

    type: "Hotel",

    contactPhone: "3133838544",

    image:
      "/public/images/properties/hotel-pitayo/principal.webp",

    gallery: [
      "/public/images/properties/hotel-pitayo/habitacion-1.webp",
      "/public/images/properties/hotel-pitayo/habitacion-2.webp",
      "/public/images/properties/hotel-pitayo/patio.webp",
      "/public/images/properties/hotel-pitayo/bano.webp",
    ],

    amenities: [
  { es: "Restaurante", en: "Restaurant" },
  { es: "Bar", en: "Bar" },
  { es: "Tienda de café", en: "Coffee shop" },
  { es: "Parqueadero", en: "Parking" },
],
  },

  {
    id: 16,

    title: {
      es: "Hotel Eden De Paz",
      en: "Hotel Eden De Paz",
    },

    description: {
      es: "Hotel ubicado en El Pital, Huila, que ofrece alojamiento para visitantes y viajeros que recorren el municipio.",
      en: "Hotel located in El Pital, Huila, offering accommodation for visitors and travelers exploring the municipality.",
    },

    location: {
      es: "El Pital, Huila, Colombia",
      en: "El Pital, Huila, Colombia",
    },

    address: {
  es: "Carrera 12 No. 6-71",
  en: "Carrera 12 No. 6-71",
},

    type: "Hotel",

    contactPhone: "3105508591",

    image:
      "/public/images/properties/hotel-eden/principal.webp",

    gallery: [
      "/public/images/properties/hotel-eden/habitacion-1.webp",
      "/public/images/properties/hotel-eden/habitacion-2.webp",
      "/public/images/properties/hotel-eden/patio.webp",
      "/public/images/properties/hotel-eden/bano.webp",
    ],

    rooms: 20,

    capacity: 26,

    amenities: [
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Cafetería", en: "Cafeteria" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Ventilador", en: "Fan" },
  { es: "Televisión", en: "TV" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Desayuno", en: "Breakfast" },
],
  },

  // =====================================================
  // GIGANTE
  // =====================================================

  {
    id: 17,

    title: {
      es: "Hotel Villa Amparo Gigante Huila",
      en: "Hotel Villa Amparo Gigante Huila",
    },

    description: {
      es: "Hotel ubicado en el municipio de Gigante, Huila, una opción de alojamiento para visitantes que desean conocer los paisajes y atractivos naturales de la región.",
      en: "Hotel located in the municipality of Gigante, Huila, an accommodation option for visitors who want to explore the landscapes and natural attractions of the region.",
    },

    location: {
      es: "Gigante, Huila, Colombia",
      en: "Gigante, Huila, Colombia",
    },

    address: {
      es: "Calle 4 #12-21",
      en: "Calle 4 #12-21",
    },

    type: "Hotel",

    contactPhone: "3173365572",

    contactEmail: "hotelvillamparo@hotmail.com",

    image:
      "/public/images/properties/hotel-amparo/principal.webp",

    gallery: [
      "/public/images/properties/hotel-amparo/habitacion-1.webp",
      "/public/images/properties/hotel-amparo/habitacion-2.webp",
      "/public/images/properties/hotel-amparo/patio.webp",
      "/public/images/properties/hotel-amparo/bano.webp",
    ],

    amenities: [
  { es: "Piscina", en: "Swimming pool" },
  { es: "Restaurante", en: "Restaurant" },
  { es: "Bar", en: "Bar" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Lavandería", en: "Laundry service" },
  { es: "Salón para eventos", en: "Event hall" },
  { es: "Admite mascotas", en: "Pet friendly" },
],
  },

  {
    id: 18,

    title: {
      es: "Hotel Boutique Ceiba Real",
      en: "Hotel Boutique Ceiba Real",
    },

    description: {
      es: "Hotel boutique ubicado en el casco urbano de Gigante, Huila, con alojamiento para visitantes que recorren el municipio y sus atractivos turísticos.",
      en: "Boutique hotel located in the urban area of Gigante, Huila, offering accommodation for visitors exploring the municipality and its tourist attractions.",
    },

    location: {
      es: "Gigante, Huila, Colombia",
      en: "Gigante, Huila, Colombia",
    },

    address: {
      es: "Carrera 6 #2-67",
      en: "Carrera 6 #2-67",
    },

    type: "Hotel",

    contactPhone: "3125444840",

    contactEmail: "jefervega@gmail.com",

    image:
      "/public/images/properties/hotel-ceiba/principal.png",

    gallery: [
      "/public/images/properties/hotel-ceiba/habitacion-1.jpg",
      "/public/images/properties/hotel-ceiba/habitacion-2.png",
      "/public/images/properties/hotel-ceiba/patio.jpg",
      "/public/images/properties/hotel-ceiba/bano.jpg",
    ],

    rooms: 16,

    capacity: 19,

    amenities: [
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Información turística", en: "Tourist information" },
  { es: "Traslado al aeropuerto", en: "Airport transfer" },
  { es: "Guardaequipaje", en: "Luggage storage" },
  { es: "Baño privado", en: "Private bathroom" },
  { es: "Parqueadero gratuito", en: "Free parking" },
  { es: "Aire acondicionado", en: "Air conditioning" },
  { es: "Admite mascotas", en: "Pet friendly" },
],
  },

  // =====================================================
  // LA PLATA
  // =====================================================

  {
    id: 19,

    title: {
      es: "Hotel y Restaurante Casa Medina",
      en: "Casa Medina Hotel and Restaurant",
    },

    description: {
      es: "Hotel ubicado en el municipio de La Plata, Huila, con restaurante y espacios pensados para ofrecer una estadía cómoda a visitantes y viajeros.",
      en: "Hotel located in the municipality of La Plata, Huila, with a restaurant and spaces designed to provide a comfortable stay for visitors and travelers.",
    },

    location: {
      es: "La Plata, Huila",
      en: "La Plata, Huila",
    },

    address: {
      es: "Cl. 4 #5-110, La Plata, Huila",
      en: "Cl. 4 #5-110, La Plata, Huila",
    },

    price: 80000,

    priceDescription: {
      es: "por noche",
      en: "per night",
    },

    contactPhone: "320 348 6890",

    contactEmail: "reservas@casamedina.test",

    website: "https://casamedina.test",

    rooms: 13,
    capacity: 30,

    amenities: [
      { es: "Restaurante", en: "Restaurant" },
      { es: "WiFi", en: "WiFi" },
      { es: "Baño privado", en: "Private bathroom" },
      { es: "Recepción", en: "Reception" },
    ],

    type: "Hotel",

    image:
      "/public/images/properties/hotel-medina/principal.webp",

    gallery: [
      "/public/images/properties/hotel-medina/habitacion-1.webp",
      "/public/images/properties/hotel-medina/habitacion-2.webp",
      "/public/images/properties/hotel-medina/patio.webp",
      "/public/images/properties/hotel-medina/bano.webp",
    ],
  },

  {
    id: 20,

    title: {
      es: "Hotel El Portal de Valencia",
      en: "Hotel El Portal de Valencia",
    },

    description: {
      es: "Hotel ubicado en La Plata, Huila, ideal para viajeros que buscan alojamiento durante su visita al occidente del departamento.",
      en: "Hotel located in La Plata, Huila, ideal for travelers looking for accommodation while visiting the western part of the department.",
    },

    location: {
      es: "La Plata, Huila",
      en: "La Plata, Huila",
    },

    address: {
      es: "Cl. 6 Este #3-58",
      en: "Cl. 6 Este #3-58",
    },

    price: 75000,

    priceDescription: {
      es: "por noche",
      en: "per night",
    },

    contactPhone: "315 539 6224",
    contactEmail: undefined,
    website: undefined,
    rooms: undefined,
    capacity: undefined,

    amenities: [
  { es: "Wi-Fi", en: "Wi-Fi" },
  { es: "Desayuno", en: "Breakfast" },
  { es: "Parqueadero", en: "Parking" },
  { es: "Gimnasio", en: "Gym" },
  { es: "Recepción 24 horas", en: "24-hour reception" },
  { es: "Guardaequipaje", en: "Luggage storage" },
  { es: "Lavandería", en: "Laundry service" },
  { es: "Admite mascotas", en: "Pet friendly" },
],

    type: "Hotel",

    image:
      "/public/images/properties/hotel-valencia/principal.webp",

    gallery: [
      "/public/images/properties/hotel-valencia/habitacion-1.webp",
      "/public/images/properties/hotel-valencia/habitacion-2.webp",
      "/public/images/properties/hotel-valencia/patio.jpg",
      "/public/images/properties/hotel-valencia/bano.jpg",
    ],
  },
];
export type Destination = {
  id: number;

  name: {
    es: string;
    en: string;
  };

  location: {
    es: string;
    en: string;
  };

  description: {
    es: string;
    en: string;
  };

  image: string;

  attractions: {
    es: string[];
    en: string[];
  };

  activities: {
    es: string[];
    en: string[];
  };

  bestTime: {
    es: string;
    en: string;
  };

  recommendations: {
    es: string[];
    en: string[];
  };

  gallery: string[];

  mapsUrl: string;
};

export const destinations: Destination[] = [
  {
    id: 1,

    name: {
      es: "Desierto de la Tatacoa",
      en: "Tatacoa Desert",
    },

    location: {
      es: "Villavieja, Huila",
      en: "Villavieja, Huila",
    },

    description: {
      es: "Un impresionante paisaje natural conocido por sus formaciones rocosas y sus cielos ideales para observar las estrellas.",
      en: "An impressive natural landscape known for its rock formations and clear skies, ideal for stargazing.",
    },

    image:
      "/public/images/destinations/tatacoa/principal.jpg",

    attractions: {
      es: [
        "Desierto Rojo",
        "Desierto Gris",
        "Observatorios astronómicos",
      ],
      en: [
        "Red Desert",
        "Gray Desert",
        "Astronomical observatories",
      ],
    },

    activities: {
      es: [
        "Observación de estrellas",
        "Senderismo",
        "Fotografía de paisajes",
      ],
      en: [
        "Stargazing",
        "Hiking",
        "Landscape photography",
      ],
    },

    bestTime: {
      es: "Los meses con menor probabilidad de lluvia suelen ser una buena opción para disfrutar de los paisajes y la observación astronómica.",
      en: "Months with lower rainfall are generally a good option for enjoying the landscapes and stargazing.",
    },

    recommendations: {
      es: [
        "Llevar protector solar y buena hidratación.",
        "Usar ropa ligera y cómoda.",
        "Llevar una linterna para las actividades nocturnas.",
      ],
      en: [
        "Bring sunscreen and stay hydrated.",
        "Wear light and comfortable clothing.",
        "Bring a flashlight for nighttime activities.",
      ],
    },

    gallery: [
  "/public/images/destinations/tatacoa/image-1.jpg",
  "/public/images/destinations/tatacoa/image-2.jpg",
  "/public/images/destinations/tatacoa/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Desierto+de+la+Tatacoa+Villavieja+Huila",
  },

  {
    id: 2,

    name: {
      es: "Parque Arqueológico de San Agustín",
      en: "San Agustín Archaeological Park",
    },

    location: {
      es: "San Agustín, Huila",
      en: "San Agustín, Huila",
    },

    description: {
      es: "Un destino lleno de historia, naturaleza y antiguas esculturas que forman parte del patrimonio arqueológico de Colombia.",
      en: "A destination filled with history, nature, and ancient sculptures that are part of Colombia's archaeological heritage.",
    },

    image:
      "/public/images/destinations/san-agustin/principal.jpg",

    attractions: {
      es: [
        "Meseta de las Estatuas",
        "Bosque de las Estatuas",
        "Fuente de Lavapatas",
      ],
      en: [
        "Statues Plateau",
        "Statues Forest",
        "Lavapatas Fountain",
      ],
    },

    activities: {
      es: [
        "Recorridos arqueológicos",
        "Senderismo",
        "Fotografía",
      ],
      en: [
        "Archaeological tours",
        "Hiking",
        "Photography",
      ],
    },

    bestTime: {
      es: "Los meses de menor lluvia suelen ser recomendables para recorrer los parques arqueológicos y disfrutar de los senderos.",
      en: "The drier months are generally recommended for exploring the archaeological parks and hiking trails.",
    },

    recommendations: {
      es: [
        "Usar calzado cómodo para caminar.",
        "Llevar protector solar y agua.",
        "Reservar suficiente tiempo para recorrer los sitios arqueológicos.",
      ],
      en: [
        "Wear comfortable walking shoes.",
        "Bring sunscreen and water.",
        "Allow enough time to explore the archaeological sites.",
      ],
    },

    gallery: [
  "/public/images/destinations/san-agustin/image-1.jpg",
  "/public/images/destinations/san-agustin/image-2.jpg",
  "/public/images/destinations/san-agustin/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parque+Arqueologico+de+San+Agustin+Huila",
  },

  {
    id: 3,

    name: {
      es: "Salto de Bordones",
      en: "Bordones Waterfall",
    },

    location: {
      es: "Isnos, Huila",
      en: "Isnos, Huila",
    },

    description: {
      es: "Una espectacular cascada rodeada de naturaleza, considerada uno de los grandes atractivos naturales del sur del Huila.",
      en: "A spectacular waterfall surrounded by nature and considered one of the great natural attractions of southern Huila.",
    },

    image:
      "/public/images/destinations/bordones/principal.jpg",

    attractions: {
      es: [
        "Cascada del Salto de Bordones",
        "Paisajes naturales",
        "Miradores",
      ],
      en: [
        "Bordones Waterfall",
        "Natural landscapes",
        "Viewpoints",
      ],
    },

    activities: {
      es: [
        "Senderismo",
        "Observación de naturaleza",
        "Fotografía",
      ],
      en: [
        "Hiking",
        "Nature observation",
        "Photography",
      ],
    },

    bestTime: {
      es: "La temporada seca puede facilitar los recorridos y el acceso a los diferentes miradores.",
      en: "The dry season can make trails and access to different viewpoints easier.",
    },

    recommendations: {
      es: [
        "Usar calzado adecuado para terrenos naturales.",
        "Llevar agua suficiente.",
        "Respetar los senderos y el entorno natural.",
      ],
      en: [
        "Wear suitable footwear for natural terrain.",
        "Bring enough water.",
        "Respect trails and the natural environment.",
      ],
    },

    gallery: [
  "/public/images/destinations/bordones/image-1.jpg",
  "/public/images/destinations/bordones/image-2.jpg",
  "/public/images/destinations/bordones/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Salto+de+Bordones+Isnos+Huila",
  },

  {
    id: 4,

    name: {
      es: "Estrecho del Magdalena",
      en: "Magdalena River Strait",
    },

    location: {
      es: "San Agustín, Huila",
      en: "San Agustín, Huila",
    },

    description: {
      es: "Uno de los lugares más llamativos del río Magdalena, donde sus aguas atraviesan un estrecho rodeado de grandes formaciones rocosas.",
      en: "One of the most remarkable places along the Magdalena River, where its waters pass through a narrow channel surrounded by large rock formations.",
    },

    image:
      "/public/images/destinations/estrecho/principal.jpg",

    attractions: {
      es: [
        "Estrecho del río Magdalena",
        "Formaciones rocosas",
        "Paisajes del río Magdalena",
      ],
      en: [
        "Magdalena River Strait",
        "Rock formations",
        "Magdalena River landscapes",
      ],
    },

    activities: {
      es: [
        "Caminatas",
        "Observación del paisaje",
        "Fotografía",
      ],
      en: [
        "Walking",
        "Landscape observation",
        "Photography",
      ],
    },

    bestTime: {
      es: "La temporada seca suele ofrecer mejores condiciones para recorrer los alrededores y disfrutar del paisaje.",
      en: "The dry season usually offers better conditions for exploring the surroundings and enjoying the landscape.",
    },

    recommendations: {
      es: [
        "Llevar agua y protección solar.",
        "Usar calzado cómodo.",
        "Mantenerse en las zonas habilitadas para visitantes.",
      ],
      en: [
        "Bring water and sun protection.",
        "Wear comfortable shoes.",
        "Stay in designated visitor areas.",
      ],
    },

    gallery: [
  "/public/images/destinations/estrecho/image-1.jpg",
  "/public/images/destinations/estrecho/image-2.jpg",
  "/public/images/destinations/estrecho/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Estrecho+del+Magdalena+San+Agustin+Huila",
  },

  {
    id: 5,

    name: {
      es: "Salto del Mortiño",
      en: "Mortiño Waterfall",
    },

    location: {
      es: "Isnos, Huila",
      en: "Isnos, Huila",
    },

    description: {
      es: "Una impresionante caída de agua ubicada en medio de un entorno natural ideal para disfrutar del paisaje.",
      en: "An impressive waterfall surrounded by a natural environment, perfect for enjoying the landscape.",
    },

    image:
      "/public/images/destinations/mortino/principal.jpg",

    attractions: {
      es: [
        "Cascada del Mortiño",
        "Paisajes naturales",
        "Entorno montañoso",
      ],
      en: [
        "Mortiño Waterfall",
        "Natural landscapes",
        "Mountain scenery",
      ],
    },

    activities: {
      es: [
        "Senderismo",
        "Fotografía",
        "Observación de naturaleza",
      ],
      en: [
        "Hiking",
        "Photography",
        "Nature observation",
      ],
    },

    bestTime: {
      es: "Los períodos de menor lluvia suelen ser más cómodos para realizar recorridos por la zona.",
      en: "Drier periods are generally more comfortable for exploring the area.",
    },

    recommendations: {
      es: [
        "Usar calzado con buen agarre.",
        "Llevar agua y protector solar.",
        "Evitar acercarse demasiado a zonas peligrosas de la cascada.",
      ],
      en: [
        "Wear shoes with good grip.",
        "Bring water and sunscreen.",
        "Avoid getting too close to dangerous areas around the waterfall.",
      ],
    },

    gallery: [
  "/public/images/destinations/mortino/image-1.jpg",
  "/public/images/destinations/mortino/image-2.jpg",
  "/public/images/destinations/mortino/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Salto+del+Mortiño+Isnos+Huila",
  },

  {
    id: 6,

    name: {
      es: "Represa de Betania",
      en: "Betania Reservoir",
    },

    location: {
      es: "Huila, Colombia",
      en: "Huila, Colombia",
    },

    description: {
      es: "Un extenso embalse rodeado de paisajes naturales, ideal para disfrutar de actividades relacionadas con el agua y la naturaleza.",
      en: "A large reservoir surrounded by natural landscapes, ideal for enjoying water-related activities and nature.",
    },

    image:
      "/public/images/destinations/betania/principal.jpg",

    attractions: {
      es: [
        "Embalse de Betania",
        "Paisajes naturales",
        "Entornos rurales del Huila",
      ],
      en: [
        "Betania Reservoir",
        "Natural landscapes",
        "Rural surroundings of Huila",
      ],
    },

    activities: {
      es: [
        "Pesca",
        "Paseos y actividades acuáticas",
        "Fotografía de paisajes",
      ],
      en: [
        "Fishing",
        "Water activities",
        "Landscape photography",
      ],
    },

    bestTime: {
      es: "Los días de clima estable pueden ser ideales para disfrutar de las actividades al aire libre y los paisajes del embalse.",
      en: "Days with stable weather can be ideal for enjoying outdoor activities and the reservoir's landscapes.",
    },

    recommendations: {
      es: [
        "Usar protección solar.",
        "Llevar suficiente hidratación.",
        "Verificar las condiciones climáticas antes de realizar actividades acuáticas.",
      ],
      en: [
        "Use sun protection.",
        "Bring enough water.",
        "Check weather conditions before participating in water activities.",
      ],
    },

    gallery: [
  "/public/images/destinations/betania/image-1.jpg",
  "/public/images/destinations/betania/image-2.jpg",
  "/public/images/destinations/betania/image-3.jpg",
],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Represa+de+Betania+Huila+Colombia",
  },
  {
    id: 7,

    name: {
      es: "La Mano del Gigante",
      en: "Giant's Hand",
    },

    location: {
      es: "Gigante, Huila",
      en: "Gigante, Huila",
    },

    description: {
      es: "Un impresionante mirador turístico ubicado en las montañas de Gigante, conocido por su enorme estructura en forma de mano y sus espectaculares paisajes del valle del Magdalena.",
      en: "An impressive tourist viewpoint in the mountains of Gigante, known for its enormous hand-shaped structure and spectacular views of the Magdalena Valley.",
    },

    image:
      "/public/images/destinations/mano-gigante/principal-2.png",

    attractions: {
      es: [
        "La Mano del Gigante",
        "Miradores panorámicos",
        "Paisajes del valle del Magdalena",
      ],
      en: [
        "Giant's Hand",
        "Panoramic viewpoints",
        "Magdalena Valley landscapes",
      ],
    },

    activities: {
      es: [
        "Fotografía",
        "Senderismo",
        "Observación del paisaje",
      ],
      en: [
        "Photography",
        "Hiking",
        "Landscape observation",
      ],
    },

    bestTime: {
      es: "Los días con condiciones climáticas favorables suelen ser una buena opción para disfrutar de los miradores y los paisajes.",
      en: "Days with favorable weather conditions are generally a good option for enjoying the viewpoints and landscapes.",
    },

    recommendations: {
      es: [
        "Usar calzado cómodo para los recorridos.",
        "Llevar agua y protección solar.",
        "Consultar las condiciones climáticas antes de realizar la visita.",
      ],
      en: [
        "Wear comfortable shoes for the trails.",
        "Bring water and sun protection.",
        "Check weather conditions before visiting.",
      ],
    },

    gallery: [
      "/public/images/destinations/mano-gigante/image-1.jpg",
      "/public/images/destinations/mano-gigante/image-2.jpg",
      "/public/images/destinations/mano-gigante/image-3.jpg",
    ],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Mano+del+Gigante+Gigante+Huila",
  },

  {
    id: 8,

    name: {
      es: "Mirador en la Montaña",
      en: "Mountain Viewpoint",
    },

    location: {
      es: "El Pital, Huila",
      en: "El Pital, Huila",
    },

    description: {
      es: "Un mirador turístico ubicado en la vereda Peña Negra, rodeado de naturaleza y con vistas panorámicas de los paisajes del municipio de El Pital.",
      en: "A tourist viewpoint located in the Peña Negra area, surrounded by nature and offering panoramic views of the landscapes of El Pital.",
    },

    image:
      "/public/images/destinations/mirador-montana/principal-3.jpg",

    attractions: {
      es: [
        "Mirador en la Montaña",
        "Paisajes naturales",
        "Vistas panorámicas",
      ],
      en: [
        "Mountain Viewpoint",
        "Natural landscapes",
        "Panoramic views",
      ],
    },

    activities: {
      es: [
        "Fotografía",
        "Senderismo",
        "Observación del paisaje",
      ],
      en: [
        "Photography",
        "Hiking",
        "Landscape observation",
      ],
    },

    bestTime: {
      es: "Los días con condiciones climáticas favorables pueden ofrecer mejores condiciones para disfrutar de las vistas panorámicas.",
      en: "Days with favorable weather conditions can provide better opportunities to enjoy the panoramic views.",
    },

    recommendations: {
      es: [
        "Usar calzado cómodo.",
        "Llevar agua y protección solar.",
        "Respetar el entorno natural.",
      ],
      en: [
        "Wear comfortable shoes.",
        "Bring water and sun protection.",
        "Respect the natural environment.",
      ],
    },

    gallery: [
      "/public/images/destinations/mirador-montana/image-1.jpg",
      "/public/images/destinations/mirador-montana/image-2.jpg",
      "/public/images/destinations/mirador-montana/image-3.jpg",
    ],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mirador+en+la+Montaña+El+Pital+Huila",
  },

  {
    id: 9,

    name: {
      es: "Mirador Los Cuatro Vientos",
      en: "Los Cuatro Vientos Viewpoint",
    },

    location: {
      es: "El Pital, Huila",
      en: "El Pital, Huila",
    },

    description: {
      es: "Un mirador ubicado en la vereda Flor Amarillo, desde donde se pueden apreciar los paisajes naturales y las panorámicas de la región.",
      en: "A viewpoint located in the Flor Amarillo area, offering views of the natural landscapes and panoramas of the region.",
    },

    image:
      "/public/images/destinations/mirador-cuatro/principal.png",

    attractions: {
      es: [
        "Mirador Los Cuatro Vientos",
        "Paisajes naturales",
        "Vistas panorámicas",
      ],
      en: [
        "Los Cuatro Vientos Viewpoint",
        "Natural landscapes",
        "Panoramic views",
      ],
    },

    activities: {
      es: [
        "Fotografía",
        "Senderismo",
        "Observación del paisaje",
      ],
      en: [
        "Photography",
        "Hiking",
        "Landscape observation",
      ],
    },

    bestTime: {
      es: "Los días de clima favorable suelen ser una buena opción para disfrutar de las vistas panorámicas y realizar actividades al aire libre.",
      en: "Days with favorable weather are generally a good option for enjoying panoramic views and outdoor activities.",
    },

    recommendations: {
      es: [
        "Usar calzado cómodo.",
        "Llevar agua y protección solar.",
        "Respetar los senderos y el entorno natural.",
      ],
      en: [
        "Wear comfortable shoes.",
        "Bring water and sun protection.",
        "Respect trails and the natural environment.",
      ],
    },

    gallery: [
      "/public/images/destinations/mirador-cuatro/image-1.jpg",
      "/public/images/destinations/mirador-cuatro/image-2.jpg",
      "/public/images/destinations/mirador-cuatro/image-3.jpg",
    ],

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mirador+Los+Cuatro+Vientos+El+Pital+Huila",
  },


];
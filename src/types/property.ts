export type TranslatableText = {
  es: string;
  en: string;
};

export type Property = {
  id: number;

  // Información básica
  title: TranslatableText;
  description: TranslatableText;
  location: TranslatableText;
  address?: TranslatableText;

  // Ubicación geográfica
  latitude?: number;
  longitude?: number;

  // Información comercial
  price?: number;
  priceDescription?: TranslatableText;
  type: PropertyType;

  // Contacto
  contactPhone?: string;
  contactEmail?: string;
  website?: string;

  // Imágenes
  image: string;
  gallery?: string[];

  // Servicios del alojamiento
  amenities?: TranslatableText[];

  // Información adicional
  rooms?: number;
  capacity?: number;
};

export type PropertyType =
  | "Hotel"
  | "Hostal"
  | "Finca"
  | "Cabaña"
  | "Apartamento"
  | "Casa"
  | "Villa"
  | "Glamping"
  | "Posada"
  | "Camping"
  | "Otro";
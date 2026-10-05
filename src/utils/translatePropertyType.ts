import type { Property } from "../types/property";

export function translatePropertyType(
  type: Property["type"],
  translations: {
    apartment: string;
    house: string;
    loft: string;
    cabin: string;
    studio: string;
    villa: string;
  }
) {
  const types: Record<string, string> = {
    Apartamento: translations.apartment,
    Casa: translations.house,
    Loft: translations.loft,
    Cabaña: translations.cabin,
    Estudio: translations.studio,
    Villa: translations.villa,
  };

  return types[type] ?? type;
}
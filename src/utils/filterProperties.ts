import type { Property } from "../types/property";

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function filterProperties(
  properties: Property[],
  searchText: string
): Property[] {
  const normalizedSearch = normalizeText(searchText);

  if (!normalizedSearch) {
    return properties;
  }

  return properties.filter((property) => {
    return (
      normalizeText(property.title.es).includes(normalizedSearch) ||
      normalizeText(property.title.en).includes(normalizedSearch) ||
      normalizeText(property.location.es).includes(normalizedSearch) ||
      normalizeText(property.location.en).includes(normalizedSearch) ||
      normalizeText(property.type).includes(normalizedSearch)
    );
  });
}
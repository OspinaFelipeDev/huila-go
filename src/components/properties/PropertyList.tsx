import type { Property } from "../../types/property";
import { PropertyCard } from "./PropertyCard";
import { useLanguage } from "../../context/LanguageContext";

type PropertyListProps = {
  properties: Property[];
};

export function PropertyList({ properties }: PropertyListProps) {
  const { t } = useLanguage();

  if (properties.length === 0) {
    return (
      <section className="properties-section">
        <h3>{t.property.available}</h3>
        <p>{t.property.noResults}</p>
      </section>
    );
  }

  return (
    <section className="properties-section">
      <h3>{t.property.available}</h3>

      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
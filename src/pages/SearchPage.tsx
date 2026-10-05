import { useSearchParams } from "react-router";
import { PropertyList } from "../components/properties/PropertyList";
import { SearchFilters } from "../components/search/SearchFilters";
import { properties } from "../data/properties";
import { useLanguage } from "../context/LanguageContext";

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, t } = useLanguage();

  const destination = searchParams.get("destination") || "";
  const type = searchParams.get("type") || "";

  const filteredProperties = properties.filter((property) => {
    const propertyLocation = property.location[language];

    const normalizedLocation = normalizeText(propertyLocation);
    const normalizedDestination = normalizeText(destination);

    const matchesDestination = normalizedLocation.includes(
      normalizedDestination
    );

    const matchesType = type
      ? property.type === type
      : true;

    return matchesDestination && matchesType;
  });

  const handleFilterChange = (
    key: string,
    value: string
  ) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    setSearchParams(nextParams);
  };

  return (
    <main className="main-content">
      <h1>{t.search.pageTitle}</h1>

      <SearchFilters
        destination={destination}
        type={type}
        onChange={handleFilterChange}
        onClear={() => setSearchParams({})}
      />

      <PropertyList properties={filteredProperties} />
    </main>
  );
}

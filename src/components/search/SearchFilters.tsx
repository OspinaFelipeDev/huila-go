import { useLanguage } from "../../context/LanguageContext";

type SearchFiltersProps = {
  destination: string;
  type: string;
  onChange: (key: string, value: string) => void;
  onClear: () => void;
};

export function SearchFilters({
  destination,
  type,
  onChange,
  onClear,
}: SearchFiltersProps) {
  const { t } = useLanguage();

  return (
    <section className="filters">
      <input
        type="text"
        placeholder={t.search.filters.destination}
        value={destination}
        onChange={(event) =>
          onChange("destination", event.target.value)
        }
      />

      <select
        value={type}
        onChange={(event) =>
          onChange("type", event.target.value)
        }
      >
        <option value="">
          {t.search.filters.all}
        </option>

        <option value="Apartamento">
          {t.types.apartment}
        </option>

        <option value="Casa">
          {t.types.house}
        </option>

        <option value="Loft">
          {t.types.loft}
        </option>

        <option value="Cabaña">
          {t.types.cabin}
        </option>

        <option value="Estudio">
          {t.types.studio}
        </option>

        <option value="Villa">
          {t.types.villa}
        </option>
      </select>

      <button type="button" onClick={onClear}>
        {t.search.filters.clear}
      </button>
    </section>
  );
}
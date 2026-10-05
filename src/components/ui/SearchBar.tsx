import type { ChangeEvent, FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

type SearchBarProps = {
  value: string;
  searchedValue: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  onClear: () => void;
};

export function SearchBar({
  value,
  searchedValue,
  onChange,
  onSearch,
  onClear,
}: SearchBarProps) {
  const { t } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(value.trim());
  };

  return (
    <>
      <form className="search-section" onSubmit={handleSubmit}>
        <label>
          {t.search.city}

          <span className="city-input-wrapper">
            <input
              type="text"
              placeholder={t.search.cityPlaceholder}
              value={value}
              onChange={handleChange}
            />

            {(value || searchedValue) && (
              <button
                className="clear-city-button"
                type="button"
                onClick={onClear}
              >
                ×
              </button>
            )}
          </span>
        </label>

        <label>
          {t.search.type}

          <input
            type="text"
            placeholder={t.search.typePlaceholder}
          />
        </label>

        <label>
          {t.search.guests}

          <input
            type="number"
            placeholder="2"
          />
        </label>

        <button type="submit">
          {t.search.searchButton}
        </button>
      </form>

      <p className="current-search">
        {t.search.results}{" "}
        <strong>
          {searchedValue || t.search.noSearch}
        </strong>
      </p>
    </>
  );
}
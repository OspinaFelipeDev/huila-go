import { useNavigate } from "react-router";

import { useLanguage } from "../../context/LanguageContext";

import type { Destination } from "../../data/destinations";
import { getImageUrl } from "../../utils/imageUrl";

type DestinationCardProps = {
  destination: Destination;
  onFavoriteRemoved?: (destinationId: number) => void;
};

export function DestinationCard({
  destination,
  onFavoriteRemoved,
}: DestinationCardProps) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleRemoveFavorite = () => {
    onFavoriteRemoved?.(destination.id);
  };

  return (
    <article className="destination-card">
      <div className="destination-card-image">
        <img
          src={getImageUrl(destination.image)}
          alt={destination.name[language]}
        />

        <span className="destination-favorite-badge">
          ❤️
        </span>
      </div>

      <div className="destination-card-content">
        <h2>{destination.name[language]}</h2>

        <p className="destination-location">
          📍 {destination.location[language]}
        </p>

        <p className="destination-description">
          {destination.description[language]}
        </p>

        <div className="destination-favorite-actions">
          <button
            type="button"
            className="destination-favorite-remove"
            onClick={handleRemoveFavorite}
          >
            ❤️ {t.favorites.removeDestination}
          </button>

          <button
            type="button"
            className="destination-button"
            onClick={() =>
              navigate(`/destinations/${destination.id}`)
            }
          >
            {t.favorites.viewDestination}
          </button>
        </div>
      </div>
    </article>
  );
}

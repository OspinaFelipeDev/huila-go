import { useState } from "react";
import type { MouseEvent } from "react";
import { useNavigate } from "react-router";

import type { Property } from "../../types/property";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { removeFavorite } from "../../services/favorites";
import { translatePropertyType } from "../../utils/translatePropertyType";

type PropertyCardProps = {
  property: Property;
  showFavoriteButton?: boolean;
  onFavoriteRemoved?: (propertyId: number) => void;
};

export function PropertyCard({
  property,
  showFavoriteButton = false,
  onFavoriteRemoved,
}: PropertyCardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { language, t } = useLanguage();

  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const translatedType = translatePropertyType(
    property.type,
    t.types
  );

  const handlePropertyClick = () => {
    navigate(`/properties/${property.id}`);
  };

  const handleRemoveFavorite = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setFavoriteLoading(true);

      await removeFavorite(user.uid, property.id);

      onFavoriteRemoved?.(property.id);
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
    } finally {
      setFavoriteLoading(false);
    }
  };

  return (
    <article
      className="property-card"
      onClick={handlePropertyClick}
    >
      <div className="property-card-image">
        <img
          src={property.image}
          alt={property.title[language]}
        />

        {showFavoriteButton && (
          <button
            type="button"
            className="favorite-button property-card-favorite"
            onClick={handleRemoveFavorite}
            disabled={favoriteLoading}
            aria-label={t.property.removeFavorite}
          >
            {favoriteLoading ? "..." : "❤️"}
          </button>
        )}
      </div>

      <div className="property-card-content">
        <h4>{property.title[language]}</h4>

        <p className="property-card-location">
          📍 {property.location[language]}
        </p>

        {property.type && (
          <p className="property-card-type">
            🏨 {translatedType}
          </p>
        )}

        <strong className="property-card-price">
          {property.price
            ? `Desde $${property.price.toLocaleString("es-CO")} COP`
            : "Consultar precio"}
        </strong>

        {property.price && (
          <span className="property-card-per-night">
            / {t.property.perNight}
          </span>
        )}
      </div>
    </article>
  );
}
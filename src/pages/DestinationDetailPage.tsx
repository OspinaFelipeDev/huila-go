import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import {
  addDestinationFavorite,
  isDestinationFavorite,
  removeDestinationFavorite,
} from "../services/favorites";

import { destinations } from "../data/destinations";

export default function DestinationDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { user } = useAuth();

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(true);

  const destination = destinations.find(
    (destination) => destination.id === Number(id)
  );

  useEffect(() => {
    const checkFavorite = async () => {
      if (!user || !destination) {
        setIsFavorite(false);
        setFavoriteLoading(false);
        return;
      }

      try {
        const favorite = await isDestinationFavorite(
          user.uid,
          destination.id
        );

        setIsFavorite(favorite);
      } catch (error) {
        console.error("Error al comprobar favorito:", error);
      } finally {
        setFavoriteLoading(false);
      }
    };

    checkFavorite();
  }, [user, destination]);

  if (!destination) {
    return (
      <main className="main-content">
        <h1>
          {language === "es"
            ? "Destino no encontrado"
            : "Destination not found"}
        </h1>

        <Link to="/destinations" className="destination-button">
          {language === "es"
            ? "Volver a destinos"
            : "Back to destinations"}
        </Link>
      </main>
    );
  }

  const handleFavorite = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    try {
      setFavoriteLoading(true);

      if (isFavorite) {
        await removeDestinationFavorite(
          user.uid,
          destination.id
        );

        setIsFavorite(false);
      } else {
        await addDestinationFavorite(
          user.uid,
          destination.id
        );

        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error al actualizar favorito:", error);
    } finally {
      setFavoriteLoading(false);
    }
  };

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? destination.gallery.length - 1
        : selectedImage - 1
    );
  };

  const showNextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === destination.gallery.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  return (
    <main className="main-content">
      <section className="destination-detail">
        <div className="destination-detail-image">
          <img
            src={destination.image}
            alt={destination.name[language]}
          />

          <button
            type="button"
            className={`destination-favorite-button ${
              isFavorite ? "is-favorite" : ""
            }`}
            onClick={handleFavorite}
            disabled={favoriteLoading}
            aria-label={
              isFavorite
                ? language === "es"
                  ? "Quitar de favoritos"
                  : "Remove from favorites"
                : language === "es"
                ? "Agregar a favoritos"
                : "Add to favorites"
            }
          >
            {isFavorite ? "❤️" : "♡"}
          </button>
        </div>

        <div className="destination-detail-content">
          <div className="destination-detail-title">
            <h1>{destination.name[language]}</h1>
          </div>

          <p className="destination-location">
            📍 {destination.location[language]}
          </p>

          <p className="destination-description">
            {destination.description[language]}
          </p>

          <section className="destination-detail-section">
            <h2>
              ⭐{" "}
              {language === "es"
                ? "Atractivos"
                : "Attractions"}
            </h2>

            <ul>
              {destination.attractions[language].map(
                (attraction) => (
                  <li key={attraction}>{attraction}</li>
                )
              )}
            </ul>
          </section>

          <section className="destination-detail-section">
            <h2>
              🎯{" "}
              {language === "es"
                ? "Actividades"
                : "Activities"}
            </h2>

            <ul>
              {destination.activities[language].map(
                (activity) => (
                  <li key={activity}>{activity}</li>
                )
              )}
            </ul>
          </section>

          <section className="destination-detail-section">
            <h2>
              📅{" "}
              {language === "es"
                ? "Mejor época para visitar"
                : "Best time to visit"}
            </h2>

            <p>{destination.bestTime[language]}</p>
          </section>

          <section className="destination-detail-section">
            <h2>
              💡{" "}
              {language === "es"
                ? "Recomendaciones"
                : "Recommendations"}
            </h2>

            <ul>
              {destination.recommendations[language].map(
                (recommendation) => (
                  <li key={recommendation}>
                    {recommendation}
                  </li>
                )
              )}
            </ul>
          </section>

          <div className="destination-detail-actions">
            <a
              href={destination.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="destination-maps-button"
            >
              🗺️{" "}
              {language === "es"
                ? "Ver en Google Maps"
                : "View on Google Maps"}
            </a>

            <Link
              to="/destinations"
              className="destination-button"
            >
              {language === "es"
                ? "Volver a destinos"
                : "Back to destinations"}
            </Link>
          </div>

          <section className="destination-gallery">
            <div className="destination-gallery-header">
              <h2>
                📸{" "}
                {language === "es"
                  ? "Galería"
                  : "Gallery"}
              </h2>

              <p>
                {language === "es"
                  ? "Descubre algunos de los paisajes y lugares que podrás encontrar en este destino."
                  : "Discover some of the landscapes and places you can find at this destination."}
              </p>
            </div>

            <div className="destination-gallery-grid">
              {destination.gallery.map((image, index) => (
                <button
                  type="button"
                  className="destination-gallery-item"
                  key={image}
                  onClick={() => openImage(index)}
                  aria-label={
                    language === "es"
                      ? `Ver imagen ${index + 1}`
                      : `View image ${index + 1}`
                  }
                >
                  <img
                    src={image}
                    alt={`${destination.name[language]} - ${
                      index + 1
                    }`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="destination-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={
            language === "es"
              ? "Galería de imágenes"
              : "Image gallery"
          }
          onClick={closeImage}
        >
          <button
            type="button"
            className="destination-lightbox-close"
            onClick={closeImage}
            aria-label={
              language === "es"
                ? "Cerrar galería"
                : "Close gallery"
            }
          >
            ✕
          </button>

          <button
            type="button"
            className="destination-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label={
              language === "es"
                ? "Imagen anterior"
                : "Previous image"
            }
          >
            ←
          </button>

          <img
            className="destination-lightbox-image"
            src={destination.gallery[selectedImage]}
            alt={`${destination.name[language]} - ${
              selectedImage + 1
            }`}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="destination-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label={
              language === "es"
                ? "Siguiente imagen"
                : "Next image"
            }
          >
            →
          </button>

          <span className="destination-lightbox-counter">
            {selectedImage + 1} / {destination.gallery.length}
          </span>
        </div>
      )}
    </main>
  );
}
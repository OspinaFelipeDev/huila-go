import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import type { Property } from "../types/property";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { translatePropertyType } from "../utils/translatePropertyType";

import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../services/favorites";

export default function PropertyDetailPage() {
  const property = useLoaderData<Property>();
  const { user } = useAuth();
  const { language, t } = useLanguage();

  const translatedType = translatePropertyType(
    property.type,
    t.types
  );

  const navigate = useNavigate();

  const [isFavoriteState, setIsFavoriteState] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  // Imagen actualmente seleccionada
  const [selectedImage, setSelectedImage] = useState(property.image);

  // Estado del lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Todas las imágenes de la propiedad
  const images = [
    ...new Set([
      property.image,
      ...(property.gallery ?? []),
    ]),
  ];

  useEffect(() => {
    const checkFavorite = async () => {
      if (!user) {
        setIsFavoriteState(false);
        return;
      }

      try {
        const favorite = await isFavorite(user.uid, property.id);
        setIsFavoriteState(favorite);
      } catch (error) {
        console.error("Error al comprobar favorito:", error);
      }
    };

    checkFavorite();
  }, [user, property.id]);

  const handleFavorite = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setFavoriteLoading(true);

      if (isFavoriteState) {
        await removeFavorite(user.uid, property.id);
        setIsFavoriteState(false);
      } else {
        await addFavorite(user.uid, property.id);
        setIsFavoriteState(true);
      }
    } catch (error) {
      console.error("Error al actualizar favorito:", error);
    } finally {
      setFavoriteLoading(false);
    }
  };

  // Abrir lightbox con la imagen actualmente seleccionada
  const openLightbox = () => {
    const index = images.findIndex(
      (image) => image === selectedImage
    );

    setLightboxIndex(index >= 0 ? index : 0);
    setIsLightboxOpen(true);
  };

  // Cerrar lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Imagen anterior
  const showPreviousImage = () => {
    setLightboxIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  // Imagen siguiente
  const showNextImage = () => {
    setLightboxIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="main-content property-detail">

      {/* Galería de imágenes */}
      <div className="property-detail-gallery">

        {/* Imagen principal */}
        <div className="property-detail-image">

          <img
            src={selectedImage}
            alt={property.title[language]}
            onClick={openLightbox}
          />

          <span>{translatedType}</span>

          <button
            type="button"
            className={`favorite-button ${
              isFavoriteState ? "is-favorite" : ""
            }`}
            onClick={handleFavorite}
            disabled={favoriteLoading}
            aria-label={
              isFavoriteState
                ? t.property.removeFavorite
                : t.property.addFavorite
            }
          >
            {isFavoriteState ? "❤️" : "♡"}
          </button>
        </div>

        {/* Imágenes adicionales */}
        {property.gallery && property.gallery.length > 0 && (
          <div className="property-detail-thumbnails">
            {property.gallery.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                onClick={() => setSelectedImage(image)}
                className={
                  selectedImage === image ? "active" : ""
                }
              >
                <img
                  src={image}
                  alt={`${property.title[language]} - ${
                    t.property.image
                  } ${index + 1}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Información principal */}
      <section className="property-detail-content">

        <p className="eyebrow">
          {t.property.featured}
        </p>

        <h1>{property.title[language]}</h1>

        <p className="property-detail-location">
          📍 {property.location[language]}
        </p>

        {/* Precio y contacto */}
        <div className="property-detail-booking">

          <div className="property-detail-price">

            <strong>
              {property.price
                ? `${t.property.from} $${property.price.toLocaleString(
                    "es-CO"
                  )} COP`
                : t.property.consultPrice}
            </strong>

            {property.price && (
              <span>
                / {t.property.perNight}
              </span>
            )}

          </div>

          {property.contactPhone && (
            <a href={`tel:${property.contactPhone}`}>
  📞 {property.contactPhone}
</a>
          )}

        </div>

        {/* Descripción */}
        {property.description && (
          <div className="property-detail-section">

            <h2>{t.property.description}</h2>

            <p>
              {property.description[language]}
            </p>

          </div>
        )}

        {/* Dirección */}
        {property.address && (
          <div className="property-detail-section">

            <h2>{t.property.location}</h2>

            <p>
              📍 {property.address[language]}
            </p>

          </div>
        )}

        {/* Habitaciones y capacidad */}
        {(property.rooms || property.capacity) && (
          <div className="property-detail-info">

            {property.rooms && (
              <div>

                <strong>
                  🛏️ {t.property.rooms}
                </strong>

                <span>
                  {property.rooms}
                </span>

              </div>
            )}

            {property.capacity && (
              <div>

                <strong>
                  👥 {t.property.capacity}
                </strong>

                <span>
                  {property.capacity}{" "}
                  {t.property.people}
                </span>

              </div>
            )}

          </div>
        )}

        {/* Servicios */}
        {property.amenities &&
          property.amenities.length > 0 && (
            <div className="property-detail-section">

              <h2>{t.property.amenities}</h2>

              <ul className="property-detail-amenities">

                {property.amenities.map((amenity) => (
                  <li key={amenity[language]}>
                    {amenity[language]}
                  </li>
                ))}

              </ul>

            </div>
          )}

        {/* Contacto */}
        {(property.contactEmail || property.website) && (
          <div className="property-detail-section">

            <h2>{t.property.contactSection}</h2>

            {property.contactEmail && (
              <p>
                ✉️{" "}
                <a
                  href={`mailto:${property.contactEmail}`}
                >
                  {property.contactEmail}
                </a>
              </p>
            )}

            {property.website && (
              <p>
                🌐{" "}
                <a
                  href={property.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.property.visitWebsite}
                </a>
              </p>
            )}

          </div>
        )}

        {/* Volver */}
        <button
          type="button"
          className="property-detail-back"
          onClick={() => navigate(-1)}
        >
          {t.property.back}
        </button>

      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="property-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.property.galleryOf} ${
            property.title[language]
          }`}
        >

          <button
            type="button"
            className="property-lightbox-close"
            onClick={closeLightbox}
            aria-label={t.property.closeGallery}
          >
            ✕
          </button>

          <button
            type="button"
            className="property-lightbox-prev"
            onClick={showPreviousImage}
            aria-label={t.property.previousImage}
          >
            ←
          </button>

          <img
            className="property-lightbox-image"
            src={images[lightboxIndex]}
            alt={`${property.title[language]} - ${
              t.property.image
            } ${lightboxIndex + 1}`}
          />

          <button
            type="button"
            className="property-lightbox-next"
            onClick={showNextImage}
            aria-label={t.property.nextImage}
          >
            →
          </button>

          <span className="property-lightbox-counter">
            {lightboxIndex + 1} / {images.length}
          </span>

        </div>
      )}

    </main>
  );
}
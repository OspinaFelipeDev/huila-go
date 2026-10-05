import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

import {
  getFavorites,
  getDestinationFavorites,
  removeDestinationFavorite,
} from "../services/favorites";

import { PropertyCard } from "../components/properties/PropertyCard";
import { DestinationCard } from "../components/destinations/DestinationCard";

import { properties } from "../data/properties";
import { destinations } from "../data/destinations";

import type { Property } from "../types/property";

export default function FavoritesPage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<Property[]>([]);
  const [favoriteDestinations, setFavoriteDestinations] =
    useState<typeof destinations>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        setLoading(true);

        const [favoriteIds, favoriteDestinationIds] =
          await Promise.all([
            getFavorites(user.uid),
            getDestinationFavorites(user.uid),
          ]);

        console.log("❤️ IDs alojamientos:", favoriteIds);
        console.log("📍 IDs destinos:", favoriteDestinationIds);

        const favoriteProperties = properties.filter((property) =>
          favoriteIds.includes(property.id)
        );

        const favoriteDestinationList = destinations.filter(
          (destination) =>
            favoriteDestinationIds.includes(destination.id)
        );

        console.log(
          "🏠 Alojamientos favoritos:",
          favoriteProperties
        );
        console.log(
          "📍 Destinos favoritos:",
          favoriteDestinationList
        );

        setFavorites(favoriteProperties);
        setFavoriteDestinations(favoriteDestinationList);
      } catch (error) {
        console.error("Error al cargar favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user, navigate]);

  const handleFavoriteRemoved = (propertyId: number) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (property) => property.id !== propertyId
      )
    );
  };

  const handleDestinationFavoriteRemoved = async (
    destinationId: number
  ) => {
    if (!user) return;

    try {
      await removeDestinationFavorite(
        user.uid,
        destinationId
      );

      setFavoriteDestinations((currentDestinations) =>
        currentDestinations.filter(
          (destination) => destination.id !== destinationId
        )
      );
    } catch (error) {
      console.error(
        "Error al eliminar destino favorito:",
        error
      );
    }
  };

  const accommodationsCount = favorites.length;
  const destinationsCount = favoriteDestinations.length;
  const totalFavorites =
    accommodationsCount + destinationsCount;

  const favoritesSummary = [];

  if (accommodationsCount > 0) {
    favoritesSummary.push(
      `${accommodationsCount} ${
        accommodationsCount === 1
          ? t.favorites.accommodation
          : t.favorites.accommodations
      }`
    );
  }

  if (destinationsCount > 0) {
    favoritesSummary.push(
      `${destinationsCount} ${
        destinationsCount === 1
          ? t.favorites.destination
          : t.favorites.destinations
      }`
    );
  }

  if (loading) {
    return (
      <main className="main-content favorites-page">
        <div className="favorites-header">
          <p className="eyebrow">{t.favorites.collection}</p>

          <h1>{t.favorites.title} ❤️</h1>

          <p>{t.favorites.loading}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content favorites-page">
      <section className="favorites-header">
        <p className="eyebrow">
          {t.favorites.collection}
        </p>

        <div className="favorites-title-row">
          <div>
            <h1>{t.favorites.title}</h1>

            <p>{t.favorites.description}</p>
          </div>

          <span className="favorites-count">
            {totalFavorites > 0
              ? favoritesSummary.join(" + ")
              : "0"}
          </span>
        </div>
      </section>

      {totalFavorites === 0 ? (
        <section className="favorites-empty">
          <div className="favorites-empty-icon">♡</div>

          <h2>{t.favorites.emptyTitle}</h2>

          <p>{t.favorites.emptyDescription}</p>

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            {t.favorites.explore}
          </button>
        </section>
      ) : (
        <section className="favorites-section">
          {favorites.length > 0 && (
            <div className="favorites-group">
              <div className="favorites-group-header">
                <h2>
                  🏠 {t.favorites.accommodationsTitle}
                </h2>
              </div>

              <div className="properties-grid">
                {favorites.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    showFavoriteButton
                    onFavoriteRemoved={
                      handleFavoriteRemoved
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {favoriteDestinations.length > 0 && (
            <div className="favorites-group favorites-destinations">
              <div className="favorites-group-header">
                <h2>
                  📍 {t.favorites.destinationsTitle}
                </h2>
              </div>

              <div className="destinations-grid">
                {favoriteDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    onFavoriteRemoved={
                      handleDestinationFavoriteRemoved
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

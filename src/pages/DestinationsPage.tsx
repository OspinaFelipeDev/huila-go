import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { destinations } from "../data/destinations";
import { getImageUrl } from "../utils/imageUrl";

export default function DestinationsPage() {
  const { language, t } = useLanguage();

  return (
    <main className="main-content">
      <section className="destinations-header">
        <span className="destinations-eyebrow">
          {t.destinations.eyebrow}
        </span>

        <h1>{t.destinations.title}</h1>

        <p>{t.destinations.description}</p>
      </section>

      <section className="destinations-section">
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <article
              className="destination-card"
              key={destination.id}
            >
              <div className="destination-card-image">
                <img
                  src={getImageUrl(destination.image)}
                  alt={destination.name[language]}
                />
              </div>

              <div className="destination-card-content">
                <h2>{destination.name[language]}</h2>

                <p className="destination-location">
                  📍 {destination.location[language]}
                </p>

                <p className="destination-description">
                  {destination.description[language]}
                </p>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="destination-button"
                >
                  {t.destinations.viewDestination}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

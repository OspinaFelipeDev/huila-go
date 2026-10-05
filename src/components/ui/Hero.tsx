import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div>
        <p className="eyebrow">{t.home.eyebrow}</p>

        <h2>{t.home.title}</h2>

        <p>{t.home.description}</p>
      </div>
    </section>
  );
}
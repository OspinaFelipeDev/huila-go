import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>
        {t.footer.description}
      </p>

      <p>
        {t.footer.developedBy}
      </p>
    </footer>
  );
}
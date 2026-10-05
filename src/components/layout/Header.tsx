import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { logout } from "../../utils/auth";

export function Header() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMenu}>
        HuilaGo
      </Link>

      {/* Botón hamburguesa - solo aparece en móvil */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav ${menuOpen ? "mobile-menu-open" : ""}`}>
        <NavLink to="/search" onClick={closeMenu}>
          {t.nav.search}
        </NavLink>

        <NavLink to="/destinations" onClick={closeMenu}>
          {t.nav.destinations}
        </NavLink>

        <NavLink to="/favorites" onClick={closeMenu}>
          {t.nav.favorites}
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          {t.nav.profile}
        </NavLink>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Activar modo claro"
              : "Activar modo oscuro"
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          type="button"
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={
            language === "es"
              ? "Cambiar a inglés"
              : "Cambiar a español"
          }
        >
          {language === "es" ? "🇺🇸 EN" : "🇪🇸 ES"}
        </button>

        {!loading &&
          (user ? (
            <button type="button" onClick={handleLogout}>
              {t.nav.logout}
            </button>
          ) : (
            <NavLink to="/login" onClick={closeMenu}>
              {t.nav.login}
            </NavLink>
          ))}
      </nav>
    </header>
  );
}

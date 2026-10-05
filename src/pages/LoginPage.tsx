import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { login } from "../utils/auth";
import { useLanguage } from "../context/LanguageContext";

type LocationState = {
  from?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const state = location.state as LocationState | null;
  const from = state?.from || "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setError(t.auth.login.invalidCredentials);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <span className="login-icon">🌎</span>

          <h1>{t.auth.login.title}</h1>

          <p>{t.auth.login.description}</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">
            📧 {t.auth.login.email}

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t.auth.login.emailPlaceholder}
              required
            />
          </label>

          <label htmlFor="password">
            🔒 {t.auth.login.password}

            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder={t.auth.login.passwordPlaceholder}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((current) => !current)
                }
                aria-label={
                  showPassword
                    ? t.auth.login.hidePassword
                    : t.auth.login.showPassword
                }
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.5 4 10 8-0.6 1.5-1.5 2.8-2.6 4" />
                    <path d="M6.6 6.6C4.6 7.8 3.2 9.8 2 12c1.5 4 5 8 10 8 1 0 2-.2 2.9-.5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </label>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            className="login-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? t.auth.login.loading
              : t.auth.login.submit}
          </button>

          <p className="login-footer">
            {t.auth.login.noAccount}{" "}
            <Link
              to="/register"
              className="auth-link"
            >
              {t.auth.login.createAccount}
            </Link>
          </p>
        </form>

        <p className="login-footer">
          {t.auth.login.footer}
        </p>
      </section>
    </main>
  );
}
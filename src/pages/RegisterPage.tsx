import { useState } from "react";
import { useNavigate } from "react-router";
import { register } from "../utils/auth";
import { useLanguage } from "../context/LanguageContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError(t.auth.register.errors.passwordMismatch);
      return;
    }

    if (password.length < 8) {
      setError(t.auth.register.errors.minLength);
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError(t.auth.register.errors.uppercase);
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError(t.auth.register.errors.lowercase);
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError(t.auth.register.errors.number);
      return;
    }

    setLoading(true);

    try {
      await register(email, password);

      navigate("/profile", { replace: true });
    } catch (error) {
      console.error(error);
      setError(t.auth.register.errors.registerFailed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <span className="login-icon">🌎</span>

          <h1>{t.auth.register.title}</h1>

          <p>{t.auth.register.description}</p>
        </div>

        <form className="login-form" onSubmit={handleRegister}>
          <label htmlFor="email">
            📧 {t.auth.register.email}

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t.auth.register.emailPlaceholder}
              required
            />
          </label>

          <label htmlFor="password">
            🔒 {t.auth.register.password}

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder={t.auth.register.passwordPlaceholder}
              required
            />

            <div className="password-requirements">
              <p className={hasMinLength ? "valid" : ""}>
                {hasMinLength ? "✓" : "○"}{" "}
                {t.auth.register.requirements.minLength}
              </p>

              <p className={hasUppercase ? "valid" : ""}>
                {hasUppercase ? "✓" : "○"}{" "}
                {t.auth.register.requirements.uppercase}
              </p>

              <p className={hasLowercase ? "valid" : ""}>
                {hasLowercase ? "✓" : "○"}{" "}
                {t.auth.register.requirements.lowercase}
              </p>

              <p className={hasNumber ? "valid" : ""}>
                {hasNumber ? "✓" : "○"}{" "}
                {t.auth.register.requirements.number}
              </p>
            </div>
          </label>

          <label htmlFor="confirmPassword">
            🔒 {t.auth.register.confirmPassword}

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              placeholder={
                t.auth.register.confirmPasswordPlaceholder
              }
              required
            />
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
              ? t.auth.register.loading
              : t.auth.register.submit}
          </button>
        </form>

        <p className="login-footer">
          {t.auth.register.hasAccount}{" "}
          <button
            type="button"
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            {t.auth.register.login}
          </button>
        </p>
      </section>
    </main>
  );
}
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { logout, updateUserProfile } from "../utils/auth";
import { useNavigate } from "react-router";
import { uploadImage } from "../services/cloudinary";
import { useLanguage } from "../context/LanguageContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      setDisplayName(user.displayName);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError(t.profile.errors.invalidImage);
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setError(t.profile.errors.imageTooLarge);
      return;
    }

    setProfileImage(file);
    setError("");
    setSuccess("");

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleEditProfile = () => {
    setDisplayName(user?.displayName || "");
    setError("");
    setSuccess("");
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDisplayName(user?.displayName || "");
    setProfileImage(null);
    setPreviewImage("");
    setError("");
    setSuccess("");
    setIsEditing(false);
  };

  const handleSaveProfile = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    const name = displayName.trim();

    if (!name) {
      setError(t.profile.errors.nameRequired);
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      let photoURL = user.photoURL || "";

      if (profileImage) {
        photoURL = await uploadImage(profileImage);
      }

      await updateUserProfile(user, name, photoURL);

      setProfileImage(null);
      setSuccess(t.profile.success.updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setError(t.profile.errors.updateFailed);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="profile-page">
      <section className="profile-card">
        <div className="profile-avatar">
          {previewImage ? (
            <img
              src={previewImage}
              alt={t.profile.previewPhoto}
            />
          ) : user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={t.profile.profilePhoto}
            />
          ) : (
            "👤"
          )}
        </div>

        <div className="profile-info">
          <h1>
            {user?.displayName || t.profile.title}
          </h1>

          <p className="profile-email">
            📧 {user?.email}
          </p>

          <p>{t.profile.description}</p>

          {!isEditing && (
            <button
              type="button"
              className="profile-edit-button"
              onClick={handleEditProfile}
            >
              ✏️ {t.profile.edit}
            </button>
          )}
        </div>
      </section>

      {isEditing && (
        <section className="profile-section profile-edit-section">
          <h2>{t.profile.editTitle}</h2>

          <form
            className="profile-edit-form"
            onSubmit={handleSaveProfile}
          >
            <label htmlFor="displayName">
              👤 {t.profile.name}

              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(event) =>
                  setDisplayName(event.target.value)
                }
                placeholder={t.profile.namePlaceholder}
                maxLength={50}
                required
              />
            </label>

            <div className="profile-image-upload">
              <label
                htmlFor="profileImage"
                className="profile-image-button"
              >
                📷 {t.profile.changePhoto}
              </label>

              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="profile-image-input"
              />

              {profileImage && (
                <p className="profile-image-name">
                  {profileImage.name}
                </p>
              )}

              <small>{t.profile.imageFormats}</small>
            </div>

            {error && (
              <p className="profile-error">
                {error}
              </p>
            )}

            <div className="profile-edit-actions">
              <button
                type="submit"
                className="profile-save-button"
                disabled={saving}
              >
                {saving
                  ? t.profile.saving
                  : `💾 ${t.profile.saveChanges}`}
              </button>

              <button
                type="button"
                className="profile-cancel-button"
                onClick={handleCancelEdit}
                disabled={saving}
              >
                {t.profile.cancel}
              </button>
            </div>
          </form>
        </section>
      )}

      {success && (
        <p className="profile-success">
          ✅ {success}
        </p>
      )}

      <section className="profile-section">
        <h2>{t.profile.accountInfo}</h2>

        <div className="profile-data">
          <div className="profile-data-item">
            <span>📧 {t.profile.email}</span>

            <strong>{user?.email}</strong>
          </div>

          <div className="profile-data-item">
            <span>🆔 {t.profile.userId}</span>

            <strong>{user?.uid}</strong>
          </div>
        </div>
      </section>

      <section className="profile-actions">
        <button
          type="button"
          onClick={() => navigate("/favorites")}
        >
          ❤️ {t.profile.favorites}
        </button>

        <button
          type="button"
          onClick={() => navigate("/booking")}
        >
          📋 {t.profile.bookings}
        </button>

        <button
          type="button"
          onClick={handleLogout}
        >
          🚪 {t.profile.logout}
        </button>
      </section>
    </main>
  );
}
export function getImageUrl(path: string): string {
  const cleanPath = path.replace(/^\/public\//, "/");

  return `${import.meta.env.BASE_URL}${cleanPath.replace(/^\/+/, "")}`;
}
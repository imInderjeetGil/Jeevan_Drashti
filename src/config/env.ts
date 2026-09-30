const directusUrl = import.meta.env.VITE_DIRECTUS_URL;

if (!directusUrl) {
  throw new Error("VITE_DIRECTUS_URL is not configured");
}

export const env = {
  directusUrl,
};
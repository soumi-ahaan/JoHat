const BASE_URL = "https://johat.ahaanmedia.com/wp-json/wp/v2";

// 👉 Get all properties
export const getProperties = async () => {
  const res = await fetch(`${BASE_URL}/properties?_embed`);
  return await res.json();
};

// 👉 Get single property (fallback if needed)
export const getPropertyById = async (id) => {
  const res = await fetch(`${BASE_URL}/properties/${id}?_embed`);
  return await res.json();
};
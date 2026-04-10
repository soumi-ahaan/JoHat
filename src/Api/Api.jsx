const BASE_URL = "https://admin.johat-enterprises.com/wp-json/wp/v2";

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

// 👉 Get all services
export const getServices = async () => {
  const res = await fetch(`${BASE_URL}/services?_embed`);
  return await res.json();
};

// 👉 Get media by ID
export const getMediaById = async (id) => {
  const res = await fetch(`${BASE_URL}/media/${id}`);
  return await res.json();
};

import { BASE_URL } from "./consts";

export const baseFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res;
};

export const api = {
  get: async <T>(url: string, options: RequestInit = {}) => {
    const response = await baseFetch(url, options);
    const data: T = await response.json();

    return data;
  },
  post: async <T>(url: string, body: any, options: RequestInit = {}) => {
    const response = await baseFetch(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
    const data: T = await response.json();

    return data;
  },
  put: async <T>(url: string, body: any, options: RequestInit = {}) => {
    const response = await baseFetch(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
    const data: T = await response.json();

    return data;
  },
  delete: async <T>(url: string, options: RequestInit = {}) => {
    const response = await baseFetch(url, {
      ...options,
      method: "DELETE",
    });
    const data: T = await response.json();

    return data;
  },
};

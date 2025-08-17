const BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/$/, "")) || "http://localhost:4000";

export async function api(path, options = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${url}: ${msg || res.statusText}`);
  }
  return res.json();
}


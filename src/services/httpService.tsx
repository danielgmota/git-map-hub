import axios from "axios";

export async function get(url: string) {
  const { data } = await axios.get(url);
  return data;
}

export async function post(url: string, body: {}, headers: {}) {
  const { data } = await axios.post(url, body, { headers });
  return data;
}

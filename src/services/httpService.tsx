import axios from "axios";

export async function get(url: string) {
  const { data } = await axios.get(url);
  return data;
}

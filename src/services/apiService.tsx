import { get } from "./httpService";
import { urlGitHub } from "../environments/environment";

export async function apiGetGithubUser(user: string) {
  try {
    const data = await get(`${urlGitHub}/users/${user}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

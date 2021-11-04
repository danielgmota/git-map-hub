import { get } from "./httpService";
import { tokenMapbox, urlGitHub, urlMapbox } from "../environments/environment";

export async function apiGetGithubUser(user: string) {
  try {
    const data = await get(`${urlGitHub}/users/${user}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function apiGetMapboxLocation(location: any = "brazil") {
  try {
    const url = `${urlMapbox}/mapbox.places/${location}.json?access_token=${tokenMapbox}`;
    const data = await get(url);
    return data.features[0].geometry.coordinates;
  } catch (err) {
    console.error(err);
  }
}

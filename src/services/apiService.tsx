import { get, post } from "./httpService";
import {
  githubClientId,
  githubClientSecret,
  tokenMapbox,
  urlGitHub,
  urlMapbox,
} from "../environments/environment";

export async function apiGetGithubUser(user: string) {
  try {
    const data = await get(`${urlGitHub}/users/${user}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function apiGetGithubRepos(url: string) {
  try {
    const data = await get(url);
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

export async function apiPostGithubOauth(code: string) {
  try {
    const url = "https://github.com/login/oauth/access_token";
    const body = {
      client_id: githubClientId,
      client_secret: githubClientSecret,
      code,
    };
    const headers = {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    };
    const data = await post(url, body, headers);
    return data;
  } catch (err) {
    console.error(err);
  }
}

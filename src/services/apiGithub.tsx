import { urlGitHub } from "../environments/environment";
import axios from "axios";

const api = axios.create({
  baseURL: urlGitHub,
});

export default api;

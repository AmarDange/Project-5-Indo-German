import axios from "axios";

// axios.defaults.baseURL = "https://8000-amardange-indo-german-74rf7n9y0o.us2.codeanyapp.com/";
axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
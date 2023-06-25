import axios from "axios";

axios.defaults.baseURL = "https://indo-german-pp5-e488026ec98b.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
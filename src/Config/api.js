import axios from "axios";

export const api = axios.create({
  baseURL: "https://newpeak.biz/api/",
  timeout: 5000,
});

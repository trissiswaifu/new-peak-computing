import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://newpeak.biz/api/",
  timeout: 5000,
});

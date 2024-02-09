import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-rocketnotes-z6i6.onrender.com",
});

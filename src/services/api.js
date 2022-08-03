import axios from "axios";

const api = axios.create({
  baseURL: "https://k-bank.vercel.app/api"
});

export { api };

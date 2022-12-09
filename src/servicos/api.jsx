import axios from "axios";

const api = axios.create({
    baseURL: "https://pokemon.danielpimentel.com.br/v1",
  });

export default api;
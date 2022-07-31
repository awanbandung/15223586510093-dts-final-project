import axios from "axios";

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_RAWG_KEY,
  },
});

export default rawgApi;

import axios from "axios";

const ipApiClient = axios.create({
  baseURL: "https://ipapi.co/json/",
});

export default ipApiClient;

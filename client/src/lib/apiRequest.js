import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://api-five-snowy.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;

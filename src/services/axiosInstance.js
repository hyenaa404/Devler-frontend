
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:8080.Devler",
  timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;

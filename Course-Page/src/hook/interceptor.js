
import axios from "axios";

const api_Base_URL = "https://sepehracademy.liara.run";

const apiClient = axios.create({
  baseURL: api_Base_URL,
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
)

export default apiClient;

  
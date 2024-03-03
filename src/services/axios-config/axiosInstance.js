import axios from "axios";
import store from "../../store/store";

let axiosInstance;

axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error) {
      store.commit("setServerError", {
        status: true, 
        message: "We're sorry, we encountered a problem. Please try again."});
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

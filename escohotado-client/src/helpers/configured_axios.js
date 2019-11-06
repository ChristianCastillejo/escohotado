import axios from "axios";
import cookie from "react-cookies";

// export const baseURL = "http://localhost:4000";
// export const baseURL = "http://192.168.2.6:4000";
const baseURL = "https://escohotado.herokuapp.com";

const axiosConfig = {
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export const axiosInstance = axios.create(axiosConfig);

const jwt = cookie.load("jwt");
if (jwt) {
  axiosInstance.defaults.headers.common.Authorization = `Auth Token ${jwt}`;
}

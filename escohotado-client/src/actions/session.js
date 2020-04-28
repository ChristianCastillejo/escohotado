import { axiosInstance } from "../helpers/configured_axios";
import { FETCH_LOGGED_IN_USER, LOGOUT } from "./actionTypes";
import cookie from "react-cookies";

function setTokens(response) {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  cookie.save("uid", response.headers.uid, { expires });
  cookie.save("client", response.headers.client, { expires });
  cookie.save("access-token", response.headers["access-token"], { expires });
  localStorage.setItem("user", JSON.stringify(response.data));
}
export function login({ email, password }) {
  return (dispatch) => {
    axiosInstance
      .post(`/auth/sign_in`, {
        email,
        password,
      })
      .then((response) => {
        setTokens(response);
        axiosInstance.defaults.headers.common.uid = response.headers.uid;
        axiosInstance.defaults.headers.common.client = response.headers.client;
        axiosInstance.defaults.headers.common["access-token"] =
          response.headers["access-token"];

        dispatch(fetchLoggedInUser());
      })
      .catch(function (error) {
        if (error.response) {
          alert("Usuario y/o contraseña incorrectos.");
        }
      });
  };
}

export function logout() {
  cookie.remove("jwt");

  return {
    type: LOGOUT,
    payload: {},
  };
}

export function fetchLoggedInUser() {
  const request = axiosInstance.get(`/loggedinuser`);

  return {
    type: FETCH_LOGGED_IN_USER,
    payload: request,
  };
}

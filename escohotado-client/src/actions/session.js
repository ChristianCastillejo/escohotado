import { axiosInstance } from "../helpers/configured_axios";
import { FETCH_LOGGED_IN_USER, LOGOUT } from "./actionTypes";
import cookie from "react-cookies";

export function setJWT(token) {
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  cookie.save("jwt", token, { expires });
}

export function login({ email, password }) {
  return dispatch => {
    axiosInstance
      .post("/login/", {
        email,
        password
      })
      .then(response => {
        setJWT(response.data.auth_token);
        axiosInstance.defaults.headers.common.Authorization = `Authorization ${response.data.auth_token}`;
        dispatch(fetchLoggedInUser());
      })
      .catch(function(error) {
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
    payload: {}
  };
}

export function fetchLoggedInUser() {
  const request = axiosInstance.get(`/loggedinuser`);

  return {
    type: FETCH_LOGGED_IN_USER,
    payload: request
  };
}

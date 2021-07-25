import axios from "axios";

export function login(loginData) {
  return axios.post(`${process.env.REACT_APP_API}/auth/local`, loginData);
}

export function register(registerData) {
  return axios.post(
    `${process.env.REACT_APP_API}/auth/local/register`,
    registerData
  );
}

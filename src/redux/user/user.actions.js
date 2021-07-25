import { userLoginTypes, userRegisterTypes } from "./user.types";

export const userLoginStart = () => ({
  type: userLoginTypes.USER_LOGIN_START
});
export const userLoginSuccess = (payload) => ({
  type: userLoginTypes.USER_LOGIN_SUCCESS,
  payload
});
export const userLoginFailure = (payload) => ({
  type: userLoginTypes.USER_LOGIN_FAILURE,
  payload
});

export const userRegisterStart = () => ({
  type: userRegisterTypes.USER_REGISTER_START
});
export const userRegisterSuccess = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_SUCCESS,
  payload
});
export const userRegisterFailure = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_FAILURE,
  payload
});

export const userLogout = () => ({
  type: userLoginTypes.USER_LOGOUT_SUCCESS,
});
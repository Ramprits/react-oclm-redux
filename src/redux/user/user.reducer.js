import { userLoginTypes, userRegisterTypes } from "./user.types";

const initialState = {
  currentUser: null,
  loading: false,
  errorMessage: ""
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: ""
      });
    case userLoginTypes.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        currentUser: payload
      });

    case userLoginTypes.USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload
      });

    case userLoginTypes.USER_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: null,
        currentUser: null
      });

    case userRegisterTypes.USER_REGISTER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null,
        currentUser: null
      });

    case userRegisterTypes.USER_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: null,
        currentUser: payload
      });



    default:
      return state;
  }
};

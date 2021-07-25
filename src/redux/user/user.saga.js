import { all, call, put, takeEvery } from "redux-saga/effects";
import { login, register } from "../../services/user.service";
import {
  userLoginFailure,
  userLoginSuccess,
  userRegisterFailure,
  userRegisterSuccess
} from "./user.actions";
import { userLoginTypes, userRegisterTypes } from "./user.types";

// ********************** Register user here ***************************
function* registerUserStart(action) {
  try {
    const { data } = yield register(action.payload);
    yield put(userRegisterSuccess(data));
    action.history.push("/login");
  } catch (error) {
    yield put(userRegisterFailure(error.message));
  }
}

function* watchUserRegister() {
  yield takeEvery(userRegisterTypes.USER_REGISTER_START, registerUserStart);
}

// ********************** Login user here ***************************
function* loginUserStart(action) {
  try {
    const { data } = yield login(action.payload);
    yield put(userLoginSuccess(data));
    action.history.push("/");
  } catch (error) {
    yield put(userLoginFailure(error.message));
  }
}

function* watchUserLogin() {
  yield takeEvery(userLoginTypes.USER_LOGIN_START, loginUserStart);
}


// ********************** logout user login ****************

function* logoutUserStart(action) {
  try {
    yield put(userLogout());
    action.history.push("/login");
    yield console.log("USER LOGOUT SUCCESS");
  } catch (error) {
    yield console.log("USER LOGOUT FAILED");
  }
}

function* watchUserLogout() {
  yield takeEvery(userLoginTypes.USER_LOGOUT_SUCCESS, logoutUserStart);
}

export function* userSagas() {
  yield all([call(watchUserLogin), call(watchUserRegister), call(watchUserLogout)]);
}

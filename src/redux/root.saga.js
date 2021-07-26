import { all, call } from "redux-saga/effects";
import { orderSagas } from "./order/order.sagas";
import { userSagas } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(orderSagas)]);
}

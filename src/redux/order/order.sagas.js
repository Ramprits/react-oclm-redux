import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchOrder } from "../../services/order.service";
import { orderFailure, orderSuccess } from "./order.actions";
import { orderTypes } from "./order.type";

function* orderStartAsync(action) {
    try {
        const { data } = yield call(fetchOrder(action.page));
        yield put(orderSuccess(data));
    } catch (error) {
        yield put(orderFailure(error.message));
    }
}

function* watchOrderStart() {
    yield takeEvery(orderTypes.ORDER_START, orderStartAsync);
}

export function* orderSagas() {
    yield all([call(watchOrderStart)]);
}
import { orderTypes } from "./order.type";

export const orderStart = () => ({
    type: orderTypes.ORDER_START,
});
export const orderSuccess = (payload) => ({
    type: orderTypes.ORDER_SUCCESS,
    payload,
});
export const orderFailure = (payload) => ({
    type: orderTypes.ORDER_FAILURE,
    payload,
});

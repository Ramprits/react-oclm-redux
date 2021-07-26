import { orderTypes } from "./order.type"

const initialState = {
    orders: [],
    loading: false,
    errorMessage: ""
}

export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case orderTypes.ORDER_START:
            return Object.assign({}, state, {
                loading: true,
                errorMessage: ""
            })

        case orderTypes.ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                errorMessage: "",
                orders: payload
            })

        case orderTypes.ORDER_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errorMessage: payload
            })

        default:
            return state
    }
}

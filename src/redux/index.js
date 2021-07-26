import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderReducer } from "./order/order.reducer";

import { userReducer } from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData"]
};

const rootReducer = combineReducers({
  userData: userReducer,
  orderData: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);

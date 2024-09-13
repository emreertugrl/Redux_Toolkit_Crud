import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

const store = configureStore({
  reducer: { counterReducer, crudReducer },
});
// projeyi tanıtmak için export ettik
export default store;

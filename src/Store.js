import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./tableSlice";

const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { getReducer } from "./slices/slice";



  let store = configureStore({
    reducer: {
        getReducer: getReducer,
    }
})

export default store
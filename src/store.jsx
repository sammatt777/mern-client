import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./redux/ApiSlice";



export  const store= configureStore({

    reducer:{
        [ApiSlice.reducerPath]:ApiSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  devTools: true,


})
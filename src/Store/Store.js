import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/AuthSlice"

export const Store = configureStore({
    reducer: {
       
        auth: authSlice.reducer
    }
})
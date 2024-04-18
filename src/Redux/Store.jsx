import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Reducer/CartReducer"

export const store=configureStore({
    reducer:{
        cartReducer:Cart
    }
})
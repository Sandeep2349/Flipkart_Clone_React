import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Redux/Cart/Cart";
import cartOper from "./Redux/Cart/Cart";

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        cart:cartOper,
    }
});
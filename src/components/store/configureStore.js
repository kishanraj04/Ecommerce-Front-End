import { configureStore } from "@reduxjs/toolkit";
import { category } from "./categorySlice";
import {cartReducer} from './cartSlice'

const store = configureStore({
  reducer : {
    items : category,
    cart : cartReducer
  }
})

export default store


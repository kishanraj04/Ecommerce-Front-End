import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { findCartItem } from "../utils/increaseDecreaseCartQty";
import { getDataUsingId } from "../utils/getDataUsingId";

const initialState = {
  cartItem: [],
  isLoading: false,
  isLoadingSucess: false,
  cartItemqty: 0,
  isAdded: false,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItem.push({ ...action.payload, qty: 1 });
      state.cartItemqty = state.cartItemqty + 1;
    },
    deleteItem: (state, action) => {
      const bachal = state.cartItem.filter((item) => item.id != action.payload);
      return { ...state, cartItem: bachal, cartItemqty: state.cartItemqty - 1 };
    },
    increaseQty: (state, action) => {
      state.cartItemqty+=1
      const updateCart = findCartItem(
        action.payload.id,
        state.cartItem,
        action.payload.type
      );
      state.cartItem = updateCart;
    },
    decreaseQty: (state, action) => {
        state.cartItemqty-=1
        const {qty,id} = getDataUsingId(action.payload.id, state.cartItem)
        if(qty<=1)
        {
          
        }
        const updateCart = findCartItem(
            action.payload.id,
            state.cartItem,
            action.payload.type
          );
          state.cartItem = updateCart;
    },
    toggleAddRemove: (state, action) => {},
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseQty,
  decreaseQty,
  toggleAddRemove,
} = cartSlice.actions;

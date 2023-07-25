import { createSlice } from "@reduxjs/toolkit";
import { shoppingCartModel } from "../../Interfaces";

const initialState: shoppingCartModel = {
  cartItems: [],
};

export const shoppingCartSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cartItems = action.payload;
    },
    updateQuantity: (state, action) => {
      //payload - 1. The cart item object that needs to be updated, 2. new quantity
      state.cartItems = state.cartItems?.map((item) => {
        if (item.id === action.payload.cartItem.id) {
          item.quantity = action.payload.quantity;
          //if item id matches the id of the cartItem from payload then update the quantity
        }
        return item; // else do nothing and return the item object untouched
      });
    },
    removeFromCart: (state, action) => {
      //payload - cart item that needs to be removed from the cart
      state.cartItems = state.cartItems?.filter((item) => {
        if (item.id === action.payload.cartItem.id) {
          return null;
          // if item id matches the id of the cartItem sent through payload then delete the item
        }
        return item; // else return the item
      });
    },
  },
});

export const { setShoppingCart, updateQuantity, removeFromCart } =
  shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export type cartItemType = {
  id: number;
  name: string;
  price:number;
  imageUrl: string;
  quantity?: number;
}

export interface CartState {
  hidden: boolean,
  cartItems: cartItemType[],
  totalItemCount: number,
  totalPrice: number,
}

const initialState: CartState = {
  hidden: true,
  cartItems: [],
  totalItemCount: 0,
  totalPrice: 0,
}

function calQuantity(items: cartItemType[]) {
  let totalItemCount = 0;
  let totalPrice = 0;
  if(items.length > 0) {
    for(let i=0; i<items.length; i++) {
      totalItemCount += items[i].quantity;
      totalPrice += (items[i].quantity * items[i].price);
    }
  }
  return {totalItemCount, totalPrice};
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
      toggleCartHidden: (state) => {
        //console.log(action.payload);
        state.hidden = !state.hidden;
      },
      addItem: (state, action: PayloadAction<cartItemType[]>) => {
        console.log(current(state.cartItems));
        const indexToUpdate = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
        if( indexToUpdate !== -1) {
          state.cartItems[indexToUpdate].quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
        //const items = current(state.cartItems);
        state.totalItemCount = calQuantity(current(state.cartItems)).totalItemCount;
        state.totalPrice = calQuantity(current(state.cartItems)).totalPrice;
      },
      clearItemFromCart: (state, action: PayloadAction<cartItemType[]>) => {
        // const indexToClear = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
        // const items = current(state.cartItems);
        // items.slice(indexToClear, 1);
        // items.forEach(item => state.cartItems.push(item));
        state.cartItems.filter((cartItem) => cartItem.id === action.payload.id);
        state.totalItemCount = calQuantity(current(state.cartItems)).totalItemCount;
        state.totalPrice = calQuantity(current(state.cartItems)).totalPrice;
      },
      removeItemQuantity: (state, action: PayloadAction<cartItemType[]>) => {
        const indexToRemove = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
        state.cartItems[indexToRemove].quantity -= 1;
        if(state.cartItems[indexToRemove].quantity === 0) {
          state.cartItems.slice(indexToRemove, 1);
        }
        state.totalItemCount = calQuantity(current(state.cartItems)).totalItemCount;
        state.totalPrice = calQuantity(current(state.cartItems)).totalPrice;
      },
      addItemQuantity: (state, action: PayloadAction<cartItemType[]>) => {
        const indexToAdd = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
        state.cartItems[indexToAdd].quantity += 1;
        state.totalItemCount = calQuantity(current(state.cartItems)).totalItemCount;
        state.totalPrice = calQuantity(current(state.cartItems)).totalPrice;
      },
    },
});


export const { toggleCartHidden, addItem, clearItemFromCart, removeItemQuantity, addItemQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
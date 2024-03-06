import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  quantity: number;
}

export interface CounterState {
  products: Product[];
}

const initialState: CounterState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
        title: string;
        desc: string;
        img: string;
        price: number;
      }>
    ) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

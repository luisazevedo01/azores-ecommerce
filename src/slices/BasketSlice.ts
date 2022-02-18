import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface IBasketState {
  items: number[];
}

// Define the initial state using that type
const initialState: IBasketState = {
  items: Array(5).fill(0),
};

export const BasketSlice = createSlice({
  name: "basket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      const replicItems = state.items.slice();
      state.items = state.items.slice();
    },
    removeItem: (state) => {
      state.items = state.items.slice();
    },
    addByAmount: (state, action: PayloadAction<number>) => {
      state.items = state.items.slice();
    },
  },
});

export const { addItem, removeItem, addByAmount } = BasketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketItems = (state: any) => state.basket.items;

export default BasketSlice.reducer;

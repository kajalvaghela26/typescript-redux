import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, apiResponse } from "./interfaceFile";
import { rootState } from "./stores";

const initialState: CartState = {
  cart: [],
  loading: false,
  error: null,
};
const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    requestCart(state) {
      state.loading = true;
      state.error = '';
    },
    SuccessCart(state, action: PayloadAction<apiResponse[]>) {
      state.loading = false;
      state.cart = action.payload;
    },
    FailCart(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    
  }
})
export const cartAction = cartReducer.actions;

export const getCartData= (state:rootState)=> state.cart.cart;
const reducerCart=cartReducer.reducer;
export default reducerCart;

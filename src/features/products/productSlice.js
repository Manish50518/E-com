import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productDetails(state, action) {
      state.product = action.payload;
    },
    noProductDetails(state) {
      state.product = null;
    },
  },
});
export const { productDetails, noProductDetails } = productSlice.actions;

export default productSlice.reducer;

export const getProductDetials = (state) => state.product.product;

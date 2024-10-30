import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const ProductSlice = createSlice({
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
export const { productDetails, noProductDetails } = ProductSlice.actions;

export default ProductSlice.reducer;

export const getProductDetials = (state) => state.product.product;

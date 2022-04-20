import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./ProductsSlice";

export default configureStore({
  reducer: {
    products: productsSlice.reducer
  },
});

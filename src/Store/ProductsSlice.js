import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    const response = await fetch(`http://localhost:8000/products`).then(
      (data) => data.json()
    );
    return response;
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      console.log('pending')
      state.loading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      console.log('fulfilled')
      state.loading = false
      state.products = payload
    },
    [getProducts.rejected]: (state) => {
      console.log('rejected')
      state.loading = false
    },
  },
});

export const productsReducer = productsSlice.reducer;

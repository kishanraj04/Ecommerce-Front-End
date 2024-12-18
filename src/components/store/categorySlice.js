import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isProductLoading: false,
  isProductLoadingSuccess: false,
};
const findProduct = (state , id) => {
  return state.products.find((product) => product.id == id)
}
 const categorySlice = createSlice({
  name: 'categoryData',  
  initialState,
  reducers: {
    getAllCategoryProductStart: (state,action) => {
      state.products = action.payload
      console.log(action.payload);
    },

    getAllCategoryProductSuccess: (state, action) => {
      state.isProductLoading = false;
      state.isProductLoadingSuccess = true;
      state.categoryList = action.payload;
    },

    getAllCategoryProductFailure: (state) => {
      state.isProductLoading = false;
      state.isProductLoadingSuccess = false;
    },
    setCartStatus:(state,action) => {
      
      const existingProduct = findProduct(state , action.payload.id)
      existingProduct.cartStatus = action.payload.status
    }
  },
});

export const category = categorySlice.reducer

export const {
  getAllCategoryProductStart,
  getAllCategoryProductSuccess,
  getAllCategoryProductFailure,
  setCartStatus
} = categorySlice.actions;

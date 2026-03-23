import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice"

// Create Redux store
const store = configureStore({
  reducer: {
    // Cart state management
    cart:cartReducer,
    // Search state management
    search:searchReducer
  },
})

export default store;

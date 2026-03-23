import { createSlice } from "@reduxjs/toolkit"

// Create cart slice for cart state management
const cartSlice = createSlice({
  name:"cart",
   // Initial state with empty cart items array
  initialState:{ items:[] },

  reducers:{
    // Add product to cart
    addToCart:(state,action)=>{
      // Check if product already exists in cart
      const item = state.items.find(i=>i.id===action.payload.id)

      // If item exists, increase quantity
      if(item){
        item.quantity += 1
      }else{
        // If item does not exist, add new item with quantity 1
        state.items.push({...action.payload, quantity:1})
      }
    },

    // Remove product completely from cart
    removeFromCart:(state,action)=>{
      state.items = state.items.filter(i=>i.id!==action.payload)
    },

    // Increase quantity of a specific cart item
    increaseQty:(state,action)=>{
      const item = state.items.find(i=>i.id===action.payload)
      item.quantity++
    },

    // Decrease quantity of a specific cart item
    decreaseQty:(state,action)=>{
      const item = state.items.find(i=>i.id===action.payload)
      if(item.quantity>1) item.quantity--
    },

    // Clear all items from cart
    clearCart:(state)=>{
      state.items=[]
    }

  }
})

export const {addToCart,removeFromCart,increaseQty,decreaseQty,clearCart} = cartSlice.actions
export default cartSlice.reducer
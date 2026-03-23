import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

// Create search slice to manage search text state
const searchSlice=createSlice({
    name:"search",
    initialState:{
        text:""
    },
    reducers:{
        // Update search text in Redux state
        setSearch:(state,action)=>{
            state.text = action.payload
        }
    }
})
    

export const {setSearch} = searchSlice.actions
export default searchSlice.reducer
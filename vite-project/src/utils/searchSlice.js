import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const searchSlice=createSlice({
    name:"search",
    initialState:{
        text:""
    },
    reducers:{
        setSearch:(state,action)=>{
            state.text = action.payload
        }
    }
})
    

export const {setSearch} = searchSlice.actions
export default searchSlice.reducer
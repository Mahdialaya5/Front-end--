import { createSlice } from "@reduxjs/toolkit";

const productslice=createSlice({
name:'product',
initialState:{
    products:[]
},
reducers:{
      get:(state,action)=>{
       state.products=action.payload
      }
}

})

export const { get} = productslice.actions
export default productslice.reducer
import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
name:'user',
initialState:{
    user:{},
    error:null
},
reducers:{
      currentuser:(state,action)=>{
              state.user=action.payload
     },
     geterror:(state,action)=>{
        state.error=action.payload
     }
}

})

export const { currentuser,geterror} = userslice.actions
export default userslice.reducer
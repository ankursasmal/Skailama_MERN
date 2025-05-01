import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
 
  }

export const userSlice = createSlice({
  name:'user',
    initialState,
  reducers: {
   setUserDetails: (state,action)=>{
     state.user=action.payload;
    //  console.log("wkkw",action.payload)
    },

    StoreProjectId:(state,action)=>{
state.user={...state.user,ProjectId:action.payload}
console.log(state.user.ProjectId);
    }
     
  // ************ not efficient when page reload it will null **************
  //  addToCart: (state, action) => {
  //   state.cart.cartItems.push(action.payload);  // Add item to cart array
  //   state.cart.cartNo++;  // Increment cart count
  // }, 
  },
  
})

// Action creators are generated for each case reducer function
export const { setUserDetails,StoreProjectId } = userSlice.actions

export default userSlice.reducer
import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  reducers: {
    login: (state,action) => {
      state.user=action.payload
      // console.log(state.user)
    },
   
    logout: (state) => {
      state.user = null;
    },
     
  },
});

export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => {
//   console.log(state.user)
//   return state.user.user
// };
export default userSlice.reducer;

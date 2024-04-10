import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name: "firstSlice",
  initialState: {
    Login:false,
    MyDatas: [],
    MyContext: {},
   
  },
  reducers: {
    login: (state, action) => {
      state.MyDatas = action.payload;
    },
  },
});

export const { login } = authslice.actions;
export default authslice.reducer;

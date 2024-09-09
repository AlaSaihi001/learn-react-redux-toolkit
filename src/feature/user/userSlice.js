import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[
      {id: 1, name: "John"},
      {id: 2, name: "Winnie"},
      {id: 3, name: "Lester"},
    ],
    loading: true
  }
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, {payload}) => {
      console.log(payload)
      return {
        ...state, 
        users: state.users.filter(user => user.id !== payload) 
      }
    }
  }
})


export const {deleteUser} = userSlice.actions
export default userSlice.reducer



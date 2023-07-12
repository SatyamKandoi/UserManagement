import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: 1,
  Dept: {},
  allEmployees: [],
  work:{},
  currentUser: {},
};
export const employeeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setAllEmployees: (state, action) => {
      state.allEmployees = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setDept: (state, action) => {
      state.Dept = action.payload;
    },
    setWork: (state, action) => {
      state.work = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  setLogin,
  setDept,
  setLogout,
  setWork,
  setUserRole,
  setAllEmployees,
  setCurrentUser,
} = employeeSlice.actions;

export default employeeSlice.reducer;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import employeeSlice from "../redux/employeeSlice";
import { getAllRTKEmployees } from "../services/employee";

export const store = configureStore({
  reducer: {
    [getAllRTKEmployees.reducerPath]: getAllRTKEmployees.reducer,
    Employee: employeeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllRTKEmployees.middleware),
});

setupListeners(store.dispatch);

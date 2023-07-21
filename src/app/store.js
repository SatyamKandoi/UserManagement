import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import employeeSlice from "../redux/employeeSlice";
import { getAllRTKEmployees } from "../services/employee";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    [getAllRTKEmployees.reducerPath]: getAllRTKEmployees.reducer,
    Employee: employeeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(getAllRTKEmployees.middleware),
});

setupListeners(store.dispatch);

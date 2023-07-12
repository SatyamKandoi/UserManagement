import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllRTKEmployees = createApi({
  reducerPath: "getRTKEmployees",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getAllRTKEmployees: builder.query({
      query: () => ({
        url: "emp",
        method: "GET",
      }),
    }),
    getWorkStatus: builder.query({
      query: () => ({
        url: "wrkcount",
        method: "GET",
      }),
    }),
    login: builder.query({
      query: () => ({
        url: "login",
        method: "POST",
      }),
    }),

  }),
});


export const { useGetAllRTKEmployeesQuery ,useGetWorkStatusQuery,useLoginQuery} = getAllRTKEmployees;


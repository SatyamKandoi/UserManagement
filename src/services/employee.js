import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllRTKEmployees = createApi({
  reducerPath: "getRTKEmployees",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getAllRTKEmployees: build.query({
      query: () => ({
        url: "emp",
        method: "GET",
      }),
    }),
    getWorkStatus: build.query({
      query: () => ({
        url: "wrkcount",
        method: "GET",
      }),
    }),
    getlogin: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      // invalidatesTags:['Employee']
    }),
    getregister: build.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      // invalidatesTags:['Employee']
    }),

    logout: build.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
    update: build.mutation({
      query: (body) => ({
        url: "update",
        method: "POST",
        body,
      }),
    }),
    getBirthday: build.query({
      query: () => ({
        url: "greeting",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllRTKEmployeesQuery,
  useGetWorkStatusQuery,
  useGetloginMutation,
  useGetregisterMutation,
  useGetBirthdayQuery,
  useLogoutMutation,
  useUpdateMutation,
} = getAllRTKEmployees;

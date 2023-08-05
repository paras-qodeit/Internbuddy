import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000",
  baseUrl: "https://backend-qodeit.onrender.com",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: user,
      }),
    }),

    login: builder.mutation({
      query: (user) => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),

    certificateReq: builder.mutation({
      query: (data) => ({
        url: "/api/ask/certificate",
        method: "POST",
        body: data,
      }),
    }),

    paymentHandle: builder.mutation({
      query: (body) => ({
        url: "/payment",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useCertificateReqMutation,
  usePaymentHandleMutation,
} = apiSlice;
export default apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://booklibrary20.vercel.app/api/",
    }),
    endpoints: () => ({}), // Extend in features
});

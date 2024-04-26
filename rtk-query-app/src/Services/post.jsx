import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getpostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    getPostByLimit: builder.query({
      query: (limit) => ({
        url: `posts?_limit=${limit}`,
        method: "GET",
      }),
    }),

    deletePosts: builder.mutation({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetpostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostsMutation,
} = postApi;

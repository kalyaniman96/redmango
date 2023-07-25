import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shoppingCartApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
  }),
  tagTypes: ["ShoppingCart"],
  endpoints: (builder) => ({
    getShoppingCart: builder.query({
      query: (userId) => ({
        url: `shoppingcart`,
        method: "GET",
        params: {
          userId,
        },
      }),
      providesTags: ["ShoppingCart"],
    }),
    updateShoppingCart: builder.mutation({
      query: ({ userId, menuItemId, updateQuantityBy }) => ({
        url: "shoppingcart",
        method: "POST",
        params: {
          userId,
          menuItemId,
          updateQuantityBy,
        },
      }),
      invalidatesTags: ["ShoppingCart"],
    }),
    deleteShoppingCart: builder.mutation({
      query: ({ menuItemId }) => ({
        url: "shoppingcart",
        method: "DELETE",
        params: {
          menuItemId,
        },
      }),
    }),
  }),
});

export const {
  useGetShoppingCartQuery,
  useUpdateShoppingCartMutation,
  useDeleteShoppingCartMutation,
} = shoppingCartApi;
export default shoppingCartApi;

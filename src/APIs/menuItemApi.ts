import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
  }),
  tagTypes: ["MenuItems"],
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => ({
        url: "menuitem",
      }),
      providesTags: ["MenuItems"],
    }),

    getMenuItemsById: builder.query({
      query: (id) => ({
        url: `menuitem/${id}`,
      }),
      providesTags: ["MenuItems"],
    }),
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItemsByIdQuery } = menuItemApi;
export default menuItemApi;

import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { menuItemApi, shoppingCartApi } from "../../APIs";

const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
    shoppingCartStore: shoppingCartReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware),
});

// We need to export the type of the store state ( which is the root state) as we are working in TypeScript
export type RootState = ReturnType<typeof store.getState>;

export default store;

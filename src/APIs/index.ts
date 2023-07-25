import menuItemApi, {
  useGetMenuItemsQuery,
  useGetMenuItemsByIdQuery,
} from "./menuItemApi";

import shoppingCartApi, {
  useGetShoppingCartQuery,
  useUpdateShoppingCartMutation,
  useDeleteShoppingCartMutation,
} from "./shoppingCartApi";

export {
  menuItemApi,
  useGetMenuItemsQuery,
  useGetMenuItemsByIdQuery,
  useDeleteShoppingCartMutation,
};
export {
  shoppingCartApi,
  useGetShoppingCartQuery,
  useUpdateShoppingCartMutation,
};

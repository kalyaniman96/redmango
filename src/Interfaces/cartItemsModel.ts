import menuItemsModel from "./menuItemsModel";
export default interface cartItemsModel {
  id: number;
  menuItemId: number;
  menuItem: menuItemsModel;
  quantity: number;
  // shoppingCartId: number;
}

import cartItemsModel from "./cartItemsModel";

export default interface shoppingCartModel {
  id?: number;
  userId?: string;
  cartItems?: cartItemsModel[];
  cartTotal?: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
} // ? means the property is nullable , that means we can keep it undefined or null

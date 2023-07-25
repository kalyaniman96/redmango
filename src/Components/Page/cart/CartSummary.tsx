import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { cartItemsModel } from "../../../Interfaces";
import {
  updateQuantity,
  removeFromCart,
} from "../../../Storage/Redux/shoppingCartSlice";

function CartSummary() {
  const shoppingCartItems: cartItemsModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  ); //?? []: This is the nullish coalescing operator (??) introduced in ECMAScript 2020. It is used to provide a default value when the value before ?? is null or undefined. In this case, if state.shoppingCartStore.cartItems is null or undefined, the expression will result in an empty array [].

  const dispatch = useDispatch();

  if (!shoppingCartItems) {
    return <div>Shopping cart is empty</div>;
  } else {
    return (
      <div className="container p-4 m-2">
        <h4 className="text-center text-success">Cart Summary</h4>
        {shoppingCartItems.map((cartItem: cartItemsModel, index: number) => (
          <div
            className="d-flex flex-sm-row flex-column align-items-center custom-card-shadow rounded m-3"
            style={{ background: "ghostwhite" }}
            key={index}
          >
            <div className="p-3">
              <img
                src={cartItem.menuItem.image}
                alt=""
                width={"120px"}
                className="rounded-circle"
              />
            </div>

            <div className="p-2 mx-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h4 style={{ fontWeight: 300 }}>{cartItem.menuItem.name}</h4>
                <h4>
                  {Math.round(cartItem.menuItem.price * cartItem.quantity)}
                </h4>
              </div>
              <div className="flex-fill">
                <h4 className="text-danger">{cartItem.menuItem.price}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow  "
                  style={{
                    width: "100px",
                    height: "43px",
                  }}
                >
                  <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                    <i className="bi bi-dash-circle-fill"></i>
                  </span>
                  <span>
                    <b>{cartItem.quantity}</b>
                  </span>
                  <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                    <i className="bi bi-plus-circle-fill"></i>
                  </span>
                </div>

                <button
                  className="btn btn-danger mx-1"
                  onClick={() => dispatch(removeFromCart(cartItem.menuItemId))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartSummary;

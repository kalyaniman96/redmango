import React from "react";
import { CartSummary } from "../Components/Page/cart";

function ShoppingCart() {
  return (
    <div className="row w-100" style={{ marginTop: "10px" }}>
      <div className="col-12 col-lg-6" style={{ fontWeight: 300 }}>
        <CartSummary />
      </div>
      <div className="col-12 col-lg-6 p-4">User Details</div>
    </div>
  );
}

export default ShoppingCart;

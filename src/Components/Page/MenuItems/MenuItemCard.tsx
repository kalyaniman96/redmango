import React from "react";
import { menuItemsModel } from "../../../Interfaces";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../../APIs";
import MiniLoader from "../Common/MiniLoader";

// Declaring local interface / Data model object
interface props {
  menuItem: menuItemsModel;
}

function MenuItemCard(props: props) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);

    const response = await updateShoppingCart({
      userId: "b7ae37bf-09b1-4b47-9ce1-c963031d2920",
      menuItemId: props.menuItem.id,
      updateQuantityBy: 1,
    });
    console.log(response);

    setIsAddingToCart(false);
  };

  return (
    <div className="col-md-4 col-12 p-4 ">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <Link
            to={`/menuitemdetails/${props.menuItem.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="row col-10 offset-1 p-4">
              <img
                src={props.menuItem.image}
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </div>

            {props.menuItem.specialTag && (
              <i
                className="bi bi-star btn btn-success"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  outline: "none !important",
                  cursor: "pointer",
                }}
              >
                &nbsp; {props.menuItem.specialTag}
              </i>
            )}
          </Link>
          {isAddingToCart ? (
            <div style={{ position: "absolute", top: "15px", right: "15px" }}>
              <MiniLoader />
            </div>
          ) : (
            <i
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart(props.menuItem.id)}
            ></i>
          )}
          <div className="text-center">
            <Link
              to={`/menuitemdetails/${props.menuItem.id}`}
              style={{ textDecoration: "none" }}
            >
              <p className="card-title m-0 text-success fs-3">
                {props.menuItem.name}
              </p>
            </Link>

            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;

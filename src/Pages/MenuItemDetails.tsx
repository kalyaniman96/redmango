import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetMenuItemsByIdQuery,
  useUpdateShoppingCartMutation,
} from "../APIs";
import { setMenuItem } from "../Storage/Redux/menuItemSlice";
import { useDispatch } from "react-redux";
import { MainLoader, MiniLoader } from "../Components/Page/Common";
//USEER ID - b7ae37bf-09b1-4b47-9ce1-c963031d2920
function MenuItemDetails() {
  const { menuItemId } = useParams();
  const { data, isLoading, isSuccess } = useGetMenuItemsByIdQuery(menuItemId);
  // const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [isAddingtoCart, setIsAddingtoCart] = useState<boolean>(false);
  //'updateShoppingCart' is a method returned by the 'useUpdateShoppingCartMutation()'
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1); // to restrict the quantity to not go under 1
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleAddtocart = async (menuItemId: number) => {
    setIsAddingtoCart(true);

    const response = await updateShoppingCart({
      userId: "b7ae37bf-09b1-4b47-9ce1-c963031d2920",
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
    });
    // console.log(response);
    setIsAddingtoCart(false);
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setMenuItem(data.result));
  //   }
  // }, [isSuccess]);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <MainLoader />
      </div>
    );
  } else if (isSuccess) {
    return (
      <div className="container pt-4 pt-md-5">
        <div className="row">
          <div className="col-7">
            <h2 className="text-success">{data.result.name}</h2>
            <span>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result.category}
              </span>
            </span>
            <span>
              <span
                className="badge text-bg-light pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result.specialtag}
              </span>
            </span>
            <p style={{ fontSize: "20px" }} className="pt-2">
              {data.result.description}
            </p>
            <span className="h3">{data.result?.price}</span> &nbsp;&nbsp;&nbsp;
            <span
              className="pb-2  p-3"
              style={{ border: "1px solid #333", borderRadius: "30px" }}
            >
              <i
                onClick={decreaseQuantity}
                className="bi bi-dash p-1"
                style={{ fontSize: "25px", cursor: "pointer" }}
              ></i>
              <span className="h3 mt-3 px-3">{quantity}</span>
              <i
                onClick={increaseQuantity}
                className="bi bi-plus p-1"
                style={{ fontSize: "25px", cursor: "pointer" }}
              ></i>
            </span>
            <div className="row pt-4">
              <div className="col-5">
                {isAddingtoCart ? (
                  <button
                    disabled
                    className="btn btn-success form-control
                "
                  >
                    <div className="d-flex justify-content-center">
                      <MiniLoader />
                    </div>
                  </button>
                ) : (
                  <button
                    className="btn btn-success form-control"
                    onClick={() => handleAddtocart(data.result.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>

              <div className="col-5 ">
                <Link to="/">
                  {" "}
                  <button className="btn btn-secondary form-control">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src={data.result.image}
              width="100%"
              style={{ borderRadius: "50%" }}
              alt="No content"
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default MenuItemDetails;

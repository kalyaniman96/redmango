import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "../Pages/index";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
import { useGetShoppingCartQuery } from "../APIs";

function App() {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetShoppingCartQuery(
    "b7ae37bf-09b1-4b47-9ce1-c963031d2920"
  );
  // console.log(data);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <>
      <Header />
      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menuitemdetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

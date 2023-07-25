import React from "react";
import { useState, useEffect } from "react";
import { menuItemsModel } from "../../../Interfaces";
import { MenuItemCard } from "./index";
import { useGetMenuItemsQuery } from "../../../APIs";
import { setMenuItem } from "../../../Storage/Redux/menuItemSlice";
import { useDispatch } from "react-redux";
import { MainLoader } from "../Common";

function MenuItemList() {
  // const [menuItems, setMenuItems] = useState<menuItemsModel[]>([]);
  const { data, isLoading, isSuccess } = useGetMenuItemsQuery(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // fetch("https://redmangoapi.azurewebsites.net/api/MenuItem")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     setMenuItems(data.result);
  //   //   });
  //   if (isSuccess) {
  //     dispatch(setMenuItem(data.result));
  //   }
  // }, [isSuccess]); // we will execute the effect code only when the value of isSuccess is updated

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
      <div className="container row ">
        {data.result &&
          data.result.map((item: menuItemsModel, index: number) => (
            <>
              <MenuItemCard menuItem={item} key={index} />
            </>
          ))}
      </div>
    );
  } else {
    return null;
  }
}

export default MenuItemList;

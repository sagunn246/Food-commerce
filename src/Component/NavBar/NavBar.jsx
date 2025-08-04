import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import { IoSettingsOutline } from "react-icons/io5";
import Search from "./Search";

const NavBar = ({ MainData, setProductData }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-between items-center px-3 py-2 md:px-6 md:py-4 bg-white fixed top-0 left-0 right-0 z-50 w-full rounded-md gap-3 shadow-md">
      <div className="flex-shrink-0">
        <img
          src="./ab.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-grow justify-end">
        <Search MainData={MainData} setProductData={setProductData} />

        <MdOutlineShoppingCart
          className="text-2xl sm:text-3xl md:text-4xl cursor-pointer text-gray-600"
          onClick={() => navigate("/cart")}
        />
        <div className="text-3xl" onClick={() => navigate("/setting")}>
          {" "}
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

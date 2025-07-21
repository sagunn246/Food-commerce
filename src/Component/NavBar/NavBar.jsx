import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-between items-center px-3 py-2 md:px-6 md:py-4 bg-white  rounded-md gap-3">
      <div className="flex-shrink-0">
        <img
          src="./ab.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-grow justify-end">
        <div className="flex items-center border border-gray-300 rounded-sm">
          <input
            type="text"
            className="outline-none p-1 text-xs sm:text-sm md:text-base w-24 sm:w-40 md:w-52"
            placeholder="Search..."
          />
          <IoSearch className="mr-2 text-base sm:text-lg" />
        </div>

        <MdOutlineShoppingCart
          className="text-2xl sm:text-3xl md:text-4xl cursor-pointer text-gray-600"
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
};

export default NavBar;

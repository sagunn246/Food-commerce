import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate= useNavigate();
  return (
    <div className="flex justify-center gap-370 items-center  rounded-md p-1 ">
      <div className="text-3xl font-bold">
        <img src="./ab.png" alt="" className="w-5 h-15 md:w-17 cursor-pointer" onClick={()=> navigate("/")}/>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex border-2 border-gray-200 items-center rounded-sm  ">
          <input
            type="text"
            className="outline-none p-1 text-sm w-24 md:w-52 md:text-lg "
            placeholder="Search..."
          />
          <IoSearch className="mr-2 text-lg" />
        </div>
        <div>
        <MdOutlineShoppingCart className="text-4xl cursor-pointer text-gray-600" onClick={()=> navigate("/cart")}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

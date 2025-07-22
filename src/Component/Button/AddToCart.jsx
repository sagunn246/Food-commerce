import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const AddToCart = ({ ...props }) => {
  return (
    <div
      {...props}
      className="flex items-center gap-1 bg-orange-500 text-white font-medium rounded-md 
                 px-3 py-1 text-sm 
                 sm:text-base sm:px-4 sm:py-2 
                 md:text-base md:px-5 md:py-2.5 
                 hover:bg-orange-600 transition"
    >
      <MdOutlineShoppingCart className="text-lg sm:text-xl" />
      <div>Add to Cart</div>
    </div>
  );
};

export default AddToCart;

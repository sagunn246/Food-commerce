import React, { useState } from "react";
import StarCalc from "../component/StarCalc";
import { LuDot } from "react-icons/lu";
import AddToCart from "../../Button/AddToCart";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductModal = ({ data, setShowModal, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(data);
      setIsAdded(true);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-100/70 flex justify-center items-center p-2 sm:p-4 z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-xl w-full max-w-4xl h-full max-h-[90vh] sm:h-[80vh] overflow-hidden flex flex-col sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="w-full sm:w-[40%] h-48 sm:h-full relative">
          <div className="absolute p-2 bg-orange-500 rounded-full top-2 left-2 z-10 cursor-pointer hover:bg-orange-600 transition-colors">
            <IoMdArrowRoundBack
              color="white"
              size={20}
              onClick={() => setShowModal(false)}
            />
          </div>
          <img 
            src={data.image} 
            alt={data.name}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center gap-3 sm:gap-4 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="font-bold text-xl sm:text-2xl text-gray-700 flex-1">
              {data.name}
            </div>
            <div>
              <StarCalc rating={Math.floor(Number(data.rating))} />
            </div>
          </div>

          <div className="text-sm font-medium text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            hic odit recusandae corporis facere libero ullam, magni quos, cum ea
            sequi voluptate dolor in commodi nesciunt numquam placeat minima
            ipsam eum! Temporibus fugit adipisci, officia culpa eius inventore
            dolorum quam.
          </div>

          <div>
            <div className="font-medium text-lg sm:text-xl text-gray-700 mb-2 sm:mb-3">
              Ingredients:
            </div>
            <ul className="space-y-1">
              {data.ingredients?.map((item, index) => (
                <div className="flex items-center gap-2 text-sm text-gray-600" key={index}>
                  <LuDot className="text-orange-500 flex-shrink-0" />
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-gray-100">
            <div className="font-bold text-orange-500 text-xl sm:text-2xl">
              $ {data.caloriesPerServing}
            </div>
            
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 ${
                isAdded ? "bg-blue-500 hover:bg-blue-600" : "bg-orange-500 hover:bg-orange-600"
              } text-white text-sm px-4 py-2 rounded-md transition duration-200 font-medium`}
            >
              {isAdded ? "✓ Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
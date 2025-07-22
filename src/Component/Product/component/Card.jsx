import AddToCart from "../../Button/AddToCart";
import StarCalc from "./StarCalc";
import ProductModal from "../Modal/ProductModal";
import { useState } from "react";
import addToCart from "../../localstorage/addToCart";

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartbool, setCartbool] = useState(false);

  const handleClick = () => {
    if (cartbool == true) {
      setCartbool(false);
    } else {
      setCartbool(true);
      addToCart(data);
    }
  };

  // Function to handle adding to cart from modal
  const handleAddToCartFromModal = (product) => {
    addToCart(product);
    setCartbool(true); // Update the card's state too
    // Optional: close modal after adding
    setShowModal(false);
  };

  return (
    <>
      <div
        className="my-2 flex h-auto flex-col items-center  rounded-lg shadow-lg w-72 overflow-hidden gap-1 hover:shadow-lg hover:shadow-black/50 transition-shadow duration-300 hover:bg-slate-50 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div>
          <img src={data.image} alt={data.name} className="h-40 w-72 object-cover" />
        </div>
        <div className="w-full px-3 py-2 pb-3 flex flex-col gap-1 flex-1">
          <div className="text-center text-xs text-gray-600 font-medium">
            {data.mealType?.[0]}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-bold w-[60%] text-sm">{data.name}</div>
            <div>
              <StarCalc rating={Math.floor(Number(data.rating))} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="font-bold text-lg">
              $ {data.caloriesPerServing}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              className={`flex items-center gap-2 ${cartbool ? "bg-blue-500 hover:bg-blue-600" : "bg-orange-500 hover:bg-orange-600"
                } text-white text-xs px-3 py-1.5 rounded-md transition duration-200 font-medium`}
            >
              {cartbool ? "✓ Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          onAddToCart={handleAddToCartFromModal}
        />
      )}
    </>
  );
};

export default Card;
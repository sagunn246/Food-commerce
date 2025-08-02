import React, { useState } from "react";

const DeleteIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

const OrangeButton = ({ title, ...props }) => (
  <div className="w-full">
    <button
      className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-xl active:bg-orange-800 active:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
      {...props}
    >
      {title}
    </button>
  </div>
);

const Quantity = ({ quantity: initialQuantity, data, setCart }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const updated = { ...data, quantity: quantity + 1 };
    setQuantity((prev) => prev + 1);
    updateCartState(updated);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const updated = { ...data, quantity: quantity - 1 };
      setQuantity((prev) => prev - 1);
      updateCartState(updated);
    }
  };

  const updateCartState = (updatedItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        className="px-2 py-1 text-sm font-bold text-white bg-gray-400 rounded-full hover:bg-gray-500"
      >
        -
      </button>
      <span className="px-2 text-sm">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-2 py-1 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600"
      >
        +
      </button>
    </div>
  );
};

const CartCard = ({ item, setCart }) => {
  const removeFromCart = (itemToRemove) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((i) => i.id !== itemToRemove.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleOrderClick = () => {
    console.log("Ordering item:", item.name);
  };

  return (
    <div className="mb-6">
      <div className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6 rounded-xl bg-white max-w-xl mx-auto w-full">
        <div className="flex gap-6 items-center">
          <img
            src={item?.image}
            alt={item?.name}
            className="h-32 w-32 rounded-xl object-cover flex-shrink-0 border border-gray-100"
          />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-2xl font-bold text-gray-800 truncate">
                  {item?.name}
                </h3>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600 mt-1">
                  {item?.mealType}
                </div>
              </div>
              <DeleteIcon onClick={() => removeFromCart(item)} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-2 sm:gap-4">
              <div className="text-orange-600 text-2xl font-extrabold flex-shrink-0">
                $ {item?.caloriesPerServing}
              </div>
              <div className="flex items-center gap-4 flex-grow justify-end">
                <Quantity
                  quantity={item?.quantity}
                  data={item}
                  setCart={setCart}
                />
                <div className="flex-shrink-0">
                  <OrangeButton title={"Order"} onClick={handleOrderClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

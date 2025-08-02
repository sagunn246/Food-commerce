import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import CartCard from "./CartCard";
import totalAmount from "../../CustomFunction/totalAmount";
import OrangeButton from "../../Button/OrangeButton";
import CheckOutModal from "./CheckOutModal";

const Cart = () => {
  let data = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(data) || []);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <NavBar />

      <div className="pt-28 px-4 md:px-8">
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <CartCard item={item} key={index} setCart={setCart} />
            ))}

            <div className="border-black mt-10 border-2 max-w-7xl mx-auto"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 max-w-7xl mx-auto">
              <div className="flex gap-2 items-center text-center">
                <div className="text-orange-500 font-bold text-xl md:text-2xl">
                  Total Amount:
                </div>
                <div className="text-xl md:text-2xl font-bold">
                  $ {totalAmount(cart)}
                </div>
              </div>

              <OrangeButton
                title={"Check out"}
                onClick={() => setVisible((prev) => !prev)}
              />
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 text-xl mt-32">
            Your cart is empty.
          </div>
        )}
      </div>

      {visible && <CheckOutModal product={cart} setVisible={setVisible} />}
    </div>
  );
};

export default Cart;

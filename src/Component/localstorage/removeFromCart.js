const removeFromCart = (itemToRemove, setCart) => {
  try {
    const cartData = localStorage.getItem("cart");
    if (!cartData) return;

    const actualData = JSON.parse(cartData);
    const updatedData = actualData.filter(
      (item) => item.id !== itemToRemove.id
    );

    localStorage.setItem("cart", JSON.stringify(updatedData));
    setCart(updatedData);

    console.log("Item removed from cart:", itemToRemove);
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};

export default removeFromCart;

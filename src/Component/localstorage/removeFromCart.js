const removeFromCart = (data, setCart) => {

    const cartData = localStorage.getItem("cart");
    const actualData = JSON.parse(cartData)
    const updatedData = actualData.filter((item) => item.id != data.id)
    console.log("hello from remove from cart", data);
    console.log("hello from remove from cart", updatedData);
    localStorage.setItem('cart', JSON.stringify(updatedData))
    setCart(updatedData);
}

export default removeFromCart 
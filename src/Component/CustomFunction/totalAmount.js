const totalAmount = (cartData) => {
  console.log(cartData)
  let totalAmount = 0;
  cartData.forEach(
    (item) => { totalAmount = totalAmount + (Number(item.caloriesPerServing) * Number(item.quantity)) }
  )
  return totalAmount;

}

export default totalAmount

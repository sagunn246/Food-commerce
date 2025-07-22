import addQuantity from "./addQuantity";
const addToCart = (productData) => {
    let localData = localStorage.getItem('cart')

    if (localData == null) {
        let tempArr = [];
        tempArr.push({ ...productData, quantity: 1 })
        localStorage.setItem('cart', JSON.stringify(tempArr))
    }

    else {
        let tempArr = JSON.parse(localStorage.getItem("cart"));

        let tempArray = tempArr.filter((item) => item.id == productData.id)
        if (tempArray != 0) {
            addQuantity(productData)
            return;
        }
        tempArr.push({ ...productData, quantity: 1 })
        localStorage.setItem("cart", JSON.stringify(tempArr))
    }
}

export default addToCart;

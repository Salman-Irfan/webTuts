let cartCounter = 0;
export const handleCartCounter = () => {
    cartCounter++;
    localStorage.setItem('cartCounter', cartCounter)
    let cartStoreItems = localStorage.getItem(`cartCounter`)
    console.log(`cartStoreItems`)
    console.log(cartStoreItems)

    cartItems.innerHTML = `cart items = ${cartStoreItems}`
}
import { handleCartCounter } from "../commons/scripts/navbarScripts/cart.js"

const lclStorage = document.getElementById(`lclStorage`)

lclStorage.addEventListener(`click`, handleCartCounter)

const cartItems = document.getElementById(`cartItems`)
let cartStoreItems = localStorage.getItem(`cartCounter`)
console.log(`cartStoreItems`)
console.log(cartStoreItems)

cartItems.innerHTML = `cart items = ${cartStoreItems}`

let age = 20
let voteDec = (age > 18) ? (`can cast vote`) : (`can't cast vote`) // ternary operator / shorthand of if else
console.log(voteDec)
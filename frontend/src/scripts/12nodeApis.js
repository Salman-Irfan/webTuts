// import { productListsResponse } from "../services/groceryServices/getProductLists"

// const response2 = await axios.get(`http://127.0.0.1:3000/about`)
// console.log(productListsResponse)
// console.log(response2)

console.log(`testing`)
const name = document.getElementById("name")

name.addEventListener("keydown", (e)=>{
    console.log(e.key)
})

// const obj = {
//     name: `salman`,
//     address: {
//         country: "pakistan"
//     }
// }
const obj = {
    name: `salman`,
    country: "pakistan"
}
// console.log(obj.address.country)
console.log(obj.address?.country)
import { productListsResponse } from "../services/groceryServices/getProductLists"


const response2 = await axios.get(`http://127.0.0.1:3000/about`)
console.log(productListsResponse)
console.log(response2)
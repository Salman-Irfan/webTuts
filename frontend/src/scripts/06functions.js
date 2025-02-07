import { handleClick } from "../utils/dummy.js"

const returnSum = (n, m) => {
    console.log(n)
    console.log(m)
}

let ans1 = returnSum([1, 2, 3, 4, 5], {
    name: `abc`,
    age: 123
})

const clkBtn = document.getElementById(`clkBtn`)

clkBtn.addEventListener("click", handleClick)

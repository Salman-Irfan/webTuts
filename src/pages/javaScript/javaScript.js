let a = 5
console.log(a)

let b = 45.7
console.log(b)

let fname = `salman`
console.log(fname) // output ? => error message

let lname = `irfan`

let fullName = fname + lname
console.log(fullName)

let isSeatAvl = true // cpu k liye 1
console.log(true)
let isClassAvl = false // cpu k liye 0

let outCome = isClassAvl + isSeatAvl
console.log(outCome) // output ? 

console.log(typeof (a)) // number
console.log(typeof (b)) // number
console.log(typeof (fname)) // string

const num = document.getElementById("num")
num.innerHTML = `js content showing in front end ${a}`

const floatValue = document.getElementById("floatValue")
floatValue.innerHTML = `${b}`

const fullName2 = document.getElementById("fullName")
fullName2.innerHTML = `<h1 class= "text-red-500 font-bold text-9xl ">${fullName}</h1>`
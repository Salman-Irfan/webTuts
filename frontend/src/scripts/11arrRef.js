let num1 = 5
let num2 = num1 //5

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1]

if(num1 == num2){
    console.log(`num1 or num2 equal hain 2 `)
}else{
    console.log(`num1 or num2 equal ni hain`)
}

if (arr1 == arr2) {
    console.log(`arr1 or arr2 equal hain um 2 `)
} else {
    console.log(`arr1 or arr2 equal ni hain`)
}

console.log(`is k bad ho skta hai k dimagh ek bar chakra jaye`)

num2 = 8 // 8
console.log(num2) // 8
console.log(num1) // 5

arr2[0] = 7
console.log(arr2) // [7,2,3,4,5]

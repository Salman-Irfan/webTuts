export let age = 120
export let result

if (age >= 18 && age <= 100) {
    result = (`you can cast vote`)
} else if (age) {
    result = (`you can't cast vote`)
}

let num = 123
console.log(num) // error or type got changed? 
console.log(typeof (num))
num = `abcdefgh`
console.log(num) // error or type got changed? 
console.log(typeof (num))

num = true
console.log(num)
console.log(typeof (num))

let str = `123.456`
console.log(str)
console.log(typeof (str))

let conNum = Number(str)
console.log(conNum)
console.log(typeof (conNum))

let floatedNum = parseFloat(str)
console.log(floatedNum)

let intNum = parseInt(str)
console.log(intNum)
console.log(typeof (intNum))
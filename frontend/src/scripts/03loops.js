for (let i = 1; i <= 10; i *= 3) {
    console.log(i)
}

let num = 0
while (num < 10) {
    console.log(num)
    num++
}

const number = document.getElementById("number")
const submit = document.getElementById("submit")
let attempts = 0
let isGameOver = false

console.log(`random number`)
let randomNumber = parseInt((Math.random()) * 100)
// console.log(randomNumber)

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(number.value)
    const userValue = parseInt(number.value)

    if (userValue === randomNumber) {
        console.log(`you guessed correctly`)
        isGameOver = true

    }
    else if (userValue < randomNumber) {
        console.log(`too low`)
        attempts++
    } else {
        console.log(`too high`)
        attempts++
    }
})
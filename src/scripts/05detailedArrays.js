const arr = [123, `string`, true, ["nest", 345, "react"]]
console.log(arr)
console.log(arr[3])
console.log(arr[3][2])

console.log(typeof (arr))
console.log(Array.isArray(arr)) // true

const person = {
    name: `salman`,
    age: 18,
    isWearGlasses: true,
    courses: [`pf`, `oop`, `dsa`, `db`, `mern`, `mad`],
    outlines: [
        {
            pf: [`variables and data types`, `if else`],
            duration: 1
        },
        {
            oop: [`4 pillars`, `encap`],
            duration: 2
        },
        {
            dsa: [`variables and data types`, `if else`],
            duration: 3
        },
        {
            oop: [`4 pillars`, `encap`],
            db: 1
        },
        {
            web: [`variables and data types`, `if else`],
            duration: 6
        },
        {
            mad: [`4 pillars`, `encap`],
            duration: 6
        },
    ]
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.isWearGlasses)
console.log(person.courses)
console.log(person.courses[3])
console.log(person.outlines)
console.log(person.outlines[1].oop)
console.log(person.outlines[1].oop[0])

// code evolution => js dsa playlist

const personName = document.getElementById(`personName`)
console.log(personName)
personName.innerHTML = `
    <h1 class = "bg-blue-200 text-blue-800">${person.name}</h1>
    <h3>${person.courses}</h3>
`
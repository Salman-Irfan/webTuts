const line1 = `this is line 1`
const line2 = `this is line 2`

console.log(line1)
console.log(line2)

const fetchGeoData = async () => {
    const other = await fetch(`https://www.geo.tv/`) // 5s
    // console.log(other)
}

fetchGeoData()


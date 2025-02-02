const url = `https://www.geo.tv/`

const getGeoData = async () => {
    const geoRes = await axios.get(url) // 5s
    console.log(geoRes.data)
    const geoData = document.getElementById(`geoData`)
    geoData.innerHTML = geoRes.data
}
getGeoData()
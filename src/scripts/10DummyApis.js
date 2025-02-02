const url = `https://jsonplaceholder.typicode.com/posts` // sent by backend developer

const getGeoData = async () => {
    const geoRes = await axios.get(url) // 5s
    console.log(geoRes.data)
    
}
getGeoData()
import mongoose from "mongoose"

const MONGO_DB_URI = `mongodb://localhost:27017/groceryStore`

export const connectToMongoDb = async () => {
    try {
        const mongoDbResponse = await mongoose.connect(MONGO_DB_URI)
        if (mongoDbResponse.STATES[1]) {
            console.log(`connected to mongodb at url ${MONGO_DB_URI} `)
        } else {
            console.log(`an error occurred while connecting to mongo db`)
        }
    } catch (error) {
        console.log(error)
        console.log(`an error occurred while connecting to mongo db`)
    }
}
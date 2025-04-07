import express from 'express'
import cors from "cors"
import { apiRouter } from './routes/apiRoutes/apiRouter.js'
import { connectToMongoDb } from './config/mongoDbConfig/connectToMongoDb.js'
import dotenv from "dotenv"

export let data = `about page data`

const app = express()
dotenv.config()

connectToMongoDb()

app.use(cors())
app.use(express.json())
// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
// use a static folder
app.use(express.static('public'));

app.use(`/api`, apiRouter)

const port = process.env.PORT || 3000

// app.get('/api/', homeController)

// app.get('/api/about', aboutController)

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
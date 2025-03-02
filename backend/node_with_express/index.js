import express from 'express'
import cors from "cors"
import { apiRouter } from './routes/apiRoutes/apiRouter.js'
import { connectToMongoDb } from './config/mongoDbConfig/connectToMongoDb.js'

export let data = `about page data`

const app = express()

connectToMongoDb()

app.use(cors())
app.use(express.json())

app.use(`/api`, apiRouter)

const port = 3000

// app.get('/api/', homeController)

// app.get('/api/about', aboutController)

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
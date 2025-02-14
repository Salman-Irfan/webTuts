import express from 'express'
import path from 'path'
import { homeController } from './controllers/homeController.js'
import { aboutController } from './controllers/aboutController.js'
import cors from "cors"
import { apiRouter } from './routes/apiRoutes/apiRouter.js'

export let data = `about page data`

const app = express()

app.use(cors())
app.use(`/api`, apiRouter)

const port = 3000

// app.get('/api/',  homeController)

// app.get('/api/about', aboutController)

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
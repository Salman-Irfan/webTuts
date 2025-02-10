import express from 'express'
import path from 'path'
import { homeController } from './controllers/homeController.js'
import { aboutController } from './controllers/aboutController.js'
import cors from "cors"

export let data = `about page data`

const app = express()
app.use(cors())

const port = 3000

app.get('/',  homeController)

app.get('/about', aboutController)

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
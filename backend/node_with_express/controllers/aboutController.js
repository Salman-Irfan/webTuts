import { data } from "../index.js"

export const aboutController = (req, res) => {
    res.send(`${data}`)
}
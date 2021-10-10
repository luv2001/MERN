import express from "express"
import dotenv from "dotenv"
import routes from "./rouets/routes.js"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose";

dotenv.config()
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', routes)

mongoose.connect(DATABASE_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to database runnig on port ${PORT}`);
        })
    })
    // .catch(() => {
    //     console.log(`Error connecting to database `)
    // })

import express from "express"
import dotenv from "dotenv"
import routes from "./rouets/routes.js"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose";

dotenv.config()
const PORT = process.env.PORT





const app = express()

app.use('/', routes)




app.listen(PORT, () => {
    console.log(`Runnig on ${PORT}`);
})
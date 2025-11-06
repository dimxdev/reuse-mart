import express from "express"
import dotenv from "dotenv"
import kelompokController from "./kelompok/kelompok.controller.js";
dotenv.config()

const app = express();
const port = process.env.PORT


app.use(express.json())

app.use("/kelompok", kelompokController)


app.listen(port, () => {
    console.log(`server connected at port ${port}`)
})
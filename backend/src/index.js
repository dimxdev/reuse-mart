import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import kelompokRouter from "./modules/routes/kelompok.route.js";
import productRouter from "./modules/routes/product.route.js"

const app = express();
const port = process.env.PORT;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/kelompok", kelompokRouter);
app.use("/product", productRouter);


app.listen(port, () => {
  console.log(`server connected at http://localhost:${port}`);
});

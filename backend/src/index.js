import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import kelompokRouter from "./modules/routes/kelompok.route.js";
import productRouter from "./modules/routes/product.route.js"
import categoryRouter from "./modules/routes/category.route.js"
import authRouter from "./modules/routes/auth.route.js"
import cartRouter from "./modules/routes/cart.route.js"
import orderRouter from "./modules/routes/order.route.js"

const app = express();
const port = process.env.PORT;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/kelompok", kelompokRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);



app.listen(port, () => {
  console.log(`server connected at http://localhost:${port}`);
});


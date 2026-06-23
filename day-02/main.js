import express from "express";
import { userRouter } from "./routes/user.route.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { authRoutes } from "./routes/auth.routes.js";
import { productRouter } from "./routes/product.routes.js";
import cookieParser from "cookie-parser";

//hold express on variable
const app = express();
const PORT = process.env.PORT ?? 5000;
//Some Important Middleware
// app.use()
// {
//     "name":"pratik";
//     "age":22
// }
app.use(express.json());

// {
//   name: "pratik";
//   age: 22;
// }
app.use(express.urlencoded({ extended: true }));
// url -> http://localhost:300?name="pratik"&age="22"
// {
//   name: "pratik";
//   age: "22";
// }
app.use(cookieParser());
//checkpoint
//health routes
app.get("/health", (req, res) => {
  res.send("helo world");
});

//db connection
connectDB();

app.use("/user", userRouter);
app.use("/auth", authRoutes);
app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`server is ruuning at ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/ecommerce");

// solution for CORS issue
app.all("/api/products", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // allow request from localhost:3000;
  /*  res.header("Access-Control-Allow-Headers", "*");*/
  next();
});

app.all("/api/products/:id", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // allow request from localhost:3000;
  next();
});

app.all(`/api/users/signin`, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.all(`/api/users/register`, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// This middleware is an error catcher. When the error is in the router and router wrapped in expressAsyncHandler all error will be redirected to this function and the error will be sent back to the frontend.
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

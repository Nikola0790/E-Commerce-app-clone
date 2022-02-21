import express from "express";
import data from "../data.js"
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"; // Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

const userRouter = express.Router(); // is a function that make our code modular, instead have all routes in server.js we can define multiple files to have our routers.

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users); // the insertMany() method inserts one or more documents in the collection. It takes array of documents to insert in the collection. 
    res.send({createdUsers});
}));

export default userRouter;
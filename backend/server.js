import express from "express";
import mongoose from "mongoose";
import data from "./data.js"
import userRouter from "./routers/userRouter.js";

const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecommerce');


// solution for CORS issue
app.all('/api/products', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // allow request from localhost:3000;
   /*  res.header("Access-Control-Allow-Headers", "*");*/
    next(); 
})

app.all('/api/products/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // allow request from localhost:3000;
    next(); 
})

// for single product
app.get('/api/products/:id', (req, res) => {
    const dataP = data.products.find(product => product._id == req.params.id);
    if(dataP) {
        res.send(dataP);
    } else {
        res.status(404).send({message: 'Not found product'})
    }
})

// for all productss
app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send("Server is ready");
});

// This middleware is an error catcher. When the error is in the router and router wrapped in expressAsyncHandler all error will be redirected to this function and the error will be sent back to the frontend.
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
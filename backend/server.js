import express from "express";
import data from "./data.js"

const app = express();
const port = process.env.PORT || 5000;


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

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
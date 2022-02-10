import express from "express";
import data from "./data.js"

const app = express();
const port = process.env.PORT || 5000;

app.all('/api/products', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // allow request from localhost:3000;
   /*  res.header("Access-Control-Allow-Headers", "*");*/
    next(); 
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
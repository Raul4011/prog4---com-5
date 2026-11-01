//import express from 'express'

const express = require("express");

const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    nombre: "yerba mate",
    precio: 5000,
    cantidad: 10,
  },
  { id: 2, nombre: "azucar", precio: 3000, cantidad: 50 },
  {
    id: 3,
    nombre: "edulcorante",
    precio: 4000,
    cantidad: 5,
  },
];

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.get("/products", (req, res) => {
    console.log(req);
  res.json(products);
});

app.get('/products/:id' ,(req,res)=>{
    console.log(req.params);
    const id = req.params

    //req.params
    const product = products.find(product => product.id === id)
    console.log(product);

    res.status(200).json(product)
})

app.post('/products',(req,res)=>{
const {nombre,precio} = req.body




})

app.delete("/products/:id",()=>{

})

app.put("/products/:id",()=>{
    
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log("escuchando en el puerto " + PORT);
});

const express = require('express'); //common js
//import express from 'express'; -> module
const cors = require('cors');
const peliculasRouter = require('./routes/movies.routes.js')
const conection = require('./config/db.js')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',peliculasRouter)


app.get('/',(req,res)=>{
    res.send('Bienvenido a mi APi REST')
})




const initServer = async() => {
    try {
        const conexion = await conection.getConnection();
        console.log('conectado a la base de datos');
        conexion.release();
        app.listen(8000,()=>{
        console.log('escuchando en el puerto 8000');})
    }catch(error){
        console.log(error);
    }
}

initServer()

  
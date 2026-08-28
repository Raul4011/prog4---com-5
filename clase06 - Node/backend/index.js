const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())

const Jugadores = [
        {
            nombre:"leonel messi",
            edad:39,
            numCamiseta:10,
            casado:true,
            historialClubes:["barcelona","psg","inter miami"],
            cantHijos:3,
            piernaHabil:"izquierda",
            foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM4d-Z0bcA7FkFkjJAMnvkZwz1Is6jeLnaEgQ2YgmjQ&s=10"
        },{
            nombre:"enzo fernandez",
            edad:25,
            numCamiseta:8,
            casado:false,
            historialClubes:["river","defensa","chelsea"],
            cantHijos:2,
            piernaHabil:"izquierda",
            foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM4d-Z0bcA7FkFkjJAMnvkZwz1Is6jeLnaEgQ2YgmjQ&s=10"
        }
    ]




app.get("/",(req,res)=>{
    res.send('welcome to my API')
})

app.get('/jugadores',(req,res)=>{
    res.json(Jugadores)
})

app.listen(8000,()=>{
    console.log('escuchando en el puerto 8000');
})
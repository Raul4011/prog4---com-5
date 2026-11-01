const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'4011',
    database:'cineverse'
})



app.get('/',(req,res)=>{
    res.send('bienvenido a mi API')
})

app.get('/peliculas',(req,res)=>{

    const consulta = `select * from peliculas`

    connection.query(consulta,(err,results)=>{
        if(err) throw err
        res.status(200).json(results)

    })

})

app.get('/peliculas/:id',(req,res)=>{

    const {id} = req.params

    const consulta = `select * from peliculas where id=?`

    connection.query(consulta,[id],(err,results)=>{
        if(err) throw err
        res.status(200).json(results)
    })

})

app.post('/peliculas',(req,res)=>{
    const {nombre,genero,imagen,duracion,descarga_url} = req.body

    const consulta = `insert into peliculas (nombre,genero,imagen,duracion,descarga_url) values (?,?,?,?,?);`

    connection.query(consulta,[nombre,genero,imagen,duracion,descarga_url],(err,results)=>{
        if (err) {
            return res.status(500).json({message:"hubo un error"},err.message)
        }
        res.status(200).json({message:'pelicula creada correcatmanet'},results)
    })
})

app.delete('/peliculas/:id',(req,res)=>{
    const {id} = req.params

    const consulta = `delete from peliculas where id=?`

    connection.query(consulta,[id],(err,results)=>{
        if (err) throw err
        res.json({message:"pelicual eliminada"},results)
    })
})

app.put('/peliculas/:id',(req,res)=>{
    const {id}= req.params
    const {nombre,genero,imagen,duracion,descarga_url} = req.body

    const consulta=`update peliculas set nombre=? , genero=?,imagen=?,duracion=?,descarga_url=? where id=?`

    connection.query(consulta,[nombre,genero,imagen,duracion,descarga_url,id],(err,results)=>{
         if (err) throw err
        res.status(200).json({message:"pelicula editada corercatmanet"},results)
    })

})


connection.connect((err)=>{
    if(err) throw err
    console.log("conecatdo a mi DB");
})

app.listen(8000,()=>{
    console.log('escucahndo en el puerto 8000');
})
const express = require('express')
const cors = require('cors')
const conection = require('./config/db')
const peliculas = require('./routes/peliculas.routes')

const app = express()


app.use(express.json())
app.use(cors())
app.use('/api',peliculas)


app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API restful')
})


//conection.getConection()

conection.connect((err)=>{
    if(err) throw err;
    console.log('Conectado a la base de datos')
})


app.listen(8000,()=>{
   
    console.log('Server is running on port 8000')
})













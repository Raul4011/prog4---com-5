const conection = require('../config/db.js')

const getMovies = async (req,res)=>{
    try{

        const consulta= `SELECT * FROM peliculas`
        const [rows] = await conection.query(consulta)
        //console.log(rows);
        res.status(200).json(rows)

    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Error al obtener las películas'})
    }
}   
const getMovie = async (req,res)=>{
    
        const {id} = req.params
        try {
             const consulta = `SELECT * FROM peliculas WHERE id = ?`

            const [rows] = await conection.query(consulta,[id])
            if(rows.length === 0){
                return res.status(404).json({error: 'Película no encontrada'})
            }
            res.status(200).json(rows)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Error al obtener la película'})
        }

       


}
const postMovie = async (req,res) =>{
    const {nombre,genero,duracion,imagen,descarga_url} = req.body

    if(!nombre || !genero  || !imagen || !descarga_url){
        return res.status(400).json({error: 'Faltan datos obligatorios'})
    }   
    const consulta = `INSERT INTO peliculas (nombre,genero,duracion,imagen,descarga_url) VALUES (?,?,?,?,?)`
    try {
        const [rows] = await conection.query(consulta,[nombre,genero,duracion,imagen,descarga_url])
        res.status(201).json({message: 'Película creada correctamente', id: rows.insertId})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Error al crear la película', message: error.message})
    }


}

const putMovie = async(req,res) =>{
    const {id} = req.params
    const {nombre,genero,duracion,imagen,descarga_url} = req.body

    const consulta = `UPDATE peliculas SET nombre = ?, genero = ?, duracion = ?, imagen = ?, descarga_url = ? WHERE id = ?`
    try {
        const [rows] = await conection.query(consulta,[nombre,genero,duracion,imagen,descarga_url,id])
        if(rows.affectedRows === 0){
            return res.status(404).json({error: 'Película no encontrada'})
        }
        res.status(200).json({message: 'Película actualizada correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Error al actualizar la película', message: error.message})
    }   
}
const deleteMovie =async (req,res) =>{
    const {id} = req.params

    const consulta = `DELETE FROM peliculas WHERE id = ?`
    try {
        const [rows] = await conection.query(consulta,[id])
        if(rows.affectedRows === 0){
            return res.status(404).json({error: 'Película no encontrada'})
        }
        res.status(200).json({message: 'Película eliminada correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Error al eliminar la película', message: error.message})
    }
}



module.exports = {getMovies, getMovie,postMovie,putMovie,deleteMovie}
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const AdminMovieEdit = () => {

    const navigate =  useNavigate()

    const { id } = useParams()

    const [ movie, setMovie ] = useState({})

    const getMovie = async () => {
        try {
            let result = await axios.get(`http://localhost:3000/movies/${id}`)
            setMovie(result.data)
            console.log(result.data);
        } catch (err) {
            console.error(err)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            let response = await axios.put("http://localhost:3000/movies/"+id,movie)
            if (response) {
                alert('pelicula editada correctamente')
                navigate("/admin/movies")
            } else {
                alert('ocurrio un error')
            }
        } catch (err) {
            console.error(err)
        }



    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setMovie({ ...movie, [name]: value })
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='nombre' placeholder='nombre de la pelicula' onChange={handleChange} defaultValue={movie.nombre}/>
                <br />
                <input type="text" name='genero' placeholder='genero de la pelicual' onChange={handleChange} defaultValue={movie.genero}/>
                <br />
                <input type="text" name='año' placeholder='año' onChange={handleChange} defaultValue={movie.año}/>
                <br />
                <input type="text" name='imagen' placeholder='imagen' onChange={handleChange} defaultValue={movie.imagen}/>
                <br />
                <input type="text" name='url_descarga' placeholder='url de descarga' onChange={handleChange} defaultValue={movie.url_descarga}/>
                <br />
                <button type='submit'>sgregar</button>
            </form>editar la pelicula {id}
        </div>
    )
}

export default AdminMovieEdit
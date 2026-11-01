import { useParams,Link } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from 'axios'

const AdminMovieDetail = () => {

const {id} = useParams()
const [ movie, setMovie ] = useState({})

const getMovie = async () => {
        try {
            let result = await axios.get(`http://localhost:8000/peliculas/${id}`)
            setMovie(result.data[0])
            console.log(result.data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
      getMovie()
    },[])

  return (
    <div className="flex justify-center ">
      <br />
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={movie.imagen} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">#{movie.id} {" "} {movie.nombre}</div>
    <p className="text-gray-700 text-base">
     <span className="text-blue-700 font-bold text-2xl">genero: </span> {movie.genero}
    </p>
    <p className="text-gray-700 text-base">
     año: {movie.año}
    </p>
    <p className="text-gray-700 text-base">
     url_descarga: {movie.url_descarga}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  <Link to={"/admin/movies"} className="bg-green-400 hover:bg-green-800 rounded-lg px-4 py-2 shadow-xs">volver</Link>
</div>
<br /><br /><br />
    </div>
  )
}

export default AdminMovieDetail
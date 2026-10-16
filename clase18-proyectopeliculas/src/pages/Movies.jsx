import {useState,useEffect} from 'react'

const Movies = () => {

    const [pelis,setPelis] = useState([])
    const [search,setSearch] = useState("")

  return (
    <div>
        <br />

        <input type="text" placeholder='Buscar...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <br />
        <h2>Listado de Pelis </h2>
        <MoviesList pelis={pelis}/>
        <br />
    </div>
  )
}

export default Movies
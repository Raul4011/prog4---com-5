import { useState, useEffect } from "react"
import { BASE_URL } from "../services/Api"
import axios from 'axios'
import Character from "./Character"
import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Characters = () => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    let [color, setColor] = useState("#ffffff");
    const [busqueda,setBusqueda] = useState('')

    const getCharacters = async () => {
        try {
            let response = await axios.get(BASE_URL + "character")
            console.log(response.data);
            setPersonajes(response.data.results)
            setLoading(false)
            setError(false)
        } catch (er) {
            console.error(er)
            setError(true)
        }

    }

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try {
            let response = await axios.get(BASE_URL + "character"+"?name="+busqueda)
            console.log(response.data.results);
            setPersonajes(response.data.results)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.error(er)
            setError(true)
        }
        
    }


    useEffect(() => {
        setTimeout(getCharacters,800)
        //getCharacters()
    }, [])


    return (
        <div className="bg-orange-400 text-center">
            <br />
            <h2 className="text-blue-800 text-2xl text-shadow-md font-bold">Rick y Morty Api 2026</h2>

            <br />
            <br />
            <form className="bg-white shadow-md rounded" action="" onSubmit={handleSubmit} style={{width:"30%",margin:"auto"}}>
                <input className="bg-gray-300" type="text" onChange={(e)=>setBusqueda(e.target.value)} />
                    <select name="" id="">
                <option value="">nombre</option>
                <option value="">genero</option>
                <option value="">estatus</option>
                <option value="">especie</option>
            </select>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">buscar</button>
            </form>
        
            <br />
            <div className="grid grid-cols-3 gap-4">
                {loading ? <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : personajes.map(personaje => <Character key={personaje.id} {...personaje} />)}

            </div>
              <br /><br />

              <h3>Pagination....</h3>
<br /><br />
        </div>
    )
}

export default Characters
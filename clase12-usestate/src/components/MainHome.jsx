import { useState } from 'react'
import { Animales } from '../services/animales'
import AnimalCard from './AnimalCard';
import { Row } from 'react-bootstrap';

const MainHome = () => {

  const [animales, setAnimales] = useState(Animales)

  const [nombre,setNombre]=useState('')
  const [edad, setEdad] = useState(null)
  const [raza,setRaza] = useState('')
  const [color,setColor] =useState('')
  const [imagen,setImagen] = useState('')

  const handleClick = (e) =>{
    e.preventDefault()

    let nuevoAnimal = {
      nombre,
      raza,
      edad,
      imagen,
      color
    }
    setAnimales([...animales,nuevoAnimal])
  }

  return (
    <div>
      <br />


        <form action="">

          <label htmlFor="">nombre</label>
          <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)}/>
          <br />
          <label htmlFor="">raza</label>
          <input type="text" onChange={(e)=>setRaza(e.target.value)}/>
          <br />
          <label htmlFor="">edad</label>
          <input type="number" onChange={(e)=>setEdad(e.target.value)}/>
          <br />
          <label htmlFor="">color</label>
          <input type="text" onChange={(e)=>setColor(e.target.value)}/>
          <br />
          <label htmlFor="">imagen</label>
          <input type="text" onChange={(e)=>setImagen(e.target.value)}/>
          <br />
          <button type='button'onClick={handleClick}>agregar</button>
        </form>
      <br />

      <p>{nombre}-{edad}-{color}-{imagen}</p>

      {animales.map(animal =>
        <Row>
          <AnimalCard animal={animal} />
        </Row>)}
    </div>
  )
}

export default MainHome
import { useState,useEffect } from 'react'
import Hijo from './Hijo'

const Padre = () => {


const Animales = [
  {
    id: 1,
    nombre: "jose luis rodriguez",
    raza: "puma",
    edad: 56,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfB606j8c5snS0R2grSg8CH1S107AZthCl-hPJ29BiA&s=10",
    color: "negro",
  },
  {
    id: 2,
    nombre: "zimba",
    raza: "leon",
    edad: 20,
    imagen: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGUlQzMlQjNufGVufDB8fDB8fHww",
    color: "naranja",
  },
  {
    id: 3,
    nombre: "benzema",
    raza: "gato",
    edad: 5,
    imagen: "https://thumbs.dreamstime.com/b/gato-blanco-hermoso-con-los-ojos-amarillos-36143954.jpg",
    color: "blanco",
  },
];





    const [saludo, setSaludo] = useState('hola com 5')
    const [count, setCount] = useState(0)
    const [buscar,setBuscar]= useState('')
    const [mostrar,setMostrar] = useState(false)
    const [animales,setAnimales]= useState([])


    const handleClick = () => {
        setSaludo('Adios com 5')
    }

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

    }
    useEffect(()=>{
        console.log('contador cambiando'+count);
    },[count])

    useEffect(   ()=>{
        console.log('PADRE montado');
    }  ,    []    )

    //console.log(animales);

    useEffect(()=>{
        setAnimales(Animales)
    },[])


    return (
        <div>
            <br />
            <h1>Componente Padre</h1>
            <br />
            <h3 >{saludo}</h3>
            <button type='button' onClick={handleClick}>cambiar saludo</button>
            <br />
            <h4>contador: {count}</h4>
            <button type='button' onClick={increment}>+</button>
            <button type='button' onClick={decrement}>-</button>
        <br />
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">buscar</label>
            <input type="text" onChange={(e)=>setBuscar(e.target.value)}/>
            <br />
            <button type='submit'>buscar</button>
        </form>
        <h3>buscar:{buscar}</h3>
            <br />
            <button type='button' onClick={()=>setMostrar(!mostrar)}>cambiar</button>
        {mostrar && <Hijo/> }
        <br /><br /><br />





        </div>
    )
}

export default Padre
import { useState } from "react"

const Header = (props) => {
    
    console.log(props);

    const [dato, setDato] = useState('')

    //props.getDato(dato)

    const Alumno = {
        nombre: 'raul',
        edad: 40
    }



    const handleChange = (e) => {
        setDato(e.target.value)
    }


    return (
        <div>
            <br />

            <p>nombre y apellido: {Alumno.nombre}{" "}{Alumno.edad}</p>

            <br />
            <input type="text"
                placeholder='ingresa tu dato'
                onChange={(e) => setDato(e.target.value)} />


            <button type='button'>enviar</button>
            <br />

            <h3>dato del input: {dato}</h3>
            <br />
        </div>
    )
}

export default Header
import React from 'react'

const MainHome = ({titulo,perritos,saludar,Profesor}) => {
    //console.log(props);
    //1ra forma de destructuracion
    //const {titulo,perritos,saludar,Profesor} = props

    saludar()
  return (
    <div>
        <br />
        <h3>titulo: {titulo}</h3>
        <br />
        <ul>
            <li>{Profesor.nombre}</li>
            <li>{Profesor.materia}</li>
        </ul>
        
        <br />

        <ul>
            {perritos.map((perro,index) =>
                <li key={index}>{perro}</li>
            )}
        </ul>

            

        <br />

    </div>
  )
}

export default MainHome
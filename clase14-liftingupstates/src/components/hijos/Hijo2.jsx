import React from 'react'
import Nieto3 from '../nietos/Nieto3'
import Nieto4 from '../nietos/Nieto4'

const Hijo2 = ({obtenerValores,obtenerContador}) => {
  return (
    <div>
        <Nieto3  obtenerContador={obtenerContador}/>
        <Nieto4 obtenerValores={obtenerValores}/>
    </div>
  )
}

export default Hijo2
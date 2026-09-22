import React from 'react'

const Nieto1 = ({contador}) => {

    

    const imagen = `./${contador}.png`

  return (
    <div>
        <br />
        <h3>Contador: {contador}</h3>
        <img src={imagen} alt="" />
        <br />
    </div>
  )
}

export default Nieto1
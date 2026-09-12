import React from 'react'

const Footer = () => {

  let contador = 0;

  const handleDecrement = () =>{
    contador--
    console.log(contador);
  }

  const handleIncrement = () =>{
    contador = contador+1
     console.log(contador);
  }

  return (
    <div>
      <br />
      <h3>Footer</h3>
      <br />

      <button type='button' onClick={handleIncrement}>+</button>
      <button type="button" onClick={handleDecrement}>-</button>
      <br />

      <h4>contador: {contador}</h4>
      
      <br />

    </div>
  )
}

export default Footer
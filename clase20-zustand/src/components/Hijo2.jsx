import React from 'react'
import useStore from '../store/useStore'

const Hijo2 = () => {

    const {nombre,mail} = useStore()
    

  return (
    <div className='bg-orange-300'>
        <h3>Hijo 2</h3>
        <br />
        <h4>{nombre}-{mail}</h4>
    </div>
  )
}

export default Hijo2
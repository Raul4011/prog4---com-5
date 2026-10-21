import React from 'react'
import { useState } from 'react'
import useStore from '../store/useStore'

const Hijo4 = () => {

    const {changeName,changeMail} = useStore()

    // const [name,setName] = useState("")
    // const [mail,setMail] = useState("")

    const handleSubmit = (e) =>{
        // e.preventDefault()

        // const datos = {
        //     name,mail
        // }
        // getForm(datos)

    }

  return (
    <div className='bg-green-200'>
        <h3>Hijo 4</h3>
        <br />
        <form action="" onSubmit={handleSubmit} className='bg-blue-300 border'>
            <label htmlFor="">nombre</label>
            <input type="text" onChange={(e)=>changeName(e.target.value)}/>
            <br />
            <label htmlFor="">mail</label>
            <input type="text"onChange={(e)=>changeMail(e.target.value)} />
            <br />
            <button>enviar</button>
        </form>
        
    </div>
  )
}

export default Hijo4
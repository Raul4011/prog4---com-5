import {useState} from 'react'

const Formulario = () => {

    const form = {
        nombre:'',
        email:'',
        telefono:'',
        direccion:'',
        edad:0
    }


    const [nombre,setNombre] =useState('')
    const [email,setEmail] = useState('')

    const [formulario,setFormulario] = useState(form)

    const handleChange = (e) =>{

        const {name,value} = e.target
        
        setFormulario({...formulario,[name]:value})

    }


    const handleSubmit = (e) =>{
       e.preventDefault()
        //peticion al backend - POST
        //enviando ese formulario lleno
        //esperar una respuesta
        //
        axios.post('/register',formulario)
    }
    

  return (
    <div>
        <h3>Formulario de Facebook</h3>
      <br />

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">nombre y apellido</label>
        <input type="text" onChange={handleChange} name='nombre' defaultValue={form.nombre}/>
        <br />
        <label htmlFor="">email</label>
        <input type="email" onChange={handleChange} name='email' defaultValue={form.email}/>
        <br />
        <label htmlFor="">telefono</label>
        <input type="text" onChange={handleChange} name='telefono' defaultValue={form.telefono}/>
        <br />
        <label htmlFor="">direccion</label>
        <input type="text" onChange={handleChange} name='direccion' defaultValue={form.direccion}/>
        <br />
        <label htmlFor="">edad</label>
        <input type="text" onChange={handleChange} name='edad' defaultValue={form.edad}/>
        <br />
        <button type='submit'>create account</button>
      </form>
      <br />
      <h3>{form.nombre} {form.edad}</h3>
    </div>
  )
}

export default Formulario
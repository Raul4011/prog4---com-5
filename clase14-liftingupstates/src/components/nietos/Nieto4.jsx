import {useState} from 'react'
import {Form} from 'react-bootstrap'

function Nieto4({obtenerValores}) {

    const [nombre,setNombre] = useState('')
    const [edad,setEdad] = useState(null)
    const [tel, setTel] = useState(null)
    

    const initialState = {
        nombre:'',
        edad:'',
        tel:''
    }

    const [formulario,setFormulario] = useState(initialState)

    const handleChange = (e) =>{
        setFormulario({...formulario,[e.target.name]:e.target.value})
    }



    const handleSubmit = (e) =>{
        e.preventDefault()
        //tengo el formulario lleno 

        //enviar a la db 

        //enviar el nieto 2
        obtenerValores(formulario)
    }

    return (
        <div className='bg-secondary'>
            <br />

            <h3>nieto4</h3>

            <br />
            <Form action="" style={{width:'80%',margin:"auto"}} onSubmit={handleSubmit}>
                <Form.Label htmlFor="">nombre</Form.Label>
                <Form.Control type="text" name='nombre' onChange={handleChange} value={initialState.nombre}/>
                <br />
                <Form.Label htmlFor="">edad</Form.Label>
                <Form.Control type="number" name='edad' onChange={handleChange} value={initialState.edad}/>
                <br />
                <label htmlFor="">telefono</label>
                <Form.Control name='tel' type="tel" onChange={handleChange} value={initialState.tel}/> 
                <br />
                <button type="submit" className='btn btn-success'>enviar</button>
            </Form>
            <br />
           



            <br /><br />
        </div>
    )
}

export default Nieto4
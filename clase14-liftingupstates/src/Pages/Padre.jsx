import { useState } from "react"
import Hijo1 from "../components/hijos/Hijo1"
import Hijo2 from "../components/hijos/Hijo2.jsx"
import {Row,Col} from 'react-bootstrap'

const Padre = () => {

    console.log("PADRE MONTADO");

    const [datos,setDatos] = useState({})
    const [contador,setContador] = useState(0)


    const obtenerValores = (valores) =>{
        //console.log(valores);
        setDatos(valores)
    }

    const obtenerContador = (count) =>{
        //console.log(count);
        setContador(count)
    }

    return (
    <div>

        <Row>
            <Col md={6} lg={6} xl={6}>
              <Hijo1 contador={contador} datos={datos}/>
            </Col>
            <Col md={6} lg={6} xl={6}>
             <Hijo2 obtenerContador={obtenerContador} obtenerValores={obtenerValores} setDatos={setDatos}/>
            </Col>
          
           
        </Row>


    </div>)
}
export default Padre
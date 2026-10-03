import {useParams} from "react-router-dom"

const MainProductDetail = () => {

    const{id}=useParams()

    //get a mi db 
    //obtengo los datos de ese id
    //luego muestro debajo el detalle de ese producto


  return (
    <div>
        <br />
        <h3>el producto es el num {id}</h3>
        <br />
    </div>
  )
}

export default MainProductDetail
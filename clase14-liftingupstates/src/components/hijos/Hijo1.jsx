import Nieto1 from "../nietos/Nieto1"
import Nieto2 from "../nietos/Nieto2"


const Hijo1 = (props) => {

   // const {contador,datos} = props

  return (
    <div>
        <Nieto1 contador={props.contador}/>
        <Nieto2 datos={props.datos}/>
    </div>
  )
}

export default Hijo1
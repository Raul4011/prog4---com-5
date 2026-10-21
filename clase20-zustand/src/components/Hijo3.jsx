import {useState} from 'react'
import useStore from '../store/useStore'

const Hijo3 = () => {

    const {incrementar,decrementar} = useStore()


    // const [count,setCount] = useState(0)

    // const increment = () =>{
    //     setCount(count+1)
    // }
    // const decrement = () =>{
    //     setCount(count-1)
    // }
    // getCount(count)

  return (
    <div className='bg-red-200 border'>
    <h3>soy el hijo 3</h3>
    <br />
    <button onClick={incrementar}>+</button>
    <button  onClick={decrementar}>-</button>

    <br />
   
    </div>
  )
}

export default Hijo3
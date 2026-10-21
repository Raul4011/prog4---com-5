
import useStore from '../store/useStore'

const Hijo1 = () => {


    const {contador} = useStore()


  return (
    <div className='bg-gray-400 border'>
        <h2>Soy el Hijo 1</h2>
        <br />
        <h3>contador: {contador}</h3>
    </div>
  )
}

export default Hijo1
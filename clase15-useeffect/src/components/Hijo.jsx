import {useEffect} from 'react'

const Hijo = () => {



    


    useEffect(() => {
      console.log('componente HIJO montado');
    
      return () => {
       console.log('componente HIJO desmontado');
      }
    }, [])
    
  return (
    <div>
        <br />
        <h2>soy el componente HIJO</h2>
        <br />
    </div>
  )
}

export default Hijo
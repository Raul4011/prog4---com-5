import React from 'react'

const MainHome = () => {
 //let contador = 0 ;


  // let funcionEspecial = useState(57)

  // console.log(funcionEspecial);

  // console.log(funcionEspecial[0]);
  // console.log(funcionEspecial[1]);


  let frutas = ['banana','manzana','pera','uva']

  frutas.push('kiwi')

  const [contador,setContador] = useState(0)


  let initialState = 'fabri coronel'
  const [nombreAlumno,setNombreAlumno] = useState(initialState)

  const [show,setShow] = useState(true)


  const Incrementar = () =>{
   setContador(contador+1)
    console.log(contador);
  }

  const Decrementar = () =>{
    setContador(contador-1)
    console.log(contador);
  }

  const cambiarNombre = ( ) =>{
    setNombreAlumno('sofi montenegro')
  }

  
  const toggleSaludo = () => {
    setShow(!show)
  }

  return (
    <div>
         <br /><br />
      <button type='button' onClick={Decrementar}>-</button>

      <button  type='button' onClick={Incrementar}>+</button>
      <h3>contador:{contador}</h3>
      
      <br />
      <h2>alumno com 5: {nombreAlumno}</h2>
      <button type="button" onClick={cambiarNombre}>cambiar nombre</button>
      <br />

    <button type="button" onClick={toggleSaludo}>{show ? 'ocultar saludo' : 'mostrar saludo'}</button>
      {show===true ? <Saludo/>:null }
   
    <br /><br />
    <ol>
      {frutas.map((fruta) => <li>{fruta}</li>)}
    </ol>

    </div>
  )
}

export default MainHome
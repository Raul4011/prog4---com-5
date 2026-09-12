import Home from "./Pages/Home"


const App = () => {

  //js puro

  let titulo = "Hola React js"

  const Profesor = {
    nombre:"raul politi",
    materia:"prog 4"
  }

  const perritos = ['firu','terry','blanquita']


  const saludar =()=>{
    console.log('Hola desde la funcion saludar');
  }

  

  return (
    <div>
      <Home titulo={titulo} saludar={saludar} perritos={perritos} Profesor={Profesor} />

    

    </div>
  )
}

export default App
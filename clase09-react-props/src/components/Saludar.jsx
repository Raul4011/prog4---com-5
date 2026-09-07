


const Saludar = (props) => {
    console.log(props);
  return (
    <div className="saludar">
      <h1>Hola, {props.titulo}!</h1>
    </div>
  )
}

export default Saludar
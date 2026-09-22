

const Nieto2 = ({datos}) => {
   // console.log(datos);
  return (
    <div>
        <br />
        <h3>Nieto2</h3>
        <br />

        <h3>Datos del Formulario</h3>
        <ul>
            <li>nombre: {datos.nombre}</li>
            <li>edad: {datos.edad}</li>
            <li>telefono: {datos.tel}</li>
        </ul>
        <br />

        <br />
    </div>
  )
}

export default Nieto2
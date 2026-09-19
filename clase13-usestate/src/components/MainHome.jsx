import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'


const MainHome = () => {

  const [dado1, setDado1] = useState(1)
  const [dado2, setDado2] = useState(6)
  const [tiradas, setTiradas] = useState([1])

  //useState -> [valor Inicial , funcion que actualiza ]


  //console.log(aleatorio);

  const imagen = `./${dado1}.jpeg`
  const imagen2 = `./${dado2}.jpeg`

  const handlePlay = () => {

    const tirar = () => {
      let aleatorio = Math.floor(Math.random() * 6) + 1
      let aleatorio2 = Math.floor(Math.random() * 6) + 1
      //console.log(aleatorio);
      //console.log(aleatorio2)

      setDado1(aleatorio)
      setDado2(aleatorio2)

    }

    setTimeout(tirar, 100)
    setTimeout(tirar, 200)
    setTimeout(tirar, 300)
    setTimeout(tirar, 400)
    setTimeout(tirar, 500)
    setTimeout(tirar, 600)
    setTimeout(tirar, 700)
    setTimeout(tirar, 800)

    setTimeout(() => {
      let aleatorio = Math.floor(Math.random() * 6) + 1
      let aleatorio2 = Math.floor(Math.random() * 6) + 1
      //console.log(aleatorio);
      //console.log(aleatorio2)

      setDado1(aleatorio)
      setTiradas([...tiradas, dado1])
      setDado2(aleatorio2)

      console.log(tiradas);

      if (aleatorio === aleatorio2) {
        alert('ganaste....!')
      }
      //console.log(dado1);
      //console.log(dado2);
    }, 800)

  }


  const handleSubmit = (e) => {
    e.preventDefault()





  }



  return (
    <div>
      <br />
      <h2>Juego de Dados</h2>
      <br />

      <Row >
        <Col md={6} sm={12} lg={6} xl={4}>
          <img src={imagen} alt="" />
        </Col>
        <Col md={6} sm={12} lg={6} xl={4}>
          <img src={imagen2} alt="" />
        </Col>
      </Row>
      <br />
      <h3>tirada: - {dado1} - {dado2}</h3>
      <button type='button' onClick={handlePlay}>jugar</button>

      <br /><br />
      
    </div>
  )
}

export default MainHome
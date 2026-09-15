import React from 'react'
import {Card,Button, Col} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
const AnimalCard = (props) => {
    console.log(props);
  return (
    <Col >
    
    <Card style={{ width: '18rem' }}>
     <Image variant="top" src={props.animal.imagen} style={{width:'300px',height:'300px'}} thumbnail/>
     <Card.Body>
       <Card.Title>nombre: {props.animal.nombre}</Card.Title>
       <Card.Text>
         raza:{props.animal.raza}
       </Card.Text>
        <Card.Text>
         color:{props.animal.color}
       </Card.Text>
       <Button variant="primary">ver mas</Button>
     </Card.Body>
   </Card>
    </Col>
  )
}

export default AnimalCard
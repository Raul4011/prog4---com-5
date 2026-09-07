import {Card,Button} from 'react-bootstrap'

const ProductCard = ({titulo,descripcion,imagen}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default ProductCard
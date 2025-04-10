import HorrorB from "../horror.json"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { Badge, Col, Container, Row } from "react-bootstrap"

const Menu = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        {HorrorB.map((book) => (
          <Col xs={12} sm={6} md={4} lg={2} key={book.asin} className="mb-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Badge bg="info fs-6">Prezzo: {book.price}€</Badge>
                <Card.Text>Categoria: {book.category}</Card.Text>
                <Link to={"/details/" + book.asin} className="btn btn-warning">
                  Buy
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Menu

import { useState, useEffect } from "react"
import HorrorB from "../horror.json"
import { Link, useParams } from "react-router-dom"
import Card from "react-bootstrap/Card"
import { Badge, Col, Container, Row } from "react-bootstrap"

const Details = function () {
  const params = useParams()
  const [foundBook, setFoundBook] = useState(null)

  useEffect(() => {
    const book = HorrorB.find((book) => book.asin === params.bookasin)
    if (book) {
      setFoundBook(book)
    }
  }, [params.bookasin])

  if (!foundBook) {
    return <h3 className="text-center">Libro non trovato!</h3>
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <Card>
            <Card.Img variant="top" src={foundBook.img} />
            <Card.Body>
              <Card.Title>{foundBook.title}</Card.Title>
              <Badge bg="info fs-6">Prezzo: {foundBook.price}€</Badge>
              <Card.Text>Categoria: {foundBook.category}</Card.Text>
              <Link to="/menu" className="btn btn-warning">
                Torna indietro
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details

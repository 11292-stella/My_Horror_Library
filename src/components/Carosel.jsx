import { Component } from "react"
import Carousel from "react-bootstrap/Carousel"
import { Col, Container, Row, ListGroup } from "react-bootstrap"
import HorrorB from "../horror.json"

class Carosel extends Component {
  state = {
    activeBook: HorrorB[0],
  }

  render() {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Carousel
              onSlide={(i) => {
                this.setState({
                  activeBook: HorrorB[i],
                })
              }}
            >
              {HorrorB.map((book) => (
                <Carousel.Item key={book.asin}>
                  <img
                    src={book.img}
                    alt={book.title}
                    className=" w-100"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <ListGroup>
              <ListGroup.Item>
                <strong>{this.state.activeBook.title}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Prezzo: {this.state.activeBook.price}€
              </ListGroup.Item>
              <ListGroup.Item>
                Categoria: {this.state.activeBook.category}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Carosel

import { Component } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import { Container, Row, Col } from "react-bootstrap"

class FormAct extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      dateTime: "",
      smoking: false,
      specialRequest: "",
    },
  }

  bottone = (event) => {
    event.preventDefault()
    console.log(`ora faccio fetch`)

    fetch("https://striveschool-api.herokuapp.com/api/reservation", {
      method: "post",
      body: JSON.stringify(this.state.reservation),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("salvata")

          this.setState({
            reservation: {
              name: "",
              phone: "",
              numberOfPeople: "1",
              dateTime: "",
              smoking: false,
              specialRequest: "",
            },
          })
        } else {
          throw new Error("errore")
        }
      })
      .catch((e) => {
        console.log("errore", e)
      })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={this.bottone}>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="marius"
                  required
                  value={this.state.reservation.name}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        name: event.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              {this.state.reservation.name === "Al bano" && (
                <Alert variant="info" className="text-center">
                  <h1>Un bicchiere di vino con un panino!</h1>
                  <img
                    src="https://www.ispacnr.it/wp-content/uploads/2025/03/albano-carisi-26325-ispacnr.it_-1024x683.jpg"
                    alt="Albano"
                    style={{ width: "200px" }}
                  />
                </Alert>
              )}

              <Form.Group className="mb-3">
                <Form.Label>N. di telefono</Form.Label>
                <Form.Control
                  type="tel"
                  required
                  value={this.state.reservation.phone}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: event.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quanti siete</Form.Label>
                <Form.Select
                  aria-label="numero di persone"
                  value={this.state.reservation.numberOfPeople}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        numberOfPeople: event.target.value,
                      },
                    })
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando venite</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.reservation.dateTime}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        dateTime: event.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori"
                  checked={this.state.reservation.smoking}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        smoking: event.target.checked,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie, malanni, bambini...</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.reservation.specialRequest}
                  onChange={(event) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        specialRequest: event.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FormAct

import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNav = function () {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid="sm">
          <Navbar.Brand>Horror Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className={
                  location.pathname === `/home` ? `nav-link active` : `nav-link`
                }
                to={"/"}
              >
                home
              </Link>
              <Link className="nav-link" to={"/menu"}>
                menu
              </Link>

              <Link className="nav-link" to={"/carosel"}>
                carosel
              </Link>
              <Link className="nav-link" to={"/comment"}>
                comment
              </Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default MyNav

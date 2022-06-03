import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const MyNavbar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fake News Classifier
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Petición
              </Nav.Link>
              <Nav.Link as={Link} to="/articulo">
                Artículo
              </Nav.Link>
              <Nav.Link as={Link} to="/resultados">
                Panel de Resultados
              </Nav.Link>
              <NavDropdown title="Información" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/infoEda">
                  Exploración de Datos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/infoCatboost">
                  Catboost
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/infoRnn">
                  Recurrent Neural Networks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default MyNavbar;

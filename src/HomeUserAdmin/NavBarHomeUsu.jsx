import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBarHomeUsu() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#">Administrador</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/HomeUserAdmin/HomeUser">
              Home
            </Nav.Link>
            <Nav.Link href="/HomeUserAdmin/Estadisticas">Estadisticas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <Nav.Link as={Link} to="/HomeUserAdmin/Edicion/EdicionProducto">
                Edicion Producto
              </Nav.Link>
            </NavDropdown>

            <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/HomeUserAdmin/Alta/AltaUsuarios">
                Alta Usuario
              </NavDropdown.Item>
              <NavDropdown.Item href="/HomeUserAdmin/Edicion/EdicionUser">
                Editar Usuario
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admins" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/HomeUserAdmin/Edicion/EdicionAdmin">
                Editar Admins
              </NavDropdown.Item>
              <NavDropdown.Item href="/HomeUserAdmin/AltaAdmin">
                Alta Admins
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reportes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/HomeUserAdmin/Reporte/Reporte">
                Reportes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/LogIn/LogOutUser">
              Cerrar Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHomeUsu;

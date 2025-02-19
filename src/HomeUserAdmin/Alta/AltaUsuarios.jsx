import "../../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function AltaUsuario() {
  const handleAlta = () => {
    // Muestra un cuadro de confirmación al usuario
    const isConfirmed = window.confirm(
      "¿Estás seguro de que deseas dar de alta?"
    );

    if (isConfirmed) {
      // Si el usuario confirma, realiza la acción
      alert("¡Alta exitosa!");
      // Aquí puedes agregar la lógica para dar de alta en la base de datos o realizar otras acciones
    } else {
      // Si el usuario cancela
      alert("Alta cancelada");
    }
  };
  return (
    <div className="bodyAltaUsuario">
      <div className="divCard" style={{ position: "relative" }}>
        <Card
          style={{
            width: "20rem",
            position: "relative",
            top: "1px", // puedes ajustar el valor de "top" si quieres moverlo un poco hacia abajo
            right: "450px", // esto lo moverá hacia la izquierda
          }}
        >
          <Card.Body>
            <Card.Title>Nuevo Usuario</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Que puede hacer ?
            </Card.Subtitle>
            <Card.Text>
              El Usuario puede realizar cambios de sus datos y compras de los
              productos que se brinden
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Form>
        <Form.Label>Alta de Usuario</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Select aria-label="Default select example">
            <option>Elija las Opciones</option>
            <option value="1">Usuario</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleAlta} variant="primary" type="submit">
          Alta
        </Button>
      </Form>
    </div>
  );
}
export default AltaUsuario;

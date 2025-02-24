import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

function LogInUser() {
  const navigate = useNavigate(); // Obtén el hook navigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Aquí puedes agregar lógica para autenticar al usuario, por ejemplo:
    // Si el inicio de sesión es exitoso, redirigir al usuario a la página de inicio del usuario
    // Puedes validar las credenciales antes de redirigir

    // Redirige al usuario a la página de usuario después de iniciar sesión
    navigate("/"); // Ajusta la ruta según tu estructura de rutas
  };

  return (
    <div className="bodyLogin">
      <Form className="FormLogin d-block mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LogInUser;

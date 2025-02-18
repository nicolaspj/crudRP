import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

function LogOutUser() {
  const navigate = useNavigate(); // Obtén el hook navigate

  const handleLogOut = () => {
    // Aquí debes limpiar cualquier dato relacionado con la sesión
    // Por ejemplo, puedes eliminar un token de autenticación del localStorage
    localStorage.removeItem("authToken"); // Elimina el token de autenticación, si lo tienes

    // Redirige al usuario a la página de login después de cerrar sesión
    navigate("/Home/Home.jsx");
  };

  return (
    <div className="bodyLogOut">
      <Form>
        <h3>¿Estás seguro de que quieres cerrar sesión?</h3>
        <Button variant="primary" onClick={handleLogOut}>
          Cerrar sesión
        </Button>
      </Form>
    </div>
  );
}

export default LogOutUser;

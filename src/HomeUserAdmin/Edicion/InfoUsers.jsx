import "../../App.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InfoUsers() {
  // Array de usuarios
  const initialUsers = [
    {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      category: "Usuarios",
    },
    {
      name: "Juan Juan Pérez",
      email: "juan.j.perez@example.com",
      category: "Usuarios",
    },
  ];

  // Estado de usuarios
  const [users, setUsers] = useState(initialUsers);

  // Estado para almacenar los cambios temporales al editar
  const [editedUser, setEditedUser] = useState(null);

  // Función para manejar la edición
  const handleEdit = (index) => {
    const userToEdit = users[index];
    setEditedUser({ ...userToEdit, index }); // Guardamos el usuario a editar y su índice
  };

  // Función para actualizar el usuario editado
  const handleSave = () => {
    if (editedUser) {
      const updatedUsers = [...users];
      updatedUsers[editedUser.index] = {
        name: editedUser.name,
        email: editedUser.email,
        category: editedUser.category,
      };

      setUsers(updatedUsers);
      setEditedUser(null); // Limpiamos el formulario después de guardar
      console.log("Usuario actualizado:", updatedUsers[editedUser.index]);
    }
  };

  // Función para manejar cambios en los inputs de edición
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Función para cancelar los cambios
  const handleCancel = () => {
    setEditedUser(null); //se reestablece al estado anterior
  };

  return (
    <div className="infoCard">
      {users.map((user, index) => (
        <Card
          key={index}
          style={{
            width: "18rem",
            margin: "10px",
            border:
              editedUser && editedUser.index === index
                ? "2px solid green"
                : "1px solid #ddd",
          }}
        >
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              Email: {user.email}, Cargo: {user.category}
            </Card.Text>
            <Button variant="primary" onClick={() => handleEdit(index)}>
              Editar
            </Button>
          </Card.Body>

          {/* Solo mostrar el formulario de edición si este es el usuario que estamos editando */}
          {editedUser && editedUser.index === index && (
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Cargo</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={editedUser.category}
                    onChange={handleChange}
                    readOnly
                  />
                </Form.Group>

                <Button variant="success" onClick={handleSave}>
                  Guardar
                </Button>
                <Button variant="danger" onClick={handleCancel}>
                  Cancelar
                </Button>
              </Form>
            </Card.Body>
          )}
        </Card>
      ))}
    </div>
  );
}

export default InfoUsers;

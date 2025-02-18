import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function HomeUsu() {
  // Definir el estado de los productos
  const [products, setProducts] = useState([
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
    { id: 5, name: "Producto 5" },
    { id: 6, name: "Producto 6" },
    { id: 7, name: "Producto 7" },
    { id: 8, name: "Producto 8" },
    { id: 9, name: "Producto 9" },
    { id: 10, name: "Producto 10" },
  ]);

  // Estado para controlar la página activa
  const [currentPage, setCurrentPage] = useState(1);

  // Limitar los productos según la página activa (3 por página)
  const productsPerPage = 3;
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Función para cambiar la página
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Función para eliminar un producto
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  // Función para cambiar el nombre de un producto
  const changeProductName = (id, newName) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, name: newName } : product
      )
    );
  };

  return (
    <div className="bodyHusu">
      <>
        <ListGroup className="list-group list-group-horizontal-md">
          {currentProducts.map((product) => (
            <ListGroup.Item key={product.id}>
              {product.name}
              <Button
                variant="danger"
                onClick={() => removeProduct(product.id)}
                className="ms-2"
              >
                Eliminar
              </Button>
              <Button
                variant="warning"
                onClick={() =>
                  changeProductName(product.id, `Nuevo ${product.name}`)
                }
                className="ms-2"
              >
                Editar
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
      {/* Paginación debajo de los productos */}
      <div className="mt-3">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              variant="primary"
              onClick={() => changePage(page)}
              disabled={currentPage === page}
              className="ms-2"
            >
              {page}
            </Button>
          )
        )}
      </div>
    </div>
  );
}

export default HomeUsu;

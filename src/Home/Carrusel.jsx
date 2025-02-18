import Carousel from "react-bootstrap/Carousel";
import React from "react";
import lobosImagen from "../assets/lobos.jpg";
function Carrusel() {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{ maxWidth: "30%", margin: "0 auto" }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={lobosImagen} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lobosImagen} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lobosImagen} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;

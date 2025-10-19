// src/pages/DetalleProducto.jsx
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../data/productos'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useCarrito } from '../context/CarritoContext'

function DetalleProducto() {
  const { id } = useParams(); // Obtener ID desde la URL
  const producto = productos.find(p => p.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);

  const {agregarAlCarrito} = useCarrito()

  if (!producto) {
    return (
      <Container className="mt-5 text-center">
        <p className="text-danger">Producto no encontrado.</p>
      </Container>
    )
  }
  const handleAgregar = () => {
    agregarAlCarrito(producto.id, cantidad);
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          {/* Imagen */}
          <Col md={6}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded"
            />
          </Col>

          {/* Información del producto */}
          <Col md={6}>
            <h1 className="mb-3">{producto.nombre}</h1>
            <h3 className="text-primary mb-3">${producto.precio}</h3>

            <Form.Group className="mb-3" controlId="cantidad">
              <Form.Label>Cantidad:</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
            </Form.Group>

            <Button
              variant="success"
              size="lg"
              className="w-100"
              onClick={handleAgregar}
            >
              Agregar al Carrito
            </Button>

            <div className="mt-4">
              <h5>Detalles del producto</h5>
              <p>{producto.descripcion}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DetalleProducto;

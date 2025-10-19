import React, { use, useContext } from 'react';
import productos from '../data/productos';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
export function ProductoCard() {
  const {agregarAlCarrito} = useCarrito();
  return (
    <>
    <Container>
      <Row id="lista-productos">
        {Object.values(productos).map(p => (
          <Col key={p.id} xs="12" md="6" lg="4" xl="3" xxl="3" className="mb-4">
            <Card className='prod-card h-100 d-flex flex-column'>
                <Card.Img variant="top" src={p.imagen} alt={p.nombre} className='img-fluid' />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                  <p className="fw-bold">${p.precio}</p>
                  <div className="d-flex flex-column gap-2 mt-auto">
                    <Button
                      variant="primary"
                      as={Link} to={`/detalle-producto/${p.id}`}
                    >
                      Comprar
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => agregarAlCarrito(p.id,1)}
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}
export default ProductoCard;
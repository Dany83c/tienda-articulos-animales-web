import { useEffect, useState } from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext'; // Asegúrate que el contexto esté bien importado
import productos from '../data/productos'; // Asegúrate de tener esta fuente de datos

const ProductosDestacados = () => {
  const [destacados, setDestacados] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    // Elegir 4 productos aleatorios
    const copia = [...productos];
    const mezclados = copia.sort(() => 0.5 - Math.random());
    const seleccionados = mezclados.slice(0, 4);
    setDestacados(seleccionados);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Productos destacados</h2>
      <Row>
        {destacados.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={p.imagen}
                alt={p.nombre}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Text>{p.descripcion}</Card.Text>
                <p className="fw-bold">${p.precio}</p>
                <div className="mt-auto d-flex flex-column gap-2">
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/detalle-producto/${p.id}`}
                  >
                    Comprar
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => agregarAlCarrito(p.id, 1)}
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
  );
};

export default ProductosDestacados;

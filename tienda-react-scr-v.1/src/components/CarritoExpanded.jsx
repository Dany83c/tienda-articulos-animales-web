import { useCarrito } from '../context/CarritoContext';
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Card,
} from 'react-bootstrap';

function CarritoExpanded() {
  const { carrito, eliminarDelCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <Container className="py-5">
      <h2 className="mb-4">Tu carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-muted">El carrito está vacío.</p>
      ) : (
        <>
          <ListGroup variant="flush">
            {carrito.map((item) => (
              <ListGroup.Item key={item.id} className="mb-3">
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <Image src={item.imagen} fluid rounded />
                  </Col>
                  <Col xs={5} md={4}>
                    <h5 className="mb-1">{item.nombre}</h5>
                    <p className="mb-0 text-muted">
                      Precio: ${item.precio} <br />
                      Cantidad: {item.cantidad}
                    </p>
                  </Col>
                  <Col xs={4} md={3}>
                    <p className="fw-bold mb-0">
                      Total: ${item.precio * item.cantidad}
                    </p>
                  </Col>
                  <Col xs={12} md={3} className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card className="mt-4">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <h5>Total general:</h5>
              <h4 className="fw-bold">${total}</h4>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default CarritoExpanded;
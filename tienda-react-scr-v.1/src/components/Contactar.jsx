import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

const Contactar = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    motivo: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de campos rellenos
    if (form.nombre.length < 4 || !form.correo.includes('@') || form.motivo.length < 5) {
      setError('Por favor completa todos los campos correctamente.');
      return;
    }

    setError('');
    setEnviado(true);

    // Simular envío
    setTimeout(() => {
      alert('Mensaje enviado con éxito');
      setForm({ nombre: '', correo: '', motivo: '' });
      setEnviado(false);
    }, 1000);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center mb-4">Contáctanos</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {enviado && <Alert variant="success">Enviado correctamente </Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Ej: Pepe González"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  placeholder="Ej: usuario@gmail.com"
                  value={form.correo}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="motivo">
                <Form.Label>Motivo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="motivo"
                  placeholder="Escribe tu mensaje aquí..."
                  value={form.motivo}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactar;

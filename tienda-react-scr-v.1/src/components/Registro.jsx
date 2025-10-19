import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    confirmarCorreo: '',
    contra: '',
    confirmarContra: '',
    telefono: '',
    region: '',
    comuna: '',
  });

  const [errores, setErrores] = useState({});

  // Validaciones individuales
  const validarCampo = (name, value) => {
    let msg = '';

    switch (name) {
      case 'nombre':
        if (value.length < 4 || value.length > 10) msg = 'El nombre debe tener entre 4 y 10 caracteres.';
        break;

      case 'correo':
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
          msg = 'Correo no válido.';
        }
        break;

      case 'confirmarCorreo':
        if (value !== form.correo || !value) msg = 'Los correos no coinciden.';
        break;

      case 'contra':
        if (value.length < 4 || value.length > 12) msg = 'La contraseña debe tener entre 4 y 12 caracteres.';
        break;

      case 'confirmarContra':
        if (value !== form.contra || !value) msg = 'Las contraseñas no coinciden.';
        break;

      case 'telefono':
        if (value && (value < 900000000 || value > 999999999)) {
          msg = 'Teléfono no válido.';
        }
        break;

      default:
        break;
    }

    setErrores(prev => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));
    validarCampo(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todo el formulario al enviar
    Object.entries(form).forEach(([key, value]) => validarCampo(key, value));

    const erroresActivos = Object.values(errores).some(msg => msg !== '');
    if (erroresActivos) return;

    // Guardar en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    usuarios.push({
      nombre: form.nombre.trim(),
      email: form.correo.trim(),
      password: form.contra.trim(),
      telefono: form.telefono.trim(),
      region: form.region,
      comuna: form.comuna,
    });

    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
    alert('Usuario registrado con éxito!');
    navigate('/login-usuario');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Registro</h2>
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                isInvalid={!!errores.nombre}
                isValid={form.nombre && !errores.nombre}
              />
              <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                isInvalid={!!errores.correo}
                isValid={form.correo && !errores.correo}
              />
              <Form.Control.Feedback type="invalid">{errores.correo}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="confirmarCorreo"
                value={form.confirmarCorreo}
                onChange={handleChange}
                isInvalid={!!errores.confirmarCorreo}
                isValid={form.confirmarCorreo && !errores.confirmarCorreo}
              />
              <Form.Control.Feedback type="invalid">{errores.confirmarCorreo}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="contra"
                value={form.contra}
                onChange={handleChange}
                isInvalid={!!errores.contra}
                isValid={form.contra && !errores.contra}
              />
              <Form.Control.Feedback type="invalid">{errores.contra}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmarContra"
                value={form.confirmarContra}
                onChange={handleChange}
                isInvalid={!!errores.confirmarContra}
                isValid={form.confirmarContra && !errores.confirmarContra}
              />
              <Form.Control.Feedback type="invalid">{errores.confirmarContra}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono (opcional)</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                isInvalid={!!errores.telefono}
                isValid={form.telefono && !errores.telefono}
              />
              <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Región</Form.Label>
              <Form.Control
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Comuna</Form.Label>
              <Form.Control
                type="text"
                name="comuna"
                value={form.comuna}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrarse
            </Button>

          
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registro;

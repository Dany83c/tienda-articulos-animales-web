import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const exito = login(credenciales.email, credenciales.password);

    if (!exito) {
      setError('Correo o contraseña incorrectos');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} required />
        </Form.Group>

        <Button variant="success" type="submit">Iniciar sesión</Button>
    
      </Form>
    </div>
  );
}

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function FooterBar(){

  return(
   <footer className="py-4  border-top footer-fixed" >
      <Container className="text-center text-md-start " >
        <Row className="align-items-center" >
         
          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-0">&copy; 2025 Viva Pets. Todos los derechos reservados.</p>
          </Col>
          <Col md={4} className="d-flex justify-content-center gap-3 mb-3 mb-md-0">
            <a href="#">Política de privacidad</a>
            <span>|</span>
            <a href="#">Términos y condiciones</a>
          </Col>
          <Col md={4}>
            <Form className="text-md-end">
              <p className="mb-2">Suscríbase para recibir las últimas ofertas</p>
              <div className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="email"
                  className="me-2"
                  id="emailFooterOferta"
                />
                <Button variant="outline-success" type="submit">
                  Suscribir
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default FooterBar;
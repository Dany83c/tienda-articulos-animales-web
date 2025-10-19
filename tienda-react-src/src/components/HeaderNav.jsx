import React, { useContext } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Badge,
  Dropdown,
  Image,
  Button
} from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';
import CarritoDrop from './CarritoDrop';
import { Link } from 'react-router-dom';
function HeaderNav(){
  const {totalProductos}= useContext(CarritoContext)
    
  return(   
    <header>
      <Navbar expand={ "xxl" }  className="navbar-light ">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image
              src="https://img.freepik.com/premium-vector/cute-petshop-logo-with-cat-dog_454510-56.jpg"
              alt="Logo"
              width="50"
              height="60"
              className="d-inline-block align-text-top me-2"
            />
            Viva Pets
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/" active>Home</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>

             
            <Dropdown align="end" className="ms-auto">
              <Dropdown.Toggle
                as="a"
                href="#"
                className="nav-link position-relative"
                id="cartDropdown"
              >
                <i className="bi bi-cart3"></i>
                <Badge
                  pill  
                  bg="primary"
                  className="position-relative"
                  id="carritoCounter"
                  style={{ backgroundColor: 'cornflowerblue' }}
                >
                  {totalProductos}
                  <span className="visually-hidden">productos en el carrito</span>
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-3" style={{ minWidth: '300px' }}>
                <strong>Tu carrito</strong>
                <Dropdown.Divider />
                <div id="lista-productos-dropdown">
                 
                  <CarritoDrop/>

                </div>
                <Dropdown.Divider />
                <div>Total: <span id="total-carrito-dropdown">$0</span></div>
                  <Button
                  
                      variant="outline-primary"
                      as={Link} to={'/carrito'}
                      className='boton-texto-oscuro'
                    >
                      Ir al Carrito
                  </Button>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )

}
export default HeaderNav;
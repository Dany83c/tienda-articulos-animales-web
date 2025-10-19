import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Button } from 'react-bootstrap'

function CarritoExpanded() {
  const { carrito, eliminarDelCarrito, totalPrecio } = useContext(CarritoContext);

  if (carrito.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <ul className="list-group">
      {carrito.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
          {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
          <Button
            variant="danger"
            size="sm"
            onClick={() => eliminarDelCarrito(item.id)}
          >
            &times;
          </Button>
        </li>
      ))}
      <p className="mt-2 fw-bold">Total: ${totalPrecio}</p>
    </ul>
  );
}
export default CarritoExpanded;
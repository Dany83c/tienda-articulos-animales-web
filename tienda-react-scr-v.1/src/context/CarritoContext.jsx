import React, { createContext,useContext, useState, useEffect } from 'react';
import productos from '../data/productos';

export const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('productosCarrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('productosCarrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (id, cantidad = 1) => {
    const producto = productos.find(p => p.id === parseInt(id));
    if (!producto) return;

    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
        );
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== parseInt(id)));
  };

  const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        totalProductos,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

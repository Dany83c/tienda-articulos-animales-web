import React from 'react'
import { useState } from 'react'

import './App.css'
import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';

import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import DetallesProductos from './pages/detallesProductos';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import RegistroUsuario from './pages/RegistroUsuario';
import LoginUsuario from './pages/LoginUsuario';
import DetalleBlog from './components/DetalleBlog';

function App() {
  const [count, setCount] = useState(0)

  return ( 
  <>
    <Router>
      <HeaderNav/>
      <main>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/detalle-producto/:id' element={<DetallesProductos/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path="/blogs/:id" element={< DetalleBlog/>} />

          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/registro-usuario' element={<RegistroUsuario/>}/>
          <Route path='/login-usuario' element={<LoginUsuario/>}/>

          

          <Route path="*" element={<p className="text-center mt-5">Página no encontrada</p>} />

        </Routes>
    
      </main>

      <FooterBar/>
    </Router>
    
    

  </>    
  )
}

export default App

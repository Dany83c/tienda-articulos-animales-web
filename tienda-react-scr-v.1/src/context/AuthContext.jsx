import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Cargar usuario desde localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (user) setUsuario(user);
  }, []);

  const login = (email, password) => {
    // busca en localStorage
    const users = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setUsuario(user);
      localStorage.setItem('usuarioLogueado', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioLogueado');
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    if (users.find(u => u.email === userData.email)) return false;
    users.push(userData);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(users));
    return true;
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

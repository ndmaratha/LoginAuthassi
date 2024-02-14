// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
return useContext(AuthContext);
 
};

 const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token) => {
		localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = (token) => {
    localStorage.setItem("token", "");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

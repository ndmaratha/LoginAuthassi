import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext.jsx';

const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const {isAuthenticated}=useAuth();
    useEffect(()=>{
        if(!isAuthenticated){
         navigate("/login", { replace: true })
        }else{
          navigate("/", { replace: true })
        }
    },[isAuthenticated])
  return children;
}

export default PrivateRoute

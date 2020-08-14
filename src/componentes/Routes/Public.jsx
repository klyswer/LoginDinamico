import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { validarToken } from '../../utils/auth'

function Public({component: Component, ...rest }) {

const userLogged = localStorage.getItem("token");
// validarToken() !== "invalido" 

if( userLogged && userLogged !== "undefined"){
  return <Redirect to="/" />
}
  
  return <Route {...rest} render={Component} />
    
}

export default Public

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { validarToken } from '../../utils/auth'

function Protected({component: Component, ...rest }) {

const userLogged = localStorage.getItem("token");

if(!userLogged || userLogged === "undefined"){
  return <Redirect to="/login" />
}
  
  return <Route {...rest} render={Component} />
    
}

export default Protected

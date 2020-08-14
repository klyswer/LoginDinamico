import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function Protected({component: Component, ...rest }) {

const userLogged = localStorage.getItem("token");

if(!userLogged){
  return <Redirect to="/login" />
}
  
  return <Route {...rest} render={Component} />
    
}

export default Protected

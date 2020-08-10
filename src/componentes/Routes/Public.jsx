import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function Public({component: Component, ...rest }) {

const userLogged = localStorage.getItem("token");

if(userLogged){
  return <Redirect to="/" />
}
  
  return <Route {...rest} render={Component} />
    
}

export default Public

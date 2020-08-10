import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

  const authentication = (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      "email": form.email.value,
      "password": form.pass.value
    }
    const url = `${process.env.REACT_APP_URL_USER}/login`
    Axios.post(url,data)
    .then(response =>{
      localStorage.setItem('token', response.data.token)
      window.location = "/"
    })
    .catch(error => console.log(error))
  }

 const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h2 className="center">Login</h2>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" name="email" id="email" placeholder="Ingrese su email" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="pass">
              Contraseña
              <input type="password" name="pass" id="pass" placeholder="Ingrese su contraseña" required />
            </label>
          </div>
          <div className="form_item">
            <input type="submit" className="button full" value="Iniciar sesión" />
          </div>
        </form>
        <div className="center">
          <p>¿Aún no estas registrado? <Link to="/registro">Crear cuenta</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Login

import React from "react";
import Axios from 'axios'

const singUp = (e) => {
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "name": form.nombre.value,
    "password": form.pass.value
  }
  const url = `${process.env.REACT_APP_URL_USER}/signup`
  Axios.post(url,data)
  .then(response =>{
    alert('Usuario creado con éxito.');
    window.location = '/login'
  })
  .catch(error => alert('Error al crear usuario.'))
}


const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h2 className="center">Creación de cuenta</h2>
        <form onSubmit={singUp.bind()}>
          <div className="form__item">
            <label htmlFor="nombre">
              Nombre
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingrese su nombre"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su email"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="pass">
              Contraseña
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Ingrese su contraseña"
                required
              />
            </label>
          </div>
          <div className="form_item">
            <input
              type="submit"
              className="button full"
              value="Iniciar sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

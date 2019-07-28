import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'


const registration = e => {
  e.preventDefault()
  const form = e.target

  const data ={
    "email": form.email.value,
    "name": form.name.value,
    "password": form.password.value
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
  .then(() => alert("Usuario creado"))
  .catch(() => alert("Error al crear usuario"))
}

const Register = () => (
  <div className="ed-grid">
  <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={registration.bind()}>
      <div className="form__item">
          <label htmlFor="fullname">
            Ingrese su nombre
            <input type="text" name="fullname" id="fullname" placeholder="Ingrese su nombre" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="email">
            Correo electronicos
            <input type="email" name="email" id="email" placeholder="Ingrese su email" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
             Password
            <input type="password" name="password" id="password" placeholder="Ingrese su password" required/>
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Iniciar sesion"/>
        </div>
      </form>
      <div className="center">
          <p>Ya tienes cuenta de usuario?<Link to="/login">Inicia sesion</Link></p>
        </div>
    </div>
  </div>
)

export default Register

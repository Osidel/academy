import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

const authentication = e => {
  e.preventDefault()
  const form = e.target 
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
  .then(r => {
    localStorage.setItem('token', r.data.token)
    window.location = "/"
  })
  .catch(e => console.log(e))

}

const Login = () => (
    <div className="ed-grid">
    <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesion</h1>
        <form onSubmit={authentication.bind()}>
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
          <p>No tienes cuenta de usuario?<Link to="/registro">Crear una cuenta</Link>></p>
        </div>
      </div>
    </div>
)

export default Login

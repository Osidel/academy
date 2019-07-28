import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Protected from './Routes/Protected';
import Public from './Routes/Public';
import Home from "./Pages/Home"
import Especialities from "./Pages/Especialities"
import Especiality from './Pages/Especiality'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import Teachers from './Pages/Teachers'
import Fragment from './Pages/Fragment'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Page404 from './Pages/Page404'
import Header from './Organims/Header';

const App = () => (
    <Router>
      <Header />
      <Switch>
        <Protected path="/" exact component={Home}/>
        <Protected path="/especialidades" exact component={Especialities}/>
        <Protected path="/especialidades/:id" exact component={Especiality}/>
        <Protected path="/cursos" exact component={Courses}/>
        <Protected path="/cursos/:id" exact component={Course}/>
        <Protected path="/profesores" exact component={Teachers}/>
        <Protected path="/clase/:id" exact component={Fragment}/>

        <Public path="/login" exact component={Login}/>
        <Public path="/registro" exact component={Register}/>
        <Route component={Page404} />

      </Switch>
    </Router>
) 



export default App;

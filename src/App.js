import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Navbar  from './components/Navbar.jsx'
import Productos from './components/Productos'
import Contacto from './components/Contacto.jsx'
import Registrarse from './components/Registrarse'
import IniciarSesion from './components/IniciarSesion.jsx'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/addproduct' component={AddProduct}/>
        <Route path='/catalogo' component={Productos}/>
        <Route path='/contacto' component={Contacto}/>
        <Route path='/registro' component={Registrarse}/>
        <Route path='/login' component={IniciarSesion}/>
      </Switch>
    </Router>
  )
}

export default App


import React from 'react'
import {Link} from 'react-router-dom'
import './css/Navbar.css'


const Navbar = () => {
    const Boton=()=>{
        if(document.getElementById('res').className==='res_active'){
           
            document.getElementById('res').classList.add('desactive')
        }
        else{
        
            document.getElementById('res').classList.remove('desactive')
        }

    }

    return (
        <header className='fixed-top'>
        <nav className='navbar navbar-expand-sm'>
            <Link to='/' className='Link-h'>
                <h2 className=' evcom' >
                    <i className="fas fa-store-alt"></i> EvCom
                </h2>            
            </Link>

        <div className="f">
            <div className='navbar-nav'>
                <Link className='nav-item nav-link laa' to='/'>Inicio</Link>
                <Link className='nav-item nav-link laa' to='/contacto'>Contactos</Link>
            </div>
        </div>

        <span className="btn_menu" onClick={Boton}>
            <i className="fas fa-bars"></i>
        </span>
        </nav>
        <div className="res_active desactive" id='res'>
            <div className='navbar-nav'>
                <Link className='nav-item nav-link laa' to='/'>Inicio</Link>
                <Link className='nav-item nav-link laa' to='/contacto'>Contactos</Link>
            </div>
        </div>
        </header>

    )
}

export default Navbar

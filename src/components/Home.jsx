import React from 'react'
import {Link} from 'react-router-dom'

import './css/Home.css'

const Home = () => {

    return (
        <div className=''>
        <div className="contenedor">
            <img className='imga' src='https://i.imgur.com/azNy0lW.jpg' alt="hom"/>
            <img src="https://i.imgur.com/q4KCcOv.jpg" alt="home" className="ima2"/>
            <div className="centrado">
            <h1 className='tx1 title-evcom'>EvCom</h1>
            <h3 className='tx1 txt-pr'>Lo que necesitas, lo tenemos</h3>
                <Link className="catalg" to='/catalogo'>Ver catalogo</Link>
            </div>
        </div>
        
        </div>
    )
}

export default Home

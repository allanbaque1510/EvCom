import React from 'react'
import './css/Contacto.css'

const Contacto = () => {
    return (
        <div className="body">
        <div className='container align-items-center text-center'>
           <h2 className='textoh'>Para cualquier consulta o asesoramiento comuniquese con nosotros</h2>
            <div className='align-items-center'>
            <div className="row align-items-center ml-5" >
                <a className='dc col-md-5' href="https://api.whatsapp.com/send?phone=593958616085">
                <div className='cardwsp align-items-center  text-center'>
                <h4 className='tx2'>Contacto 1</h4>
                    <i className="wht fab fa-whatsapp"></i>
                <h4 className='tx'>Evelyn Jacome</h4>
                <h6 className='tx'>Guayaquil - Ecuador</h6>
                </div>
                </a>


                <a className='dc col-md-5' href="https://api.whatsapp.com/send?phone=593983739647">
                <div className='cardwsp align-items-center  text-center'>
                <h4 className='tx2'>Contacto 2</h4>
                <i className="wht fab fa-whatsapp"></i>
                <h3 className='tx'>Allan Baque</h3>
                <h6 className='tx'>Guayaquil - Ecuador</h6>
                </div>
                </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contacto

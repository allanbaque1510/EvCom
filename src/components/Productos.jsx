import React,{useEffect,useState} from 'react'
import {db} from '../config/config'
import './css/Productos.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const Productos = () => {
    const [show, setshow] = useState([])
    const [categorias, setcategorias] = useState(false)

    const getData = async()=>{
        await db.collection('Productos').onSnapshot((querySnapshot)=>{
            const datos=[];
            querySnapshot.forEach((doc)=>{
                datos.push({...doc.data(), id:doc.id})
            })
            setshow(datos)
            
        })
    }



   
    /*
    const getData = async()=>{
        await db.collection('Productos').onSnapshot((querySnapshot)=>{
            const datos=[];
            querySnapshot.forEach((doc)=>{
                datos.push({...doc.data(), id:doc.id})
            })
            setshow(datos)
            
        })
        console.log(show)
    }
    */
    const abrirDrop =()=>{
        setcategorias(!categorias)
    } 
    
    useEffect(() => {
        getData()
    },[])

    const accesorios = async(e)=>{
        await db.collection('Productos').onSnapshot((querySnapshot)=>{
            const datos=[];
            querySnapshot.forEach((doc)=>{
                datos.push({...doc.data(), id:doc.id})
            })
            let filtro=datos.filter(dato=>dato.tipo === e)
            setshow(filtro)
            console.log(filtro)
           
        })
    }

    return (
        <div className='body'>
            <div className="container mb-5 mt-5">
            <p className='asesores'>Anuncion importante: {<br/>}Para comprar los productos, dirijase a la penstaña Contactos, alli se encontrara unas tarjetas que lo redireccionaran con los asesores</p>
           <br/>
            <Dropdown isOpen={categorias} toggle={abrirDrop} size='lg'>
                    <DropdownToggle caret className='contselect'>Categorias </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header>--Seleccione una categoria--</DropdownItem>
                    <DropdownItem divider />
                        <DropdownItem onClick={()=>accesorios('Accesorios')}>Accesorios</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Belleza')}>Belleza</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Hogar')}>Hogar</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Juguetes')}>Juguetes</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Maquillaje')}>Maquillaje</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Tecnologia')}>Tecnologia</DropdownItem>
                        <DropdownItem onClick={()=>accesorios('Salud')}>Salud</DropdownItem>
                    </DropdownMenu>
            </Dropdown>   
           
            <div className="row">
                {show.map(product=>{
                    return(
                        <div className="col-md-4" key={product.id} >
                    <div className="card mt-3">
                    <div className="producto1 align-items-center  text-center">
                    <img className='imag-pr'  width ='250px' src={product.Urlimagen} alt=""/>
                    <div className="text1 d-block">
                    <p className='namepr' >#{product.ide}: {product.producto}</p>
                    <p className="description">{product.descripcion}</p>
                    </div>
                    <div className="cost mt-3 align-items-center">
                        <hr/>
                        <p>Precios</p>
                        <hr/>
                        
                        <p> <span className='xunidad'>Unidad:</span> <span className='precio1'> ${product.precio}c/u</span></p>
                        <hr/>
                        <p><span className='xmayor'>Por mayor apartir de {product.mayorCantidad}:</span><span className='precio2'>${product.precioMayor}c/u</span></p>
                    </div>
                    </div>
                    </div>
                    </div>
                    )
                    
            })}
            </div>
            </div>

        </div>
    )
}

export default Productos

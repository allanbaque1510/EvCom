import React,{useState,useEffect} from 'react'
import {db} from '../config/config'
import './css/AddProduct.css'

const AddProduct = () => {

    const [description, setdescription] = useState('')
    const [add, setadd] = useState([])
    const [id, setid] = useState('')
    const [productname, setproductname] = useState('')
    const [productPrice, setproductPrice] = useState(0)
    const [productPriceMayor, setproductPriceMayor] = useState(0)
    const [productPriceMayorCantidad, setproductPriceMayorCantidad] = useState(0)
    const [productImg, setproductImg] = useState('')
    const [tipo, settipo] = useState('')
    

//-------------Datos que se envian a Firebase--------  -   
    
    const addProducts =(e)=>{
        e.preventDefault()
        setadd({
            ide:id,
            tipo:tipo,
            producto:productname,
            descripcion:description,
            precio:parseFloat(productPrice),
            Urlimagen:productImg,
            precioMayor:productPriceMayor,
            mayorCantidad:productPriceMayorCantidad
      })
    }

    //--------Reload despues de enviar los datos------------
    const reload = () => {
            window.location.reload(true);
        }
    //---------Api de la base de datos-------------
    const baseData= async(linkObject)=>{
       await db.collection('Productos').doc().set(add)
       console.log('Nuevo producto agregado')
       setTimeout(reload,100)
    }

//-------------Validacion de envio de datos a firebase--------
    useEffect(() => {
        if(add.ide){
            baseData()
        }
        else{
            console.log('Error en la aceptacion de datos')      
        }
    }, [add])
    
    
    return (
        <div className='container body'>
            <br/>
            <p className='txtagg'>Formulario para agregar Producto</p>
            <hr/>
            <form autoComplete='off' action="" className="form-group" onSubmit={addProducts}>
                <label htmlFor="product-name">id del Producto</label>
                <br/>
                <input 
                    type="text"  
                    className="form-control" 
                    required 
                    onChange={(e)=>setid(e.target.value)} value={id}
                />
                <label htmlFor="product-name">Tipo de Producto</label>
                <br/>
                <select
                    type="text"  
                    className="form-control" 
                    required 
                    onChange={(e)=>settipo(e.target.value)} value={tipo}>
                        <option aria-label="None" value="" />
                        <option value='Accesorios'>Accesorios</option>
                        <option value='Belleza'>Belleza</option>
                        <option value='Hogar'>Hogar</option>
                        <option value='Juguetes'>Juguetes</option>
                        <option value='Maquillaje'>Maquillaje</option>
                        <option value='Tecnologia'>Tecnologia</option>
                        <option value='Salud'>Salud</option>
                </select>
                <label htmlFor="product-name">Nombre del Producto</label>
                <br/>
                <input 
                    type="text"  
                    className="form-control" 
                    required 
                    onChange={(e)=>setproductname(e.target.value)} value={productname}
                />
                <label htmlFor="product-name">Descripcion del Producto</label>
                <br/>
                <textarea className="form-control"  rows="5" required 
                    onChange={(e)=>setdescription(e.target.value)} value={description}/>
                

                <br/>
                
                <label htmlFor="product-price">Precio de venta unidad</label>
                <br/>
                <input 
                    type="number"  
                    className="form-control" 
                    required
                    onChange={(e)=>setproductPrice(e.target.value)} value={productPrice}
                />
                <br/>
                <label htmlFor="product-price">Precio de venta por mayor</label>
                <br/>
                <input 
                    type="number"  
                    className="form-control" 
                    required
                    onChange={(e)=>setproductPriceMayor(e.target.value)} value={productPriceMayor}
                />
                <br/>
                 <label htmlFor="product-price">Precio de venta por mayor a partir de la siguiente cantidad:</label>
                <br/>
                <input 
                    type="number"  
                    className="form-control" 
                    required
                    onChange={(e)=>setproductPriceMayorCantidad(e.target.value)} value={productPriceMayorCantidad}
                />
                <br/>
                <br/>
                <label htmlFor="product-img">Link de la imagen del producto</label>
                <input 
                    type="text" 
                    className='form-control' 
                    required 
                    onChange={(e)=>setproductImg(e.target.value)} value={productImg}
                />
            
                <br/>
                <button className="btn btn-success btn-md">Agregar</button>
            </form>
           
        </div>
    )
}

export default AddProduct

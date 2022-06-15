import React, { useState, useContext } from 'react'
import  './detail.css'
import ItemCount from '../items/ItemCount'
import CartContext from '../CartContext/CarContext'


const ItemDetail = ({data}) => {

    const {  addToCart, isInCart, deleteItem  } = useContext(CartContext)

    const sendItemToCart = (qty) => {
        addToCart({...data, cantidad: qty})
    }

    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () => {
        console.log("PRODUCTO A AGREGAR: ", data)
        console.log("CANTIDAD:", cantidad)
    }
  return (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <div className='cardText'>
                    <h3 className="card-title">{data.title}</h3>
                </div>    
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-6">
                        <div className="white-box text-center"><img src={`../${data.image}`}  className="img-responsive"/></div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-6 product-description" >
                        <div className='product-details'>
                            <h3 className="box-title mt-5 product-details">Product Details</h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-check text-success product-details"></i>{data.description}</li>
                                </ul>
                            <h4>Stock disponible: {data.stock}</h4>
                        </div>
                            <h2 className="mt-5">
                            ${data.price}<small className="text-success">(36%off)</small>
                            </h2>
                            {isInCart(data.id) ? <button onClick={() => {deleteItem(data.id)}}> Modificar Compra </button> : <ItemCount cantidad={cantidad} stock={data.stock} setCantidad={setCantidad} onAdd={sendItemToCart}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'

const CartProducts = ({ title, price, image, description, cantidad, id }) => {

    
    return (
        <div className="cart_section">
         <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-10 offset-lg-1">
                     <div className="cart_container">
                         <div className="cart_items">
                             <ul className="cart_list">
                                 <li className="cart_item clearfix">
                                     <div className="cart_item_image"><img src={`../${image}`} alt=""/></div>
                                     <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                         <div className="cart_item_name cart_info_col">
                                             <div className="cart_item_title">Name</div>
                                             <div className="cart_item_text">{title}</div>
                                         </div>
                                         <div className="cart_item_color cart_info_col">
                                             <div className="cart_item_title">{description}</div>
        
                                         </div>
                                         <div className="cart_item_quantity cart_info_col">
                                             <div className="cart_item_title">Cantidad</div>
                                             <div className="cart_item_text">{cantidad}</div>
                                         </div>
                                         <div className="cart_item_price cart_info_col">
                                             <div className="cart_item_title">Precio</div>
                                             <div className="cart_item_text">{price * cantidad}</div>
                                         </div>
                                         <div className="cart_item_total cart_info_col">
                                         </div>
                                     </div>
                                 </li>
                             </ul>
                         </div>
                         <div className="order_total">
                             <div className="order_total_content text-md-right">

                             </div>
                         </div>
                         <Link to='/'>
                         <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Continue Shopping</button></div>
                         </Link>
                     </div>
                 </div>
             </div>
         </div>
     </div>
      )
}

export default CartProducts
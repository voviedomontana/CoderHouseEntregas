import React from 'react'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const divStyle = {};
const CartWidget = () => {
  return (
    <div style={divStyle}>
        <button type="button" class="btn btn-light">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
    </div>
  )
}

export default CartWidget
import React from 'react'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const divStyle = {};
const CartWidget = () => {
  return (
    <div style={divStyle}>
      <Link to="/cart">
        <button type="button" className="btn btn-light">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
      </Link>
    </div>
  )
}

export default CartWidget
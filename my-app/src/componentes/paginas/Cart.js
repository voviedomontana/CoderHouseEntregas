import React, {useContext} from 'react'
import CarContext from '../CartContext/CarContext'
import CartProducts from '../CartProducts/CartProducts'
import CartListProduct from '../CartListProduct/CartListProduct'

const Cart = () => {

    const {cart} = useContext(CarContext)
    console.log(cart)
    return(
        <div>
            <CartListProduct cart={cart}/>
        </div>
    )
}

export default Cart
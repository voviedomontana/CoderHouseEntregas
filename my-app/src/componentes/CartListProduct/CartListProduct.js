import React from 'react'
import CartProducts from '../CartProducts/CartProducts';

const CartListProduct = ({cart}) => {
  
  return (
      <div>
    {cart.map(({ title, price, image, description, stock, id, cantidad }) => {
        return (
          <CartProducts
            title={title}
            price={price}
            image={image}
            stock={stock}
            description={description}
            id={id}
            cantidad = {cantidad}
          />
        );
      })}
    </div>
  )
}

export default CartListProduct
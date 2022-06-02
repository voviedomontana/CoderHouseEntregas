import React from 'react'
import Item from '../items/Item'

const CategoriesListContainer = ({categorie, productos}) => {
 const filtro = productos.filter(producto => producto.category==categorie)
  console.log(filtro[0].image)
  
  return (
    <div className="product-list-container">
    {filtro.map(({ title, price, image, description, stock }) => {
      return (
        <Item
          title={title}
          price={price}
          image={image}
          stock={stock}
          description={description}
        />
      );
    })}
    <Item />
  </div>
  )
}

export default CategoriesListContainer
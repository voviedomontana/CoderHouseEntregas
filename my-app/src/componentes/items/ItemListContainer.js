import React from 'react';
import Item from './Item';

const ItemListContainer = ({ title, products }) => {
  console.log(products.length)
  return (
    <div className='product-list-container'>
      <h4> {title} </h4>
      {products.map(({ title, price, image, image1, image2, description, stock }) => {
        return (
          <Item
            title={title}
            price={price}
            image={image}
            image1={image1}
            image2={image2}
            stock={stock}
            description={description}
          />
        );
      })}
      <Item />
    </div>
  );
};

export default ItemListContainer;

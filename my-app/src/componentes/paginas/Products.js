import React from 'react';
import ItemListContainer from '../items/ItemListContainer';
import productos from '../utils/products';

const Products = () => {
  return (
    <div>
      <h3>Listado de Productos</h3>
      <ItemListContainer title="Bienvenidos a react!" productos={productos} />
    </div>
  );
};

export default Products;

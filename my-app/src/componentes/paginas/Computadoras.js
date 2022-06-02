import React from 'react';
import productos from '../utils/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Computadoras = () => {
  return (
  <div className="input-group flex-nowrap">
    <CategoriesListContainer categorie={'computadora'} productos={productos}/>
  </div>
  )
};

export default Computadoras;

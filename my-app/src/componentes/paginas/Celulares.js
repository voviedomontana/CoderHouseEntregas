import React from 'react';
import productos from '../utils/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Celulares = () => {
  return (
  <div className="input-group flex-nowrap">
    <CategoriesListContainer categorie={'celular'} productos={productos}/>
  </div>
  )
};

export default Celulares;

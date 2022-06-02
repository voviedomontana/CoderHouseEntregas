import React from 'react';
import productos from '../utils/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Relojes = () => {
  return (
  <div className="input-group flex-nowrap">
    <CategoriesListContainer categorie={'reloj'} productos={productos}/>
  </div>
  )
};

export default Relojes;

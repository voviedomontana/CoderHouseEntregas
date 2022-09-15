import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import productos from '../utils/products';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log('productFilter: ', productFilter);
    if (productFilter === undefined) {
    } else {
      setProduct(productFilter);
    }
  }, [id]);

  const productFilter = productos.find((product) => {
    return product.id == id;
  });

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer;

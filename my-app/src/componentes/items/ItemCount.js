import React from 'react';
const ItemCount = ({cantidad, setCantidad, setShowButton}) => {
  const addProduct = () =>{
    setCantidad(cantidad + 1)
  }

  return(
    <>
  <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
    <button onClick={addProduct}>+</button>
    <p>{cantidad}</p>
    <button>-</button>
  </div>
  <button onClick={() => setShowButton(true)}>Agregar Producto</button>
  </>
)
}

export default ItemCount;

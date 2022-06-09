import React from 'react';

const ItemCount = ({cantidad, setCantidad, setShowButton, onAdd}) => {
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
  <button onClick={() => {onAdd(cantidad)}}> AGREGAR PRODUCTO </button>
  </>
)
}

export default ItemCount;

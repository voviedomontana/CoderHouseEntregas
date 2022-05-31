import React from 'react';
const ItemCount = (props) => {
  const [count, setCount] = React.useState(props.initial);
  function addOne() {
    if (count >= props.stock) {
      alert('No hay mas stock!');
    } else {
      setCount(count + 1);
    }
  }
  function lessOne() {
    if (count <= 0) {
      alert('Digito Invalido');
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h8>Cantidad: {count}</h8> {/* 1 (as we expect) */}
      <p> Stock: {props.stock}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary btn-sm" onClick={addOne}>
          +1
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={lessOne}>
          -1
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

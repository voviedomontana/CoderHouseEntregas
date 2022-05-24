
import React from 'react';
const ItemCount = (props) => {
    const [count, setCount] = React.useState(props.initial);
    function addOne() {
        if(count >= props.stock){
            alert("No hay mas stock!")
        }else{
            setCount(count + 1)
        }
    }
    function lessOne() {
        if(count <= 0){
            alert("Digito Invalido")
        }else{
            setCount(count -1);
        }
    }
    return (
        <div>
        <h1>Cantidad: {count}</h1> {/* 1 (as we expect) */}
        <h2> Stock: {props.stock}</h2>
        <button type="button" class="btn btn-outline-primary" onClick={addOne}>+ 1</button>
        <button type="button" class="btn btn-outline-primary" onClick={lessOne}> - 1</button>
        <button> Añadir al carrito </button>
      </div>
  )
}

export default ItemCount

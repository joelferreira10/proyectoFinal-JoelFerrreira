import React, { useState } from 'react'

const ItemCount = ({onAdd,stock}) => {
    
    const [itemCount,setItemCount]=useState(1)
    function handleIncrement() {
        if(itemCount<stock) setItemCount(prev=>prev+1)
        
    }
    function handleDecrement() {
        if(itemCount>1) setItemCount(prev=>prev-1)
    }
function handleAdd() {
    onAdd(itemCount)
    setItemCount(1)
}
console.log(itemCount)
  return (
    <>
      <button type="button" onClick={handleDecrement}>-</button>
      <p>{itemCount}</p>
      <button type="button" onClick={handleIncrement}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount

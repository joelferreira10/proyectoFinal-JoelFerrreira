import React, { useContext, useState } from 'react';
import { ItemsCart } from '../context/CartContext';
const ItemCount = ({ stock,items }) => {
  const {onAdd}=useContext(ItemsCart)
  const [itemCount, setItemCount] = useState(1);

  function handleIncrement() {
    if (itemCount < stock) setItemCount(prev => prev + 1);
  }

  function handleDecrement() {
    if (itemCount > 1) setItemCount(prev => prev - 1);
  }

  function handleAdd() {
    console.log("quantity en ItemCount:", typeof itemCount); // Verifica el tipo de itemCount
    onAdd(items,itemCount); // Pasa itemCount directamente
    setItemCount(1);
  }

  return (
    <>
      <button type="button" onClick={handleDecrement}>-</button>
      <p>{itemCount}</p>
      <button type="button" onClick={handleIncrement}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;

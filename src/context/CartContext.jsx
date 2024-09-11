import React, { createContext, useState } from "react";

export const ItemsCart = createContext();

const CartProvider = ({ children }) => {
  const [itemsContext, setItemsContext] = useState([]);


  function addItem(item,quantity){
    if (quantity == null || isNaN(quantity)) {
      console.error("quantity is undefined or not a number", quantity);
      return; // Detiene la ejecución si quantity no es válido
  }
    if(isInCart(item.id)){
      const newItem=itemsContext.map(i=>{
        if(i.id===item.id){
          return {...i, quantity:i.quantity+quantity}
        }else{
          return i
        }
      }
        )
        setItemsContext(newItem)
    }else{
      setItemsContext([...itemsContext, {...item, quantity}]);
    }
    
  }
  function removeItem(item) {
    const newItems=itemsContext.filter(i=>i.id!==item.id)
    setItemsContext(newItems)
  }
  function clear() {
    return setItemsContext([])
  }
  function isInCart(id) {
     const isExist=itemsContext.some(item => item.id === id)
    return isExist
  }
  const onAdd = (item, quantity) => {
    addItem(item, quantity);
  };
  return <ItemsCart.Provider value={{addItem,itemsContext,clear,removeItem,onAdd

  }}>{children}</ItemsCart.Provider>;
};

export default CartProvider;

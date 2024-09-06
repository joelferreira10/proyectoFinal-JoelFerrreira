import React, { createContext, useState } from "react";

export const ItemsCart = createContext();

const CartProvider = ({ children }) => {
  const [itemsContext, setItemsContext] = useState([]);
  
  function addItem(item,quantity){

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
console.log(itemsContext)
  return <ItemsCart.Provider value={{addItem,itemsContext,clear,removeItem}}>{children}</ItemsCart.Provider>;
};

export default CartProvider;

import { useContext } from "react"
import { ItemsCart } from "../context/CartContext"

const CartItems = () => {
    const {itemsContext,clear,removeItem}=useContext(ItemsCart)
  return (
    <>
    <h1>Carrito</h1>
    <button onClick={()=>clear()}>Vaciar Carrito</button>
      {
        itemsContext.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>cantidad:{item.quantity}</p>
            <button onClick={()=>removeItem(item)}>Eliminar</button>
          </div>
        ))
      }
    </>
  )
}

export default CartItems

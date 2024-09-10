import { useContext } from "react"
import { ItemsCart } from "../context/CartContext"
import { Link } from "react-router-dom"
const CartItems = () => {
    const {itemsContext,clear,removeItem}=useContext(ItemsCart)
    if(itemsContext.length==0){
      return <>
        <h3>Carrito vacio</h3>
        <Link to={'/'} >Ir a inicio</Link>
      </>

    }
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

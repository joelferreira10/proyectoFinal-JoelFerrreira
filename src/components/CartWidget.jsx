import { useContext } from "react";
import { ItemsCart } from "../context/CartContext";
import "../index.css";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

function CartWidget() {
  const { itemsContext } = useContext(ItemsCart);
  const itemsCount = itemsContext.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <Link to={"/cart"} className="no-underline">
        <img src={cart} alt="" />
        {itemsCount > 0 && <span className="border-number">{itemsCount}</span>}
      </Link>
    </>
  );
}

export default CartWidget;

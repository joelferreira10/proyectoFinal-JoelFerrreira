import { useContext, useState } from "react";
import { ItemsCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import CheckOut from "./CheckOut";
const CartItems = () => {
  const { itemsContext, clear, removeItem } = useContext(ItemsCart);
  const total = itemsContext.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log("cartItems", itemsContext);

  if (itemsContext.length == 0) {
    return (
      <>
        <h3>Carrito vacio</h3>
        <Link to={"/"}>Ir a inicio</Link>
      </>
    );
  }
  return (
    <Container>
      <h1>Carrito</h1>

      <Table striped bordered hover responsive className="mt-5 mb-5">
        <thead>
          <tr>
            <th>Imagen producto</th>
            <th>Nombre del producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {itemsContext.map((item, index) => (
            <tr key={index}>
              <td className="w-25">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    maxWidth: "140px",
                    maxHeight: "140px",
                    objectFit: "contain",
                  }}
                  className="w-100"
                />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>cantidad: {item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  active
                  onClick={() => removeItem(item)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between">
        <Button variant="secondary" className="w-auto" onClick={() => clear()}>
          Vaciar Carrito
        </Button>
        <h3>Total: ${total}</h3>
      </div>

      <CheckOut total={total} />
    </Container>
  );
};

export default CartItems;

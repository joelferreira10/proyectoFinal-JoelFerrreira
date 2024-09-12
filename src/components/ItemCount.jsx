import React, { useContext, useState } from "react";
import { ItemsCart } from "../context/CartContext";
import { Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ItemCount = ({ stock, items }) => {
  const { onAdd } = useContext(ItemsCart);
  const [itemCount, setItemCount] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function handleIncrement() {
    if (itemCount < stock) setItemCount((prev) => prev + 1);
  }

  function handleDecrement() {
    if (itemCount > 1) setItemCount((prev) => prev - 1);
  }

  function handleAdd() {
    console.log("quantity en ItemCount:", typeof itemCount); // Verifica el tipo de itemCount
    onAdd(items, itemCount); // Pasa itemCount directamente
    setItemCount(1);
    setToastMessage(`${items.name} fue agregado al carrito`);
    setShowToast(true);
  }

  return (
    <>
      <div className="d-flex mb-3 mt-3 ">
        <Button variant="info" type="button" onClick={handleDecrement}>
          -
        </Button>
        <p className="fs-2   mx-3">{itemCount}</p>
        <Button variant="info" type="button" onClick={handleIncrement}>
          +
        </Button>
      </div>
      <Button variant="primary" active onClick={handleAdd}>
        Agregar al carrito
      </Button>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          className="bg-success text-white"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto"></strong>
            <small>Justo ahora</small>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ItemCount;

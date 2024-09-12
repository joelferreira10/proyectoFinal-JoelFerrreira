import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { ItemsCart } from "../context/CartContext";

const CheckOut = ({ total }) => {
  const [validated, setValidated] = useState(false);
  const { itemsContext, clear } = useContext(ItemsCart);
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const sendOrder = () => {
    if (!buyer.name || !buyer.phone || !buyer.address) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!isValidEmail(buyer.address)) {
      alert("El email ingresado no es válido");
      return;
    }
    const order = {
      buyer,
      items: itemsContext,
      total,
    };
    console.log("order", order);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        clear();
        setBuyer({
          name: "",
          phone: "",
          address: "",
        });
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h3 className="text-center">Finalizar compra</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 d-flex flex-column align-items-center">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              required
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label></Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="phone"
                placeholder="Phone Number"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a phone number.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={handleChange}
              type="email"
              name="address"
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button onClick={sendOrder} as={Col} md="4" type="submit">
            Generar orden
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CheckOut;

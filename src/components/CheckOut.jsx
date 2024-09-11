import { useState,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ItemsCart } from '../context/CartContext';
const CheckOut = () => {
    const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
    const items=useContext(ItemsCart)
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

return <>
    <h3 className='text-center'>Finalizar compra</h3>
  <Form noValidate validated={validated} onSubmit={handleSubmit}  >
    <Row className="mb-3 d-flex flex-column align-items-center">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Phone Number</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a phone number.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Email Address"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a email.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      
    </Row>
    <div className='text-center'>
    <Button as={Col} md="4" type="submit">Generar orden</Button>
    </div>
   
  </Form>

  </>
 
}

export default CheckOut

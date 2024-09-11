import { useContext,useState } from "react"
import { ItemsCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
const CartItems = () => {
    const {itemsContext,clear,removeItem}=useContext(ItemsCart)
    const [validated, setValidated] = useState(false);
    const total = itemsContext.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    const items=useContext(ItemsCart)
const handleSubmit = (event) => {
   
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

    console.log("itemsContext",itemsContext)
    if(itemsContext.length==0){
      return <>
        <h3>Carrito vacio</h3>
        <Link to={'/'} >Ir a inicio</Link>
      </>

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
          <td className="w-25" >
            <img 
            src={item.img} 
            alt={item.name} 
            style={{ maxWidth: '140px', maxHeight: '140px', objectFit: 'contain' }}
            className="w-100"
            />
            </td>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>cantidad: {item.quantity}</td>
          <Button variant="danger" active onClick={()=>removeItem(item)}>Eliminar</Button>{' '}
          
        </tr>
      ))}
      </tbody>
    </Table>
    
    <div className="d-flex justify-content-between">
    <Button variant="secondary" className="w-auto" onClick={()=>clear()}>Vaciar Carrito</Button>
    <h3>Total: ${total}</h3>
    <Link to={'/checkOut'}><Button variant="info" className="w-auto" >CheckOut</Button></Link>
    </div>

    <h3 className='text-center'>Finalizar compra</h3>
  <Form noValidate validated={validated} onSubmit={handleSubmit}  >
    <Row className="mb-3 d-flex flex-column align-items-center">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Control
          required
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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

    </Container>
  )
}

export default CartItems

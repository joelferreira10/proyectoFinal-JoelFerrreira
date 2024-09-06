import { NavLink, useParams } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import products from '../../data/products'


function NavBar() {
  const category=products.map(products=>products.category)
  const categoryUniques=new Set(category)
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              {Array.from(categoryUniques).map((cat) => (
                <Nav.Link key={cat}to={`/category/${cat}`} as={NavLink}>
                  {cat}
                </Nav.Link>
              ))}	
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

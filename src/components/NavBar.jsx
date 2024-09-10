import { useState,useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { NavLink, useParams } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const db = getFirestore();
        const ItemsCollection = collection(db, "items");
        const ItemsSnapshot = await getDocs(ItemsCollection);
        const ItemsList = ItemsSnapshot.docs.map(doc => doc.data());
        const categorySet = new Set(ItemsList.map(product => product.category));
        setCategories(Array.from(categorySet));
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              {Array.from(categories).map((cat) => (
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

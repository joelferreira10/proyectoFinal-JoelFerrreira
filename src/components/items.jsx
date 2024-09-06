import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useParams,Link } from "react-router-dom";
import products from "../../data/products";
import Error404 from "./Error404";

const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    }).then((response) => {
     
        const filtered=response.filter(item=>id?item.category===id:response)
        if(filtered.length>0){
          setItems(filtered)
          setError(null)
        }
        else{ 
          throw new Error("Invalid response from server for category ")}
        })
        .catch((error) => {
          setError(error.message)
          console.log("Error:", error.message)
          
        });
  }, [id]);
  console.log(error)
  if (error) {
    return <Error404 />; 
  }
  return (
    <>
    
      <Row className="d-flex justify-content-start">
        {Array.from(items).map((item) => (
          <Col key={item.id} xs lg="4">
            <Card style={{ width: "19rem", height: "27.5rem"}}className="mt-2" >
              <Card.Img src={item.img} height={220} />
              <Card.Body >
                <Card.Title>{item.name }</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio:${item.price}</Card.Text>
                <div >
                <Link to={`/item/${item.category}`}><Button className="w-100" variant="primary">Ver</Button></Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </>
  );
};

export default Items;

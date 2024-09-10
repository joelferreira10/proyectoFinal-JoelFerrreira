import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Items = ({items}) => {
    
  return (
    <>
    
      <Row className="d-flex justify-content-start">
        {Array.from(items).map((item) => (
          <Col key={item.id} xs lg="4">
            
            <Card style={{ width: "19rem", height: "27.5rem"}}className="mt-2" >
              <Card.Img src={item.img} height={220} />
              <Card.Body >
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio:${item.price}</Card.Text>
                <div >
                <Link to={`/item/${item.id}`}><Button className="w-100" variant="primary">Ver</Button></Link>
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

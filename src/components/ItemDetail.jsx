import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const ItemDetail = ({ items }) => {
  if (!items) {
    return <p>Cargando...</p>;
  }
  const { name, description, price, stock, img } = items;
  return (
    <Card className="my-4 shadow-sm">
      <Row className="no-gutters">
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img} alt={`Slide`} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="text-muted">Price: ${price}</Card.Text>
            <Card.Text>Stock: {stock}</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0"></Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Additional Information</Accordion.Header>
                <Accordion.Body>
                  El envio sera acordado una ves hecho la compra
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <ItemCount stock={stock} items={items} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;

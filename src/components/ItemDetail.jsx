import React from 'react';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ items }) => {
  if (!items) {
    return <p>Cargando...</p>;
  }

  return (
    <Card>
      <Card.Header>{items.name}</Card.Header>
      <Card.Img variant="top" src={items.img} style={{ width: '30rem' }} />
      <Card.Body>
        <Card.Text>{items.description}</Card.Text>
        <Card.Text>Precio: ${items.price}</Card.Text>
        <Card.Text>Stock: {items.stock}</Card.Text>
        <ItemCount stock={items.stock} items={items} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

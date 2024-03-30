import React from 'react';
import Card from 'react-bootstrap/Card';

export function HomeCard(item) {
  return (
    <Card style={{ width: '30rem' }} className="p-1 m-3">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <Card.Text>{item.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

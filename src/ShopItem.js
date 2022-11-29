import { useId } from "react"
import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ShopItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
      <Card.Img variant="top" src={props.item.image} />
          <p>{props.item.description}</p>
          <p>Brand: {props.item.brand}</p>
          <p>Category: {props.item.category}</p>
          ${props.item.price}
        </Card.Text>
        <Button onClick={() => props.updateCart(props.index)}> Add to cart!</Button>
        <p> </p>
        <Button onClick={() => props.removeCart(props.index)}> Remove from cart!</Button>
      </Card.Body>
    </Card>
  )
} 
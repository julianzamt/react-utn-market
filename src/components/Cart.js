import AppContext from "../context/AppContext"
import React, { useState, useContext } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CartItem from "./CartItem"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EmptyCart from "./EmptyCart"
import CartTotal from "./CartTotal"

function Cart(props) {
    const context = useContext(AppContext)
    
    // Filter context.cartItems to avoid display duplication
    const uniqueProducts = Array.from(new Set(context.cartItems.map(item => item.name)))
    .map(name => {
      return context.cartItems.find(a => a.name === name)
    })

    const cartItems = uniqueProducts.map(item =>
        <CartItem
            key={item.name}
            id={item.id} 
            name={item.name} 
            price={item.price}
            photo_url={item.photo_url}
            stock={item.stock}
        />)

    const [goodbye, setGoodbye] = useState(false)

    const showGoodbye = () => {
      setGoodbye(!goodbye)
    }

    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header as="section" closeButton>
        <Modal.Title as="h4" bsPrefix="cart-title">
          Carrito de compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Container>
            {context.cartItems.length === 0 ? <EmptyCart visible={true}/>
            : cartItems}
            <CartTotal />
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button style={{width: "100%"}}variant="outline-success" onClick={showGoodbye}>Iniciar Checkout</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Cart
import AppContext from "../context/AppContext"
import React, { useState, useContext } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CartItem from "./CartItem"
import Container from 'react-bootstrap/Container'
import EmptyCart from "./EmptyCart"
import CartTotal from "./CartTotal"
import Goodbye from "./Goodbye"

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
    /* Flag for rendering Goodbye on Cart exit
    only if "Iniciar compra" is clicked */
    const [ flag, setFlag ] = useState(false)

    const handleGoodbye = ()=>{
      setFlag(true)
      props.onHide()
    }

    return (
      <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExited={flag ? ()=>setGoodbye(true) : null}
      >
      <Modal.Header as="section" closeButton>
        <Modal.Title as="h4" bsPrefix="cart-title">
          Shopping Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Container>
            {context.cartItems.length === 0 ? 
            <EmptyCart visible={true}/>
            : cartItems}
            <CartTotal />
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {context.cartItems.length === 0 ? 
            <Button style={{width: "100%"}}variant="outline-secondary" disabled>Proceed to checkout</Button>
          :<Button style={{width: "100%"}}variant="outline-secondary" onClick={handleGoodbye} name="goodbye">Proceed to checkout</Button>}
        </Modal.Footer>
      </Modal>
      <Goodbye show={goodbye} onHide={()=>{setGoodbye(false); setFlag(false)}}/>
      </div>
    )
}

export default Cart
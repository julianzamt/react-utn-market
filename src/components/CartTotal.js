import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CartTotal = () => {
    const context = useContext(AppContext)

    let cartTotal = context.cartItems.reduce(function(accumulator, product) {  
        return accumulator + parseFloat(product.price)}, 0).toFixed(2)

    return (
        <Row className="cart-item">
            <Col xs={12} sm={6}>
                <h4>Total:</h4>
            </Col>
            <Col xs={12} sm={6}>
                <h4>${cartTotal}</h4>
            </Col>
        </Row> 
    )
}
export default CartTotal
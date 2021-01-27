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
            <Col>
                <h4>Total:</h4>
            </Col>
            <Col>
                <h3>${cartTotal}</h3>
            </Col>
        </Row> 
    )
}
export default CartTotal
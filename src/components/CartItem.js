import React, { useState, useContext, useEffect } from "react"
import AppContext from "../context/AppContext"
import { CSSTransition } from "react-transition-group"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Adder from "./Adder"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = (props) => {
    // Aquí props === producto //
    const context = useContext(AppContext)

    const [visible, setVisible] = useState(true)

    let productQuant = context.cartItems.filter(item => item.name === props.name)
    let precioFinal = (props.price * productQuant.length).toFixed(2)

    const handleClick = () => {
        setVisible(false)    
    }

    const img_style = {
        maxWidth: 60
    }

    const exit = ()=> {
        context.removeFromCart(props)
    }

    return (
        <CSSTransition 
            in={visible} 
            timeout={1500} 
            classNames="cart-item-animation"
            onExited={()=>exit()}
        >
        <div className="cart-item-wrapper">
            <Row className="cart-item">
                <Col>
                    <img src={props.photo_url} style={img_style}/>
                </Col>
                <Col xs={4}>
                    {props.name}
                </Col>
                <Col xs={3}>
                    Cantidad: <Adder producto={props} cantidad={productQuant.length}/>
                </Col>
                <Col>
                    Precio: ${precioFinal}
                </Col>
                <Col>
                <IconButton onClick={handleClick} className="grow-button">
                    <DeleteIcon/>
                </IconButton>
                </Col>
            </Row>
        </div>
        </CSSTransition>
    )
}

export default CartItem
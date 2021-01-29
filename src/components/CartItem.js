import React, { useState, useContext } from "react"
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
            <Row className="cart-item">
                <Col xs={12} md={6} lg={2}>
                    <img src={props.photo_url} style={img_style} alt="product_photo"/>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    {props.name}
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <span className="small">Quantity:</span> <Adder producto={props} cantidad={productQuant.length}/>
                </Col>
                <Col md={4} lg={2}>
                    Price: ${precioFinal}
                </Col>
                <Col md={4} lg={1}>
                    <IconButton onClick={handleClick} className="grow-button">
                        <DeleteIcon/>
                    </IconButton>
                </Col>
            </Row>
        </CSSTransition>
    )
}

export default CartItem
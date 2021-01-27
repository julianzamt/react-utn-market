import React, { useEffect, useContext } from "react"
import Button from 'react-bootstrap/Button'
import AppContext from "../context/AppContext"

const AddToCartButton = (props) => {

    const context = useContext(AppContext)

    // useEffect(() => console.log(context.cartItems), [context.cartItems]);

    function handleClick(e){
        const name = e.target.name
        name === "add" ? 
        context.addToCart(props.product)
        : context.removeFromCart(props.product)
    }

    return (
        <div>
            {context.cartItems.some(item => item.name === props.product.name)?  
            <Button variant="outline-secondary" name="remove" className="btn-sm mb-2" onClick={handleClick}>Quitar del carrito</Button>
            : 
            <Button variant="outline-success" name="add" className="btn-sm mb-2" onClick={handleClick}>Agregar al carrito</Button>
            }
        </div>
    )
}

export default AddToCartButton
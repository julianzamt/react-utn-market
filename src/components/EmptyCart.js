import { CSSTransition } from "react-transition-group"
import React, { useState, useEffect } from "react"

const EmptyCart = () => {
    const [ empty, setEmpty ] = useState("empty")
    
    useEffect(()=> setEmpty("empty-active"), [])

    return (
        <p className={empty}>El carrito se encuentra vacío.</p>
    )
}

export default EmptyCart



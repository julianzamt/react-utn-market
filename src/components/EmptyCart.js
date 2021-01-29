import React, { useState, useEffect } from "react"

const EmptyCart = () => {
    const [ empty, setEmpty ] = useState("empty")
    
    useEffect(()=> setEmpty("empty-active"), [])

    return (
        <p className={empty}>Your cart is empty.</p>
    )
}

export default EmptyCart



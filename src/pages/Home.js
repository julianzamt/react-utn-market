import React, { useState, useEffect } from "react"
import Producto from "../components/Producto.js"
import CardDeck from 'react-bootstrap/CardDeck'

function Home(){
    const [ products, setProducts ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://jsonfy.com/items")
        .then(response => response.json())
        .then(data => {
        const products = data.map(item => 
            <Producto 
            key={item.id}
            id={item.id} 
            name={item.name} 
            description={item.description}
            price={item.price}
            photo_url={item.photo_url}
            stock={item.stock}
            />)
        setProducts(products)
        setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p className="loader">Loading...</p>
    }
    else {
        return (
        <div>
            <CardDeck style={{margin:"2em"}}>
                {products}
            </CardDeck>
        </div>
        )
    }
}

export default Home
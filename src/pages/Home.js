import React, { useState, useEffect } from "react"
import Producto from "../components/Producto.js"
import CardDeck from 'react-bootstrap/CardDeck'
import firebase from "../Config/firebase"

function Home(){
    const [ products, setProducts ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

   useEffect(() => {
        setIsLoading(true)
        firebase.db.collection("Productos")
        .get()
        .then((querySnapshot) => {
            console.log(querySnapshot.docs)
            const products = querySnapshot.docs.map(item =>  
            <Producto 
            key={item.id}
            id={item.id} 
            name={item.data().name} 
            description={item.data().description}
            price={item.data().price}
            photo_url={item.data().photo_url}
            stock={item.data().stock}
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
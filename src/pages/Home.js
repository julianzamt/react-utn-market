import React, { useState, useEffect, useContext } from "react"
import Producto from "../components/Producto.js"
import CardDeck from 'react-bootstrap/CardDeck'
import firebase from "../Config/firebase"
import Alert from 'react-bootstrap/Alert'
import AppContext from "../context/AppContext"

function Home(){
    const [ products, setProducts ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    const context = useContext(AppContext)

    useEffect(() => {
        setIsLoading(true)
        firebase.db.collection("Productos")
        .get()
        .then((querySnapshot) => {
            const products = querySnapshot.docs.map(item =>  
            <Producto 
            key={item.id}
            id={item.id} 
            name={item.data().name} 
            price={item.data().price}
            photo_url={item.data().photo_url}
            />)
            setProducts(products)
            setIsLoading(false)
        })
    }, [])

    const closeRegistryAlert = () => {
        context.registryFeedbackOut()
    }

    const closeLoginAlert = () => {
        context.loginFeedbackOut()
    }


    if (isLoading) {
        return <p className="loader">Loading...</p>
    }
    else {
        return (
        <div className="text-center">
            {context.registryFeedback ? 
            <Alert variant="success" onClose={closeRegistryAlert} dismissible>Usuario/a registrado/a con éxito</Alert> 
            : null}
            {context.loginMessage ? 
            <Alert variant="success" onClose={closeLoginAlert} dismissible>Bienvenido/a, </Alert> 
            : null}
            <CardDeck style={{margin:"2em"}}>
                {products}
            </CardDeck>
        </div>
        )
    }
}

export default Home
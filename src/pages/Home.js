import React, { useState, useEffect, useContext } from "react"
import Producto from "../components/Producto.js"
import CardDeck from 'react-bootstrap/CardDeck'
import firebase from "../Config/firebase"
import Alert from 'react-bootstrap/Alert'
import AppContext from "../context/AppContext"
import LinearProgress from '@material-ui/core/LinearProgress'

function Home() {
    const [products, setProducts] = useState("")
    const [isLoading, setIsLoading] = useState(false)

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

    if (isLoading) {
        return <LinearProgress />
    }
    else {
        return (
            <div className="text-center">
                {context.registryFeedback ?
                    <Alert variant="success" onClose={closeRegistryAlert} dismissible>User successfully registered and logged in.</Alert>
                    : null}
                <CardDeck style={{ margin: "2em" }}>
                    {products}
                </CardDeck>
            </div>
        )
    }
}

export default Home
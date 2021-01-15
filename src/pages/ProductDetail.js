import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase'
import React, { useState, useEffect, useContext } from "react"
import AppContext from "../context/AppContext"

function ProductDetail(props){
    const [ product, setProduct ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const context = useContext(AppContext)

    useEffect(()=>{
        setIsLoading(true)
        firebase.db.doc("Productos/"+props.match.params.number)
        .get()
        .then(doc =>{
            setProduct(doc.data())
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }, [])
   
    function handleClick(e){
        e.target.innerHTML = "Gracias por su compra!"
        e.target.style.backgroundColor = "yellow"
        e.target.style.color="green"
    }
    if (isLoading) {
        return <p className="loader">Loading...</p>
    }
    else {
        return (
        <div className="producto">
            <h2>{product.name}</h2>
            <img src={product.photo_url} 
                style={{ maxWidth: 300,
                         maxHeight: 300}}></img>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <p className="stock">Stock: {product.stock}</p>
            {context.login ?
            <div>
            <Button variant="success" className="mb-2" onClick={handleClick}>Comprar</Button><br></br></div>
            : null
            }
            <Link to={'/'} style={{textDecoration:'none'}}>
                <Button variant="primary" className="btn-sm">Volver al home</Button>
            </Link>
        </div>
        )
    }
}

export default ProductDetail

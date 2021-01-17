import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import firebase from '../Config/firebase'
import React, { useState, useEffect, useContext } from "react"
import AppContext from "../context/AppContext"
import Page404 from "./Page404"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProductDetail(props){
    const [ product, setProduct ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    const context = useContext(AppContext)

    const styles = {
        marginLeft: "20%",
        marginRight: "20%"
    }

    useEffect(()=>{
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
    
    // Renders
    if (isLoading) {
        return <p className="loader">Loading...</p>
    }
    else if (product === undefined) {
        return <Page404 />
    }
    else {
        return (
            <Container>
                <Row style={{height: "80vh"}}className="align-items-center">
                    <Col>
                    <Card style={styles} className="text-center">
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Img style={{maxHeight:"auto", maxWidth:300, margin:"auto"}} variant="top" src={product.photo_url} />
                            <Card.Text>
                                <h4>${product.price}</h4>
                                <p className="small">{product.description}</p>
                                <p className="small">Stock: {product.stock}</p>
                            </Card.Text>    
                        </Card.Body>
                        {context.login ?
                        <div>
                            <Button variant="outline-success" className="mb-2" style={{marginTop: -30}} onClick={handleClick}>Comprar</Button>
                        </div>
                        : null
                        }
                        <Link to={'/'} style={{textDecoration:'none'}}>
                            <Button variant="outline-secondary" className="btn-sm mb-2">Volver al home</Button>
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default ProductDetail

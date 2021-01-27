import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import firebase from '../Config/firebase'
import React, { useState, useEffect, useContext } from "react"
import Page404 from "./Page404"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddToCartButton from "../components/AddToCartButton"
import AppContext from "../context/AppContext"
import LinearProgress from '@material-ui/core/LinearProgress'

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
    
    // Renders
    if (isLoading) {
        return <LinearProgress />
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
                            </Card.Text>    
                        </Card.Body>
                        {context.login &&
                            <AddToCartButton product={product}/>
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

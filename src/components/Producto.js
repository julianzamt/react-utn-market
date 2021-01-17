import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import AppContext from "../context/AppContext"

function Producto(props){

    const context = useContext(AppContext)

    return(
    <Card style={{padding:10}} className="text-center">
        <Card.Img style={{maxHeight:"auto", maxWidth:300, margin:"auto"}} variant="top" src={props.photo_url} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                ${props.price}
            </Card.Text>
            
        </Card.Body>
        <Link to={"/" + props.id}>
            <Button variant="outline-secondary" onClick={context.registryFeedbackOut}>Ver Detalle</Button>
        </Link>
    </Card>
    )
}

export default Producto
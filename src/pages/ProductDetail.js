import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

function ProductDetail(props){
    const { details } = props.location
    function handleClick(e){
        e.target.innerHTML = "Gracias por su compra!"
        e.target.style.backgroundColor = "yellow"
        e.target.style.color="green"
    }
    return (
        <div className="producto">
            <h2>{details.name}</h2>
            <img src={details.photo_url} 
                style={{ maxWidth: 300,
                         maxHeight: 300 }}></img>
            <h4>${details.price}</h4>
            <p>{details.description}</p>
            <p className="stock">Stock: {details.stock}</p>
            <Button variant="success" className="mb-2" onClick={handleClick}>Comprar</Button><br></br>
            <Link to={'/'} style={{textDecoration:'none'}}>
                <Button variant="primary" className="btn-sm">Volver al home</Button>
            </Link>
        </div>
    )
}

export default ProductDetail

/*  */
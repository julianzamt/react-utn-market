import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

function Page404() {
    return (
        <Container >
            <Row style={{height: "60vh"}}className="align-items-center">
                <Col className="text-center">
                <h1>¡Oh No!</h1>
                <h4>No pudimos encontrar tu producto</h4>
                <h1>🤷‍♂️</h1>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <Button variant="primary" className="btn-sm">Volver al home</Button>
                </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Page404
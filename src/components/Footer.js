import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const styles = {
        position: "absolute",
        bottom: 0,
        width: "100%",
    }

    return (
    <Container fluid="true">
        <Row>
            <Col style={styles} className="text-right p-3">
                <div>
                <p id="footer-text">
                    © 2021 &nbsp;
                    <span id="footer-logo">Julian Zamt &nbsp;</span>
                    &nbsp;
                    <Link style={{ color: "inherit", fontSize: 15 }} to={{pathname: "https://github.com/julizamt"}} target="_blank" >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    &nbsp; &nbsp;
                    <Link style={{ color: "inherit", fontSize: 15 }} to={{pathname: "https://www.instagram.com/julianzamt"}} target="_blank" >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </p>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Footer
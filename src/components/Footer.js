import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
                    <a style={{ color: "inherit", fontSize: 15 }} href="https://github.com/julizamt" rel="noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={faGithub} className="grow-button"/>
                    </a>
                    &nbsp; &nbsp;
                    <a style={{ color: "inherit", fontSize: 15 }} href="https://www.instagram.com/julianzamt" rel="noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={faInstagram} className="grow-button"/>
                    </a>
                    &nbsp; &nbsp;
                    <a style={{ color: "inherit", fontSize: 15 }} href="https://www.linkedin.com/in/julian-zamtlejfer-1520205a/" rel="noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={faLinkedin} className="grow-button"/>
                    </a>
                </p>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Footer
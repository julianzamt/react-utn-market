import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import perfil from '../images/perfil.jpg';
import perfil2 from '../images/perfil2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Goodbye = (props) => {
    return(
        <Modal {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header as="section">
        <Modal.Title as="h4" bsPrefix="cart-title" style={{margin:"auto"}}>
          TruchiMarket
        </Modal.Title>
      </Modal.Header>
        <Modal.Body className="text-center">

        <div className="perfil-container">
            <div className="perfil-inner">
                <div className="perfil-front">
                    <img src={perfil} className="perfil" style={{
                        border: "1px solid lightgrey",
                        borderRadius: "50%" }}    
                    />
                </div>
                <div className="perfil-back">
                <img src={perfil2} className="perfil" style={{
                        border: "1px solid lightgrey",
                        borderRadius: "50%" }}    
                    />
                </div>
                <div className="clearfix"></div>
            </div>
        </div>

        <p className="m-3">© 2021 Julián Zamt</p>
        <p className="small">A simple marketplace made with React.</p>
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
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.onHide}>Volver al market</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default Goodbye
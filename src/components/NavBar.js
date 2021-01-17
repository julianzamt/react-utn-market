import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import logo from '../logo.svg'
import AppContext from "../context/AppContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function NavBar(){
    return(
        <AppContext.Consumer>
        {
        context =>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light">
                    <Navbar.Brand as={Link} to={'/'}><img src={logo} id="logo"></img><span id="header">TruchiMarket</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        { 
                            context.login &&
                            <>
                            {context.username? <Nav.Link>Hola, {context.username}</Nav.Link>: null}
                            <Nav.Link as={Link} to={'/'} onClick={context.registryFeedbackOut}><FontAwesomeIcon icon={faHome} /> </Nav.Link>
                            <Nav.Link onClick={context.logoutUser}><FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link>
                            </>
                        }
                        {
                            !context.login &&
                            <>
                            <Nav.Link as={Link} to={'/'}><FontAwesomeIcon icon={faHome} /></Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                            <Nav.Link as={Link} to={'/registro'}>Registro</Nav.Link>
                            </>
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        }
        </AppContext.Consumer>
    )
}

export default NavBar


import React, { useState, useContext, useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import logo from '../logo.svg'
import AppContext from "../context/AppContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from "./Cart"

function NavBar(){
    const context = useContext(AppContext)
    
    const [modalShow, setModalShow] = useState(false);

    const handleCartClick = () => {
        context.registryFeedbackOut()
        setModalShow(true)
    }

    return(
        <div id="navbar-test">
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand as={Link} to={'/'}><img src={logo} id="logo" alt="React-logo"></img><span id="header">TruchiMarket</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center ">
                    <Nav className="ml-auto">
                    { 
                        context.login &&
                        <>
                        {context.username !== null ? <Nav.Link>Hi, {context.username}</Nav.Link> : null}
                        <Nav.Link onClick={handleCartClick}><FontAwesomeIcon icon={faShoppingCart} /><span className="small">({context.cartItems ? context.cartItems.length : 0})</span></Nav.Link>
                        <Nav.Link as={Link} to={'/'} onClick={context.registryFeedbackOut}><FontAwesomeIcon icon={faHome} /> </Nav.Link>
                        <Nav.Link onClick={context.logoutUser}><FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link>
                        </>
                    }
                    {
                        !context.login &&
                        <>
                        <Nav.Link as={Link} to={'/'}><FontAwesomeIcon icon={faHome} /></Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        <Nav.Link as={Link} to={'/registro'}>Register</Nav.Link>
                        </>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Cart
                show={modalShow}
                onHide={()=>setModalShow(false)}
            />
        </div>
    )
}

export default NavBar


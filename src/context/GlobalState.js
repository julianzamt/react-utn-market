import React, { useState } from "react"
import AppContext from "./AppContext"
import { useHistory } from "react-router-dom"

function GlobalState(props) {
    const [ login, setLogin ] = useState(localStorage.getItem("login"))
    const [ username, setUsername ] = useState(localStorage.getItem("username"))
    const [ logoutMessage, setLogoutMessage ] = useState(false)
    const [ registryFeedback, setRegistryFeedback ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ cartShow, setCartShow] = useState(false);
    const history = useHistory()

    
    const loginUser = () => {
        setLogin(true)
        localStorage.setItem("login",true)
    }
    const logoutUser = () => {
        setLogin(false)
        setLogoutMessage(true)
        registryFeedbackOut()
        localStorage.clear()
        setUsername(null)
        setCartItems([])
        history.push("/login")
    }
    const logoutFeedbackIn = () => {
        setLogoutMessage(true)
    }
    const logoutFeedbackOut = () => {
        setLogoutMessage(false)
    }
    const registryFeedbackIn = () => {
        setRegistryFeedback(true)
    }
    const registryFeedbackOut = () => {
        setRegistryFeedback(false)
    }
    const addToCart = (newItem) => {
        setCartItems([
            ...cartItems,
            newItem
        ])
    }
    const removeOneFromCart = (product) => {
        const productIndex = cartItems.findIndex(item => item.name === product.name)
        setCartItems(prevState => {
            prevState.splice(productIndex, 1)
            const updatedCart = [...prevState]
            return updatedCart})
    }
    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter(item => item.name !== product.name)
        setCartItems(updatedCart)
    }

    return(
        <AppContext.Provider
            value={{
                login: login,
                loginUser: loginUser,
                logoutUser: logoutUser,
                logoutMessage: logoutMessage,
                logoutFeedbackIn: logoutFeedbackIn,
                logoutFeedbackOut: logoutFeedbackOut,
                registryFeedback: registryFeedback,
                registryFeedbackIn: registryFeedbackIn,
                registryFeedbackOut: registryFeedbackOut,
                username: username,
                setUsername: setUsername,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                cartItems: cartItems,
                removeOneFromCart: removeOneFromCart
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default GlobalState
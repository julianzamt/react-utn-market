import React, { useState } from "react"
import AppContext from "./AppContext"
import { useHistory } from "react-router-dom"

function GlobalState(props) {
    const [ login, setLogin ] = useState(localStorage.getItem("login"))
    const [ loginMessage, setLoginMessage ] = useState(false)
    const [ username, setUsername ] = useState("")
    const [ logoutMessage, setLogoutMessage ] = useState(false)
    const [ registryFeedback, setRegistryFeedback ] = useState(false)
    const history = useHistory()
    
    const loginUser = () => {
        setLogin(true)
        localStorage.setItem("login",true)
    }
    const logoutUser = () => {
        setLogin(false)
        setLoginMessage(false)
        setLogoutMessage(true)
        localStorage.removeItem("login")
        history.push("/login")
    }
    const loginFeedbackIn = () => {
        setLoginMessage(true)
    }
    const loginFeedbackOut = () => {
        setLoginMessage(false)
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
    return(
        <AppContext.Provider
            value={{
                login: login,
                loginUser: loginUser,
                logoutUser: logoutUser,
                loginFeedbackIn: loginFeedbackIn,
                loginFeedbackOut: loginFeedbackOut,
                loginMessage: loginMessage,
                logoutMessage: logoutMessage,
                logoutFeedbackIn: logoutFeedbackIn,
                logoutFeedbackOut: logoutFeedbackOut,
                registryFeedback: registryFeedback,
                registryFeedbackIn: registryFeedbackIn,
                registryFeedbackOut: registryFeedbackOut,
                username: username,
                setUsername: setUsername
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default GlobalState
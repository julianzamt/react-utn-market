import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useContext } from "react"
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../Config/firebase'
import AppContext from "../context/AppContext"
import { useHistory } from "react-router-dom"
import Alert from 'react-bootstrap/Alert'

function Login(){
    const [ form, setForm ] = useState({
        email: "",
        password: ""
    })
    const [ spinner, setSpinner ] = useState(false)
    const context = useContext(AppContext)
    const [show, setShow] = useState(true);
    const [ error, setError ] = useState("")
    const [ errorFeedback, setErrorFeedback ] = useState(false)

    const closeAlert = () => {
        setShow(false)
        context.logoutFeedbackOut()
    }

    const closeError = () => {
        setErrorFeedback(false)
    }

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        setSpinner(true)
        const email = form.email
        const password = form.password
        let userId = ""
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            context.loginUser()
            context.loginFeedbackIn()
            userId = data.user.uid
            console.log(userId)
            firebase.db.collection("Usuarios").where("userId", "==", "JcrY1i3K8UQOAlmoKcRR6HQkLpG3").get()
        })
        .then((querySnapshot) => {
            //history.push("/")
            const data = querySnapshot.docs.map((doc) => ({
                ...doc.data()
            }))
            console.log(data)
            //context.setUsername(doc.data().username)
            setSpinner(false)
        })
        .catch((err) =>{
            setError(err.message)
            setErrorFeedback(true)
            setSpinner(false)
        })

        
        
    }

    function handleChange(e){
        const target = e.target
        const name = target.name
        const value = target.value

        setForm({
            ...form,
            [ name ] : value
        })
    }

    return (
        <div className="container mt-3 text-center" >
            <h2>Login</h2>
            {show ? 
            context.logoutMessage ? 
            <Alert variant="info" onClose={closeAlert} dismissible>Gracias por utilizar nuestros servicios</Alert> 
            : null 
            : null }
            {errorFeedback ?
            <Alert variant="danger" onClose={closeError} dismissible>{error}</Alert>
            : null }   
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" name="email" value={form.email} placeholder="Email" onChange={handleChange} /><br></br>
                <Form.Control type="password" name="password" value={form.password} placeholder="Contraseña" onChange={handleChange} /><br></br>
                <Button variant="primary" type="submit">Login  
                {spinner ? <Spinner animation="border" variant="light" size="sm" /> : null } </Button>
            </Form>
        </div>
    )
}

export default Login
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../Config/firebase'
import Alert from 'react-bootstrap/Alert'

function Login(){
    const [ form, setForm ] = useState({
        email: "",
        password: ""
    })
    const [ spinner, setSpinner ] = useState(false)
    const [ error , setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ success, setSuccess ] = useState(false)

    function handleSubmit(e){
        setSpinner(true)
        const email = form.email
        const password = form.password
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
            setSuccess(true)
            setSpinner(false)
        })
        .catch((err) =>{
            console.log(err)
            setError(true)
            setErrorMessage(err.message)
            setSpinner(false)
        })
        e.preventDefault()
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
            {error ? <Alert variant="danger">{errorMessage}</Alert> : null }
            {success ? <Alert variant="success">Usuario logueado con éxito</Alert> : null}   
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
import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../Config/firebase'
import Alert from 'react-bootstrap/Alert'

function Registro(){
    const [ form, setForm ] = useState({
        username: '', 
        first: '',
        last: '',
        email: '',
        password: '',
        confirmation: ''})
    
    const [ spinner, setSpinner ] = useState(false)
    const [ error , setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ success, setSuccess ] = useState(false)

    function handleSubmit(e){
        setSpinner(true)
        const email = form.email
        const password = form.password
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data) =>{
            firebase.db.collection("Usuarios").add({
                username: form.username,
                first: form.first,
                last: form.last,
                email: form.email,
                userId: data.user.uid
            })
            setSuccess(true)
            setSpinner(false)
        })
        .catch((err) => {
            setError(true)
            setErrorMessage(err.message)
            setSpinner(false)
        })
        e.preventDefault()
        return
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
        <div className="container mt-3 text-center">
        <h2>Crear cuenta nueva</h2>
        {error ? <Alert variant="danger">{errorMessage}</Alert> : null }
        {success ? <Alert variant="success">Usuario creado con éxito</Alert> : null }
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name="username" value={form.username} placeholder="Nombre de usuario" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="first" value={form.first} placeholder="Nombre" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="last" value={form.last} placeholder="Apellido" onChange={handleChange} /><br></br>
            <Form.Control type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="password" value={form.password} placeholder="Contraseña" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="confirmation" value={form.confirmation} placeholder="Confirme la contraseña" onChange={handleChange} /><br></br>
            <Button variant="primary" type="submit">Registrarse 
            {spinner ? <Spinner animation="border" variant="light" size="sm" /> : null } </Button>
        </Form>
        </div>
    )
}

export default Registro
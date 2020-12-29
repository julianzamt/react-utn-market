import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase'

function Registro(){
    // Initialize form states
    const [ form, setForm ] = useState({
        username: '', 
        first: '',
        last: '',
        email: '',
        password: '',
        confirmation: ''})

    function handleSubmit(e){
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
        <div className="container mt-3 text-center">
        <h2>Crear cuenta nueva</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name="username" value={form.username} placeholder="Nombre de usuario" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="first" value={form.first} placeholder="Nombre" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="last" value={form.last} placeholder="Apellido" onChange={handleChange} /><br></br>
            <Form.Control type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="password" value={form.password} placeholder="Contraseña" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="confirmation" value={form.confirmation} placeholder="Confirme la contraseña" onChange={handleChange} /><br></br>
            <Button variant="primary">Registrarse</Button>
        </Form>
        </div>
    )
}

export default Registro
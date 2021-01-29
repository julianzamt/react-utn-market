import React, { useState, useContext } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../Config/firebase'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from "react-router-dom"
import AppContext from "../context/AppContext"

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

    const history = useHistory()
    const context = useContext(AppContext)

    let userId = ""

    function handleSubmit(e){
        setSpinner(true)
        setError(false)
        const email = form.email
        const password = form.password
        const confirmation = form.confirmation
        if (password.length >= 6 && password !== confirmation) {
            setError(true)
            setErrorMessage("Password and confirmation must match")
            e.preventDefault()
            setSpinner(false)
            return
        }
        else if (password.length < 6) {
            setError(true)
            setErrorMessage("Password must have 6 characters or more")
            e.preventDefault()
            setSpinner(false)
            return
        }
        else {
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data) =>{
            firebase.db.collection("Usuarios").add({
                username: form.username,
                first: form.first,
                last: form.last,
                email: form.email,
                userId: data.user.uid
            })
            context.registryFeedbackIn()
            })
            .then(() => {
                const email = form.email
                const password = form.password
                return (firebase.auth.signInWithEmailAndPassword(email, password))
                .then((data) => {
                    context.loginUser()
                    userId = data.user.uid
                    return (firebase.db.collection("Usuarios").where("userId", "==", userId).get())
                })
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => ({
                        ...doc.data()
                    }))
                    localStorage.setItem("username", data[0].username)
                    context.setUsername(localStorage.getItem("username"))
                    setSpinner(false)
                    history.push("/")
                })
            })
            .catch((err) => {
                setError(true)
                setErrorMessage("Sorry, there was an error processing the registration. Please try again")
                setSpinner(false)
            })
        }
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
        <h2>Create new account</h2>
        {error ? <Alert variant="danger">{errorMessage}</Alert> : null }
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="first" value={form.first} placeholder="Name" onChange={handleChange} /><br></br>
            <Form.Control type="text" name="last" value={form.last} placeholder="Lastname" onChange={handleChange} /><br></br>
            <Form.Control type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="password" value={form.password} placeholder="Password (6+ characters)" onChange={handleChange} /><br></br>
            <Form.Control type="password" name="confirmation" value={form.confirmation} placeholder="Password confirmation" onChange={handleChange} /><br></br>
            <Button variant="primary" type="submit">Register
            {spinner ? <Spinner animation="border" variant="light" size="sm" className="ml-2" /> : null } </Button>
        </Form>
        </div>
    )
}

export default Registro
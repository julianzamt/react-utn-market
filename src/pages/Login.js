import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(){
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <div className="container mt-3" >
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="Nombre de usuario" /><br></br>
                <Form.Control type="password" placeholder="Contraseña" /><br></br>
                <Button variant="secondary" type="submit">Entrar</Button>
            </Form>
        </div>
    )
}

export default Login
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Registro(){
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <div className="container mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="Nombre de usuario" /><br></br>
                <Form.Control type="text" placeholder="Nombre" /><br></br>
                <Form.Control type="text" placeholder="Apellido" /><br></br>
                <Form.Control type="password" placeholder="Contraseña" /><br></br>
                <Form.Control type="password" placeholder="Confirme la contraseña" /><br></br>
                <Button variant="primary">Registrarse</Button>
            </Form>
        </div>
    )
}

export default Registro
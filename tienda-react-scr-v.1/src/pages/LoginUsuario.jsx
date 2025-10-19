import Login from "../components/Login";
import { Link } from 'react-router-dom';
import {  Button, Container} from 'react-bootstrap';

function LoginUsuario(){
    return(
        <>
        <h2>Login Usuario</h2>
        <Container>
            <Login/> 
            <h5>
                ¿No tienes una cuenta?, Regístrate aquí
            </h5>
            
            <Button variant="success"  as={Link} to="/registro-usuario">
            Ir al Registro de usuario
            </Button>

        </Container>   
        </>
        
    )
}
export default LoginUsuario;
import Registro from "../components/Registro";
import { Link } from 'react-router-dom';
import {  Button, Container} from 'react-bootstrap';
function RegistroUsuario(){
    return(
        <>
        <h2>Registro de Usuario</h2>
        <Container>
        
            <Registro/>

            <h5> ¿Ya tiene una cuenta?, Inicie sesión</h5>
            <Button
            variant="success"
            as={Link} to={'/login-usuario'}>
            Ir al Inicio de Sesión  
            </Button>
       </Container>
        </>
    )
}
export default RegistroUsuario;
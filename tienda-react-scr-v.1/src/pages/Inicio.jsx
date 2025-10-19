import { Container } from "react-bootstrap";
import CarruselPagIni from "../components/CarruselPagIni";
import ProductosDestacados from "../components/ProductosDestacados";

function Inicio(){
    return(
        <>
        <Container>
            <CarruselPagIni/>

           

            <ProductosDestacados/>
            


        </Container>
        
        </>
        
    )

}
export default Inicio;
import { Container, Tab, Tabs } from 'react-bootstrap';
function Nosotros(){
    return(
        <>
        
        <Container className="my-5">
            <h1 className="mb-4 text-center">Sobre Nosotros</h1>
            <Tabs defaultActiveKey="quienes" id="tabs-nosotros" className="mb-3 justify-content-center" fill>
                <Tab eventKey="quienes" title="¿Quiénes somos?">
                    <img src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/202206/770_1656318084blog_post_gatos_sorprendentes_1.jpg" alt="quienes" className='carrusel-img' />
                <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet repellendus aspernatur, sequi neque repellat ex ut debitis velit laborum enim excepturi at necessitatibus magnam voluptatem cum suscipit, commodi obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore commodi velit temporibus explicabo labore cum asperiores assumenda quos soluta fuga accusantium est fugiat, optio aliquid repudiandae dolorem sint deleniti.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores id nesciunt fugit? Sint ipsum nulla labore, eos veritatis animi exercitationem magnam ut provident molestiae reprehenderit vero expedita amet, error unde.

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate, debitis adipisci corporis accusamus ad exercitationem, autem unde rerum id cum, et quibusdam quisquam odit voluptas veniam atque numquam rem!

                </p>
                </Tab>
                <Tab eventKey="mision" title="Misión">
                    
                   <img src="https://www.fademga.org/media/uploads/2024/06/24/jpgmision.jpg" alt="mision" className='carrusel-img' />
                <p className="mt-3">
                    Nuestra misión

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, culpa officia a est cum aspernatur labore asperiores repudiandae ex. Ipsam dolore optio labore delectus necessitatibus sit tenetur totam odit natus.

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam, animi officiis voluptatum rerum et, repudiandae hic ab expedita vitae ducimus molestias, voluptas consectetur. Asperiores vero consectetur labore praesentium quisquam.
                </p>
                </Tab>
                <Tab eventKey="vision" title="Visión">
                    <img src="https://img.freepik.com/foto-gratis/disparo-primer-plano-aislado-cachorro-broholmer-delante-fondo-blanco-mirando-camara_181624-46081.jpg" alt="vision" className='carrusel-img' />
                <p className="mt-3">
                    mascotas
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit corporis nam sunt possimus illum natus ipsum iusto enim facilis, velit dolores blanditiis alias obcaecati distinctio beatae illo rerum deserunt. Minus?

                </p>
                </Tab>
                <Tab eventKey="valores" title="Valores">
                    <img src="https://www.goredforwomen.org/es/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg?sc_lang=es" alt="valores" className='carrusel-img' />
                <ul className="mt-3">
                    <li>Transparencia</li>
                    <li>Calidad</li>
                    <li>Responsabilidad</li>
                    <li>Innovación</li>
                    <li>Compromiso</li>
                </ul>
                </Tab>
            </Tabs>
        </Container>
                
        
        </>

        
    )
}
export default Nosotros;
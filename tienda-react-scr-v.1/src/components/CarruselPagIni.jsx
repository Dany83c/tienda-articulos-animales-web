import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slides = [
  {
    src: 'https://sociedadmascotas.cl/wp-content/uploads/2023/06/Nueno-banner-de-Sociedad-Mascotas-1300x731.jpg',
    alt: 'Slide 1',
    caption: 'Bienvenido a Viva Pets',
    subcaption: 'Todo para tus mascotas con amor',
    linkTo: '/productos'
  },
  {
    src: 'https://puppis.blog/wp-content/uploads/2022/08/Por-que-las-mascotas-son-buenas-para-los-ninos-min.jpg',
    alt: 'Slide 2',
    caption: 'Ven a ver nuestros Blogs!',
    subcaption: 'Descubre algo nuevo',
    linkTo: '/blogs'
  },
  {
    src: 'https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/10/13/63476cc09ab6c.jpeg',
    alt: 'Slide 3',
    caption: 'Registrese hoy! ',
    subcaption: 'Calidad que tu mascota merece',
    linkTo: '/registro-usuario'
  }
];

const CarruselInicio = () => {
  return (
    <>
    <div className='carrusel-wrap'> 
        <Carousel indicators={true} controls={true} interval={4000}>
        {slides.map((slide, idx) => (
            <Carousel.Item key={idx}>
            <Link to={slide.linkTo}>
                <img
                className="d-block w-100 carrusel-img"
                src={slide.src}
                alt={slide.alt}
                style={{ maxHeight: '500px', objectFit: 'cover', cursor: 'pointer' }}
                />
                <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.subcaption}</p>
                </Carousel.Caption>
            </Link>
            </Carousel.Item>
        ))}
        </Carousel>


    </div>


    
    </>
  );
};

export default CarruselInicio;

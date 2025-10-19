import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';
import { Container, Button } from 'react-bootstrap';

function DetalleBlog() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <p className="text-center">Blog no encontrado.</p>;

  return (
    <Container className="my-5">
      <h1>{blog.titulo}</h1>
      <p className="text-muted">Por {blog.autor} - {blog.fecha}</p>
      <img
        src={blog.imagen}
        alt={blog.titulo}
        className="img-fluid rounded mb-4"
      />

      {/* Renderizar cada párrafo como un <p> separado */}
      {blog.contenido.map((parrafo, idx) => (
        <p key={idx}>{parrafo}</p>
      ))}

      <Button as={Link} to="/blogs" variant="secondary" className="mt-3">
        Volver al blog
      </Button>
    </Container>
  );
}
export default DetalleBlog;
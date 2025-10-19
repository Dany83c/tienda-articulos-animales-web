import { Link } from 'react-router-dom';
import blogs from '../data/blogs';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
function Blog() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Blog</h2>
      <h5 className="mb-4" >Para el tutor animal informado</h5>
      <Row>
        {blogs.map(blog => (
          <Col key={blog.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={blog.imagen} alt={blog.titulo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{blog.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.autor} - {blog.fecha}
                </Card.Subtitle>
                {/* Mostrar primera línea del contenido */}
                <Card.Text className="flex-grow-1">
                  {blog.contenido[0]}
                </Card.Text>
                <Button
                  as={Link}
                  to={`/blogs/${blog.id}`}
                  variant="primary"
                >
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 export default Blog;

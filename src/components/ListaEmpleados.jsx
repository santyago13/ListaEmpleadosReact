import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListaEmpleados = ({ empleados = [], eliminarEmpleado }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <Container>
        <Row className="g-4">
          {empleados.map((empleado) => (
            <Col key={empleado.id} className="col-12 col-md-6 col-lg-3">
              <Card style={{ width: "18rem" }} className="shadow h-100">
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <Card.Img
                        variant="top"
                        src={empleado.imagen}
                        alt={empleado.nombre}
                        className="rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="h-50">
                      <Card.Title className="ms-3">{empleado.nombre}</Card.Title>
                      <div className="d-flex">
                        <Card.Text className="ms-3 h-50">{empleado.cargo}</Card.Text>
                        <Card.Text className="ms-2 bg-primary h-50 rounded text-white px-1">
                          {empleado.departamento}
                        </Card.Text>
                      </div>
                      <div>
                        <Button
                          variant="danger"
                          className="ms-3"
                          onClick={() => eliminarEmpleado(empleado.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                        <Button variant="warning" className="ms-3" disabled>
                          <i className="bi bi-pencil"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListaEmpleados;

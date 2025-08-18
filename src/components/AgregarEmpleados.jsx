import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AgregarEmpleados = () => {
  return (
    <div>
      <h3 className="text-center">Agregar Empleados</h3>
      <Form className="gap-3 justify-content-center">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Juan Perez" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Cargo</Form.Label>
          <Form.Control type="text" placeholder="CEO" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Depertamento</Form.Label>
          <Form.Control type="text" placeholder="Marketing" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Foto de Perfil</Form.Label>
          <Form.Control type="file" placeholder="CEO" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Agregar Empleado
        </Button>
      </Form>
    </div>
  );
};

export default AgregarEmpleados;

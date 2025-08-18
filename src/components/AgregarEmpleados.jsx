import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { use, useState } from "react";
import Empleados from "../ClaseEmpleados";

const AgregarEmpleados = () => {
  const guardarEmpleado = [];
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [imagen, setImagen] = useState("");
  const [id, setId] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const nuevoEmpleado = new Empleados(
      nombre,
      id,
      cargo,
      departamento,
      imagen
    );
    // enviar el nuevo empleado al array guardarEmpleado
    guardarEmpleado.push(nuevoEmpleado);
    //mostrar mensaje de éxito
    console.log("Empleado agregado:", nuevoEmpleado);
  }

  return (
    <div>
      <h3 className="text-center">Agregar Empleados</h3>
      <Form className="gap-3 justify-content-center border p-3 rounded-3 shadow mt-3">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan Perez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="CEO"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Depertamento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marketing"
            value={departamento}
            onChange={(e) => {
              setDepartamento(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Foto de Perfil</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL de la foto"
            value={imagen}
            onChange={(e) => {
              setImagen(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Agregar Empleado
        </Button>
      </Form>
    </div>
  );
};

export default AgregarEmpleados;

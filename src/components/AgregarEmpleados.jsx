import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import ListaEmpleados from "./ListaEmpleados";

class Empleados {
  constructor(nombre, id, cargo, departamento, imagen) {
    this.nombre = nombre;
    this.id = id;
    this.cargo = cargo;
    this.departamento = departamento;
    this.imagen = imagen;
  }
}

const AgregarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [imagen, setImagen] = useState("");
  const [id, setId] = useState(1);

  // Cargar empleados desde localStorage al iniciar
  useEffect(() => {
    const empleadosGuardados = localStorage.getItem("empleados");
    if (empleadosGuardados) {
      const parsed = JSON.parse(empleadosGuardados);
      setEmpleados(parsed);
      if (parsed.length > 0) setId(parsed[parsed.length - 1].id + 1);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaImagen =
      imagen || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg";

    const nuevoEmpleado = new Empleados(
      nombre,
      id,
      cargo,
      departamento,
      nuevaImagen
    );

    const nuevosEmpleados = [...empleados, nuevoEmpleado];
    setEmpleados(nuevosEmpleados);
    setId(id + 1);

    localStorage.setItem("empleados", JSON.stringify(nuevosEmpleados));

    setNombre("");
    setCargo("");
    setDepartamento("");
    setImagen("");
  };

  // Función para eliminar empleado por id
  const eliminarEmpleado = (id) => {
    const filtrados = empleados.filter((emp) => emp.id !== id);
    setEmpleados(filtrados);
    localStorage.setItem("empleados", JSON.stringify(filtrados));
  };

  return (
    <div>
      <h3 className="text-center">Agregar Empleados</h3>
      <Form
        className="gap-3 justify-content-center border p-3 rounded-3 shadow mt-3"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan Perez"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: CEO"
            required
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Marketing"
            required
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Foto de Perfil (opcional)</Form.Label>
          <Form.Control
            type="url"
            placeholder="URL de la foto"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Empleado
        </Button>
      </Form>

      <ListaEmpleados empleados={empleados} eliminarEmpleado={eliminarEmpleado} />
    </div>
  );
};

export default AgregarEmpleados;

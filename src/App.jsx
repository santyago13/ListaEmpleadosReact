import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Nav from "./components/Nav.jsx";
import AgregarEmpleados from "./components/AgregarEmpleados.jsx";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="container mt-4">
        <AgregarEmpleados />
        <ListaEmpleados />
      </main>
    </>
  );
}

export default App;

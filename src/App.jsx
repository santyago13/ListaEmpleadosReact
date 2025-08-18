import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
    <nav>
      <Nav></Nav>
    </nav>
      <main>
        <ListaEmpleados></ListaEmpleados>
      </main>
    </>
  );
}

export default App;

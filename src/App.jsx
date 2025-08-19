import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Nav from "./components/Nav.jsx";
import AgregarEmpleados from "./components/AgregarEmpleados.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="container mt-4">
        <AgregarEmpleados />
        <div className="border m-3"></div>
        <ListaEmpleados />
      </main>
    </>
  );
}

export default App;

class Empleados {
  #nombre;
  #id;
  #cargo;
  #departamento;
  #imagen;
  constructor(nombre, id, cargo, departamento, imagen) {
    this.#nombre = nombre;
    this.#id =
      crypto?.randomUUID?.() ??
      Date.now().toString() + Math.random().toString(36).slice(2, 10);
    this.#cargo = cargo;
    this.#departamento = departamento;
    this.#imagen = imagen;
  }

  // getters
  get nombre() {
    return this.#nombre;
  }
  get id() {
    return this.#id;
  }
  get cargo() {
    return this.#cargo;
  }
  get departamento() {
    return this.#departamento;
  }
  get imagen() {
    return this.#imagen;
  }

  // setters
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  set id(id) {
    this.#id = id;
  }
  set cargo(cargo) {
    this.#cargo = cargo;
  }
  set departamento(departamento) {
    this.#departamento = departamento;
  }
  set imagen(imagen) {
    this.#imagen = imagen;
  }

  toJson() {
    return {
      nombre: this.#nombre,
      id: this.#id,
      cargo: this.#cargo,
      departamento: this.#departamento,
      imagen: this.#imagen,
    };
  }
}

export default Empleados;

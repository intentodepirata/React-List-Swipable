const arrayObjectos = [
  { id: 1, nombre: "Nombre1" },
  { id: 2, nombre: "Nombre2" },
  { id: 3, nombre: "Nombre3" }
];

const objeto = { id: 1, nombre: "Juanito" };

// resultado
const arrayObjetosActualizado = [
  { id: 1, nombre: "Juanito" },
  { id: 2, nombre: "Nombre2" },
  { id: 3, nombre: "Nombre3" }
];

const arrayActualizado = arrayObjectos.map((item) =>
  item.id == objeto.id ? objeto : item
);
console.log(arrayActualizado);

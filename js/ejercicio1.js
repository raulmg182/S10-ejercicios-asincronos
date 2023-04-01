const saludar = (nombre, callback) => {
  let nombreMayusculas = nombre.toUpperCase();

  setTimeout(() => {
    callback(nombreMayusculas);
  }, 4000);

  callback(nombreMayusculas);
};

const imprimeNombre = (nombreEnMayusculas) => {
  console.log(nombreEnMayusculas);
};

saludar("martinez", imprimeNombre);
console.log("final")

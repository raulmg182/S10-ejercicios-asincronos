// console.log("Saludos");
// console.log("como estas?");
// console.log("adios");


const saludar = () => {
  console.log("hola");
};

const preguntar = (callback) => {
  setTimeout(() => {
    console.log("como estas?");
    callback();
  }, 3000);
};

const despedir = () => {
  console.log("hola");
};

saludar();
preguntar(despedir);
// despedir();

//Definimos la funcion que nos hara saber si el numero es par o impar
function esPar(numero) {
    return numero % 2 === 0;
  }
  
// proceso
let numero = 800;
  if (esPar(numero)) {
   console.log("Verdadero");
} else {
   console.log("Falso");
}
  
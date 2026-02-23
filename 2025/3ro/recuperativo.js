function calcularPorciones() {
  // Cantidades base para 2 porciones
  let manzanas = 2;
  let harina = 200;   // gramos
  let azucar = 100;   // gramos
  let manteca = 50;   // gramos

  // Pedir al usuario la cantidad de porciones
  const porciones = prompt("¿Cuántas porciones deseas preparar?");
  const porcionesNum = parseInt(porciones);

  if (isNaN(porcionesNum) || porcionesNum <= 0) {
    alert("Por favor ingresa un número válido.");
    return;
  }

  // Calcular nuevas cantidades (regla de tres simple)
  let manzanasCalc = (manzanas / 2) * porcionesNum;
  let harinaCalc   = (harina / 2) * porcionesNum;
  let azucarCalc   = (azucar / 2) * porcionesNum;
  let mantecaCalc  = (manteca / 2) * porcionesNum;

  // Mostrar resultado en la página
  let resultadoHTML = "<h3>Ingredientes ajustados para " + porcionesNum + " porciones:</h3>";
  
  resultadoHTML += "Manzanas: " + manzanasCalc + "<br>";
  resultadoHTML += "Harina: " + harinaCalc + "<br>";
  resultadoHTML += "Azúcar: " + azucarCalc + "<br>";
  resultadoHTML += "Manteca: " + mantecaCalc;
  

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
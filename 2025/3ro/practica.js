function calcularPromedio() {
      // Pedimos las tres notas
      let nota1 = prompt("Ingresá la primera nota:");
      let nota2 = prompt("Ingresá la segunda nota:");
      let nota3 = prompt("Ingresá la tercera nota:");

      // Convertimos a números
      nota1 = Number(nota1);
      nota2 = Number(nota2);
      nota3 = Number(nota3);

      // Validamos que sean números válidos
      if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let promedio = (nota1 + nota2 + nota3) / 3;
        //promedio = Math.round(promedio) // Redondeamos

        if (promedio >= 6) {
          alert("Tu promedio es " + promedio + ". ¡Aprobaste!");
        } else {
          alert("Tu promedio es " + promedio + ". Desaprobaste.");
        }
      } else {
        alert("Debés ingresar solo valores numéricos para las notas.");
      }
    }

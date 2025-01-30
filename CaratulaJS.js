function generarCaratula() {
    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value.trim();
    const grado = document.getElementById('grado').value.trim();
    const materia = document.getElementById('materia').value.trim();
    const docente = document.getElementById('docente').value.trim();

    // Verificar si algún campo está vacío
    if (!nombre || !grado || !materia || !docente) {
        alert('Algunos datos están incompletos. La carátula mostrará información incompleta.');
    }

    // Insertar los valores en la carátula
    document.getElementById('caratulaNombre').textContent = nombre || "Sin especificar";
    document.getElementById('caratulaGrado').textContent = grado || "Sin especificar";
    document.getElementById('caratulaMateria').textContent = materia || "Sin especificar";
    document.getElementById('caratulaDocente').textContent = docente || "Sin especificar";

    // Aplicar clase de previsualización
    const caratula = document.getElementById('caratula');
    caratula.classList.add('print-preview');

    // Mostrar la carátula y el botón de imprimir
    caratula.style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
}


function limpiarFormulario() {
    // Limpiar los campos del formulario
    document.getElementById('studentForm').reset();

    // Ocultar la carátula y el botón de imprimir
    //document.getElementById('caratula').style.display = 'none';
    //document.getElementById('printButton').style.display = 'none';
}

function imprimirPDF() {
    // Ocultar el botón antes de imprimir
    document.getElementById('printButton').style.display = 'none';

    // Usar window.print para imprimir la carátula
    window.print();

    // Volver a mostrar el botón después de imprimir
    document.getElementById('printButton').style.display = 'block';
}

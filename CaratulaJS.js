
function generarCaratula() {
    // Obtener los valores ingresados en el formulario
    document.getElementById('caratula').style.display = 'none';
    const nombre = document.getElementById('nombre').value.trim();
    const grado = document.getElementById('grado').value.trim();
    const materia = document.getElementById('materia').value.trim();
    const docente = document.getElementById('docente').value.trim();

    // Verificar si algún campo está vacío
    if (!nombre || !grado || !materia || !docente) {
        alert('Por favor, complete todos los campos antes de generar la carátula.');
        return; // No continúa con la generación de la carátula
    }

    // Insertar los valores en la carátula
    document.getElementById('caratulaNombre').textContent = nombre;
    document.getElementById('caratulaGrado').textContent = grado;
    document.getElementById('caratulaMateria').textContent = materia;
    document.getElementById('caratulaDocente').textContent = docente;

    // Mostrar la carátula y el botón de imprimir
    document.getElementById('caratula').style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
    
}

function limpiarFormulario() {
    // Limpiar los campos del formulario
    document.getElementById('studentForm').reset();

    // Ocultar la carátula y el botón de imprimir
    document.getElementById('caratula').style.display = 'none';
    document.getElementById('printButton').style.display = 'none';
}

function imprimirPDF() {
    // Ocultar el botón antes de imprimir
    document.getElementById('printButton').style.display = 'none';

    // Usar window.print para imprimir la carátula
    window.print();

    // Volver a mostrar el botón después de imprimir
    document.getElementById('printButton').style.display = 'block';
}

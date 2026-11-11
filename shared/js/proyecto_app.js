
// ELEMENTOS DEL HTML
const galeria = document.getElementById("projects-grid");
const filtroCurso = document.getElementById("course-filter");
const filtroEquipo = document.getElementById("team-filter");
const buscador = document.getElementById("search-input");
const btnLimpiar = document.getElementById("clear-filters");
const contador = document.getElementById("results-label");
const estadoVacio = document.getElementById("empty-state");

// AGREGAR AUTOMÁTICAMENTE LOS EQUIPOS DEL 1 AL 20
for (let numero = 1; numero <= 20; numero++) {
    const opcion = document.createElement("option");
    opcion.value = numero;
    opcion.textContent = `Equipo ${numero}`;
    filtroEquipo.appendChild(opcion);
}

// NORMALIZAR TEXTO PARA BUSCAR SIN DISTINGUIR TILDES
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// GENERAR UNA TARJETA
function crearTarjeta(equipo) {

    const integrantes = equipo.a
        .split(";")
        .map(alumno => alumno.trim())
        .join(" · ");

    const enlacePagina = equipo.p
        ? `<a class="card-link primary" href="${equipo.p}" target="_blank" rel="noopener noreferrer">
                ↗ Visitar página
           </a>`
        : "";

    const enlaceRepo = equipo.r
        ? `<a class="card-link" href="${equipo.r}" target="_blank" rel="noopener noreferrer">
                ⌘ Repositorio
           </a>`
        : "";

    return `
        <div class="col-12 col-sm-6 col-lg-4">
            <article class="project-card">

                <div class="card-image-wrap">
                    <img
                        class="card-image"
                        src="${equipo.imagen}"
                        alt="Retrato de ${equipo.personaje}"
                    >
                    <span class="team-pill">
                        EQUIPO ${String(equipo.n).padStart(2, "0")}
                    </span>
                </div>

                <div class="card-body">

                    <div class="card-meta">
                        <span>${equipo.c}</span>
                        <span class="meta-dot"></span>
                        <span>Equipo ${equipo.n}</span>
                    </div>

                    <h3 class="card-title">${equipo.personaje}</h3>

                    <div class="members-label">Integrantes</div>

                    <p class="members">${integrantes}</p>

                    <div class="card-links">
                        ${enlacePagina}
                        ${enlaceRepo}
                    </div>

                </div>
            </article>
        </div>
    `;
}

// MOSTRAR LAS TARJETAS
function mostrarEquipos(lista) {

    galeria.innerHTML = "";

    lista.forEach(equipo => {
        galeria.innerHTML += crearTarjeta(equipo);
    });

    contador.textContent = `Mostrando ${lista.length} proyectos`;

    // Mostrar u ocultar el mensaje cuando no hay resultados
    if (lista.length === 0) {
        estadoVacio.classList.remove("d-none");
        galeria.classList.add("d-none");
    } else {
        estadoVacio.classList.add("d-none");
        galeria.classList.remove("d-none");
    }
}

// APLICAR LOS FILTROS
function filtrarEquipos() {

    const cursoSeleccionado = filtroCurso.value;
    const equipoSeleccionado = filtroEquipo.value;
    const busqueda = normalizarTexto(buscador.value.trim());

    const resultados = equipos.filter(equipo => {

        const coincideCurso =
            cursoSeleccionado === "todos" ||
            equipo.c === cursoSeleccionado;

        const coincideEquipo =
            equipoSeleccionado === "todos" ||
            equipo.n === Number(equipoSeleccionado);

        const textoEquipo = normalizarTexto(
            `${equipo.personaje} ${equipo.a} ${equipo.c} ${equipo.n}`
        );

        const coincideBusqueda = textoEquipo.includes(busqueda);

        return coincideCurso && coincideEquipo && coincideBusqueda;
    });

    mostrarEquipos(resultados);
}

// EVENTOS DE LOS CONTROLES
filtroCurso.addEventListener("change", filtrarEquipos);
filtroEquipo.addEventListener("change", filtrarEquipos);
buscador.addEventListener("input", filtrarEquipos);

// RESTABLECER LOS FILTROS
btnLimpiar.addEventListener("click", () => {

    filtroCurso.value = "todos";
    filtroEquipo.value = "todos";
    buscador.value = "";

    mostrarEquipos(equipos);
});

// MOSTRAR TODOS LOS EQUIPOS AL CARGAR LA PÁGINA
mostrarEquipos(equipos);

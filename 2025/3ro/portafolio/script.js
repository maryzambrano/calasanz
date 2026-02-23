function normalizar(nombre) {
  return nombre.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z]/g, "");
}

function generarOpcionesPersonaje() {
  const select = document.getElementById("filterPersonaje");
  select.innerHTML = '<option value="">Todos los personajes</option>';

  const personajesUnicos = [...new Set(proyectos.map(p => normalizar(p.personaje)).filter(Boolean))];
  personajesUnicos.sort().forEach(p => {
    const original = proyectos.find(proy => normalizar(proy.personaje) === p)?.personaje;
    const option = document.createElement("option");
    option.value = p;
    option.textContent = original;
    select.appendChild(option);
  });
}

function getGitHub(id_equipo, id_alumno = null) {
  const alumno = alumnos.find(a => a.id_alumno === id_alumno);
  if (alumno && alumno.github) return alumno.github;

  const equipoAlumnos = alumnos.filter(a => a.id_equipo === id_equipo);
  const urls = equipoAlumnos.map(a => a.github).filter(Boolean);
  return urls[0] || "#";
}

function renderCards() {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  const curso = document.getElementById("filterCurso").value;
  const tipo = document.getElementById("filterTipo").value;
  const personajeFiltro = document.getElementById("filterPersonaje").value;

  
// Mostrar u ocultar el filtro de personaje según el tipo
  const personajeSelect = document.getElementById("filterPersonaje");
  personajeSelect.style.display = (tipo === "proyecto") ? "inline-block" : "none";

  
 if (tipo === "ejercicios" || tipo === "") {
  ejercicios.forEach(ej => {
    let nombres = "";
    let cursoEjercicio = "";
    let github = "";

    if (ej.id_equipo) {
      const equipoAlumnos = alumnos.filter(a => a.id_equipo === ej.id_equipo);
      if (!equipoAlumnos.length) return;

      cursoEjercicio = equipoAlumnos[0].curso;
      if (curso && cursoEjercicio !== curso) return;

      nombres = equipoAlumnos.map(a => a.nombre).join(" & ");
      github = getGitHub(ej.id_equipo);
    } else if (ej.id_alumno) {
      const alumno = alumnos.find(a => a.id_alumno === ej.id_alumno);
      if (!alumno) return;

      cursoEjercicio = alumno.curso;
      if (curso && cursoEjercicio !== curso) return;

      nombres = alumno.nombre;
      github = getGitHub(null, alumno.id_alumno);
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${ej.img}" alt="Ejercicios">
      <div class="card-content">
        <h3>${nombres}</h3>
        <p><strong>Curso:</strong> ${cursoEjercicio}</p>
        ${ej.destacado ? '<div class="star">⭐</div>' : ""}
      </div>
      <div class="card-links">
        <a href="${ej.urlEjercicios}" target="_blank">🌐 Página</a>
        <a href="${github}" target="_blank">💻 GitHub</a>
      </div>
    `;
    container.appendChild(card);
  });
}

  if (tipo === "proyecto" || tipo === "") {
    proyectos.forEach(proy => {
      const equipoAlumnos = alumnos.filter(a => a.id_equipo === proy.id_equipo);
      if (curso && !equipoAlumnos.some(a => a.curso === curso)) return;
      if (personajeFiltro && normalizar(proy.personaje) !== personajeFiltro) return;

      const nombres = equipoAlumnos.map(a => a.nombre).join(" & ");
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${proy.img}" alt="${proy.personaje}">
        <div class="card-content">
          <h3>${nombres}</h3>
          <p><strong>Curso:</strong> ${equipoAlumnos[0].curso}</p>
          <p><strong>Personaje:</strong> ${proy.personaje}</p>
          ${proy.destacado ? '<div class="star">⭐</div>' : ""}
        </div>
        <div class="card-links">
          <a href="${proy.urlProyecto}" target="_blank">🌐 Página</a>
          <a href="${getGitHub(proy.id_equipo)}" target="_blank">💻 GitHub</a>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  generarOpcionesPersonaje(); // genera dinámicamente el filtro de personajes
  renderCards();              // muestra las cards iniciales
});

["filterCurso", "filterTipo", "filterPersonaje"].forEach(id =>
  document.getElementById(id).addEventListener("change", renderCards)
);
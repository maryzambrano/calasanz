function normalizar(nombre) {
  return nombre.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z]/g, "");
}

function normalizar(nombre) {
  return nombre.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/\s+/g, "")             // elimina espacios
    .replace(/[^a-zA-Z]/g, "");      // elimina signos
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

  /*const personajeSelect = document.getElementById("filterPersonaje");
  personajeSelect.style.display = (tipo === "proyecto" || tipo === "") ? "inline-block" : "none";
*/
// Mostrar u ocultar el filtro de personaje según el tipo
  const personajeSelect = document.getElementById("filterPersonaje");
  personajeSelect.style.display = (tipo === "proyecto") ? "inline-block" : "none";

  if (tipo === "ejercicios" || tipo === "") {
    ejercicios.forEach(ej => {
      const alumno = alumnos.find(a => a.id_alumno === ej.id_alumno);
      if (!alumno || (curso && alumno.curso !== curso)) return;

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${ej.img}" alt="Ejercicios">
        <div class="card-content">
          <h3>${alumno.nombre}</h3>
          <p><strong>Curso:</strong> ${alumno.curso}</p>
          ${ej.destacado ? '<div class="star">⭐</div>' : ""}
        </div>
        <div class="card-links">
          <a href="${ej.urlEjercicios}" target="_blank">🌐 Página</a>
          <a href="${getGitHub(alumno.id_equipo, alumno.id_alumno)}" target="_blank">💻 GitHub</a>
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

["filterCurso", "filterTipo", "filterPersonaje"].forEach(id =>
  document.getElementById(id).addEventListener("change", renderCards)
);

renderCards();
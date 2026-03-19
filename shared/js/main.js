// =====================================================
// INICIO DEL SITIO
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

  iniciarCalendario();
  iniciarPortafolios();
  iniciarCumpleanios();

});


// =====================================================
// CALENDARIO
// =====================================================

function iniciarCalendario() {

  const calendarContainer = document.getElementById("calendar-2026");
  if (!calendarContainer) return;

  const year = 2026;
  let currentMonth = new Date().getMonth();

  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  const diasSemana = ["L","M","M","J","V","S","D"];

  const monthTitle = document.getElementById("monthTitle");
  const eventoInfo = document.getElementById("eventoInfo");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  let eventos = {};

  fetch("../shared/data/calendario2026.json")
    .then(res => res.json())
    .then(data => {

      eventos = data;

      function renderMonth(month) {

        calendarContainer.innerHTML = "";
        monthTitle.textContent = `${meses[month]} ${year}`;
        eventoInfo.textContent = "";

        const grid = document.createElement("div");
        grid.classList.add("days-grid");

        diasSemana.forEach(d => {
          const dayName = document.createElement("div");
          dayName.classList.add("day-name");
          dayName.textContent = d;
          grid.appendChild(dayName);
        });

        const primerDia = new Date(year, month, 1).getDay();
        const offset = primerDia === 0 ? 6 : primerDia - 1;
        const diasEnMes = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < offset; i++) {
          grid.appendChild(document.createElement("div"));
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {

          const dayDiv = document.createElement("div");
          dayDiv.classList.add("day");
          dayDiv.textContent = dia;

          const fecha = `${year}-${String(month+1).padStart(2,"0")}-${String(dia).padStart(2,"0")}`;

          if (eventos[fecha]) {
            dayDiv.classList.add(eventos[fecha].tipo);
          }

          dayDiv.addEventListener("click", function () {
            eventoInfo.textContent = eventos[fecha] ? eventos[fecha].titulo : "";
          });

          grid.appendChild(dayDiv);
        }

        calendarContainer.appendChild(grid);
      }

      prevBtn?.addEventListener("click", () => {
        if (currentMonth > 0) {
          currentMonth--;
          renderMonth(currentMonth);
        }
      });

      nextBtn?.addEventListener("click", () => {
        if (currentMonth < 11) {
          currentMonth++;
          renderMonth(currentMonth);
        }
      });

      renderMonth(currentMonth);

    });

}


// =====================================================
// PORTAFOLIOS
// =====================================================

function iniciarPortafolios() {

  const botones = document.querySelectorAll(".btn-curso");
  const contenedor = document.getElementById("contenedorHoja");
  const grado = document.body.dataset.grado;

  if (!botones.length || !contenedor || !grado) return;

  fetch("../../shared/data/portafolios.json")
    .then(res => res.json())
    .then(data => {

      botones.forEach(boton => {

        boton.addEventListener("click", function () {

          const division = this.dataset.curso;
          const clave = grado + division;

          const url = data[clave];

          if (!url) return;

          contenedor.innerHTML = `
            <iframe
              src="${url}"
              width="100%"
              height="500"
              style="border:none;">
            </iframe>
          `;

          contenedor.scrollIntoView({ behavior: "smooth" });

        });

      });

    });

}


// =====================================================
// CUMPLEAÑOS
// =====================================================

function iniciarCumpleanios() {

  const gradoPagina = document.body.dataset.grado;
  if (!gradoPagina) return;

  fetch("../../shared/data/cumpleanios.json")
    .then(res => res.json())
    .then(data => {

      const hoy = new Date();

      const inicioSemana = new Date(hoy);
      inicioSemana.setDate(hoy.getDate() - hoy.getDay());

      const finSemana = new Date(inicioSemana);
      finSemana.setDate(inicioSemana.getDate() + 6);

      const cumpleSemana = data.filter(c => {

        if (c.grado !== gradoPagina) return false;

        const fechaCumple = new Date(hoy.getFullYear(), c.mes - 1, c.dia);

        return fechaCumple >= inicioSemana && fechaCumple <= finSemana;

      });

      if (cumpleSemana.length === 0) return;

      const nombres = cumpleSemana.map(c => c.nombre).join(", ");

      abrirModalCumple(nombres);

    });

}


// =====================================================
// MODAL CUMPLEAÑOS
// =====================================================

// =============================
// Abrir Modal
// =============================

function abrirModalCumple(nombres) {

  if (!nombres) return;

  const modal = document.getElementById("cumpleModal");
  const texto = document.getElementById("cumpleTexto");
  const cerrar = document.querySelector(".close");

  if (!modal || !texto) return;

  texto.innerHTML = `${nombres}`;

  modal.style.display = "flex";

  lanzarConfetti();
  lanzarGlobos();

  // cerrar botón
  cerrar.onclick = () => modal.style.display = "none";

  // cerrar clic fuera
  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  // cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });

}


// =============================
// Confetti
// =============================

function lanzarConfetti() {

  const container = document.getElementById("confetti-container");
  if (!container) return;

  container.innerHTML = "";

  const colores = ["#ff4d4d","#ffd24d","#4dd2ff","#7dff7d","#ff66ff"];

  for (let i = 0; i < 40; i++) {

    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.background = colores[Math.floor(Math.random()*colores.length)];
    confetti.style.animationDuration = (2 + Math.random()*2) + "s";

    container.appendChild(confetti);
  }

}


// =============================
// Globos
// =============================

function lanzarGlobos() {

  const container = document.getElementById("balloons-container");
  if (!container) return;

  container.innerHTML = "";

  const colores = ["#ff6b6b","#6bc5ff","#ffd93d","#8aff8a","#ff9bf2"];

  for (let i = 0; i < 6; i++) {

    const balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = (10 + Math.random()*80) + "%";
    balloon.style.background = colores[Math.floor(Math.random()*colores.length)];
    balloon.style.animationDuration = (5 + Math.random()*3) + "s";

    container.appendChild(balloon);
  }

}



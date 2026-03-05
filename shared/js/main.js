document.addEventListener("DOMContentLoaded", function () {

  // =====================================================
  // CALENDARIO 2026
  // =====================================================

  const year = 2026;
  let currentMonth = new Date().getMonth();

  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  const diasSemana = ["L","M","M","J","V","S","D"];

  const eventos = {

    "2026-02-16": { tipo: "feriado", titulo: "Carnaval" },
    "2026-02-17": { tipo: "feriado", titulo: "Carnaval" },
    "2026-02-25": { tipo: "institucional", titulo: "Inicio del Ciclo Lectivo 2026" },

    "2026-03-02": { tipo: "bimestre", titulo: "Inicio 1° Bimestre" },
    "2026-03-23": { tipo: "puente", titulo: "Puente Turístico" },
    "2026-03-24": { tipo: "feriado", titulo: "Día Nacional de la Memoria por la Verdad y la Justicia" },
    "2026-03-30": { tipo: "religioso", titulo: "Domingo de Ramos" },

    "2026-04-02": { tipo: "feriado", titulo: "Día del Veterano y de los Caídos en la Guerra de Malvinas" },
    "2026-04-03": { tipo: "religioso", titulo: "Viernes Santo" },
    "2026-04-04": { tipo: "religioso", titulo: "Sábado de Gloria" },
    "2026-04-05": { tipo: "religioso", titulo: "Domingo de Resurrección" },

    "2026-05-01": { tipo: "feriado", titulo: "Día del Trabajador" },
    "2026-05-07": { tipo: "bimestre", titulo: "Fin 1° Bimestre" },
    "2026-05-08": { tipo: "bimestre", titulo: "Inicio 2° Bimestre" },
    "2026-05-25": { tipo: "feriado", titulo: "Día de la Revolución de Mayo" },

    "2026-06-15": { tipo: "feriado", titulo: "Paso a la Inmortalidad del General Martín Güemes" },
    "2026-06-20": { tipo: "feriado", titulo: "Paso a la Inmortalidad del General Manuel Belgrano" },

    "2026-07-09": { tipo: "feriado", titulo: "Día de la Independencia" },
    "2026-07-10": { tipo: "puente", titulo: "Puente Turístico No Laborable" },
    "2026-07-17": { tipo: "bimestre", titulo: "Fin 2° Bimestre" },
    "2026-07-20": { tipo: "receso", titulo: "Inicio Receso Invernal" },
    "2026-07-31": { tipo: "receso", titulo: "Fin Receso Invernal" },

    "2026-08-03": { tipo: "bimestre", titulo: "Inicio 3° Bimestre" },
    "2026-08-17": { tipo: "feriado", titulo: "Paso a la Inmortalidad del Gral. José de San Martín" },

    "2026-10-02": { tipo: "bimestre", titulo: "Fin 3° Bimestre" },
    "2026-10-05": { tipo: "bimestre", titulo: "Inicio 4° Bimestre" },
    "2026-10-12": { tipo: "feriado", titulo: "Día del Respeto a la Diversidad Cultural" },

    "2026-11-23": { tipo: "feriado", titulo: "Día de la Soberanía Nacional" },

    "2026-12-04": { tipo: "bimestre", titulo: "Fin 4° Bimestre" },
    "2026-12-07": { tipo: "puente", titulo: "Puente Turístico No Laborable" },
    "2026-12-08": { tipo: "feriado", titulo: "Día de la Inmaculada Concepción de María" },
    "2026-12-18": { tipo: "institucional", titulo: "Fin del Ciclo Lectivo 2026" },
    "2026-12-25": { tipo: "feriado", titulo: "Navidad" }

  };

  const calendarContainer = document.getElementById("calendar-2026");
  const monthTitle = document.getElementById("monthTitle");
  const eventoInfo = document.getElementById("eventoInfo");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  if (calendarContainer && monthTitle && eventoInfo) {

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

    if (prevBtn && nextBtn) {

      prevBtn.addEventListener("click", function() {
        if (currentMonth > 0) {
          currentMonth--;
          renderMonth(currentMonth);
        }
      });

      nextBtn.addEventListener("click", function() {
        if (currentMonth < 11) {
          currentMonth++;
          renderMonth(currentMonth);
        }
      });

    }

    renderMonth(currentMonth);
  }

  // =====================================================
  // PORTAFOLIO SECUNDARIA
  // =====================================================

  const hojas = {
    
    "A": "https://docs.google.com/spreadsheets/d/1LDYthxXcOLVPkgsQUH5ziQ4VZ22hWP51-cEL7UUDdVs/preview",
    "B": "https://docs.google.com/spreadsheets/d/15yeKj-9tAvjDzSBxdkZbGUnykxEcKD_a-hlYMYKK9DU/preview",
    "C": "https://docs.google.com/spreadsheets/d/1JYoNAQI2z7z4V10qzGM7kHNN9i6Xz0cgKxKasBm_30E/preview"
    
    // Agregá B y C cuando tengas los enlaces
  };

  const botones = document.querySelectorAll(".btn-curso");
  const contenedorHoja = document.getElementById("contenedorHoja");

  if (botones.length && contenedorHoja) {

    botones.forEach(boton => {
      boton.addEventListener("click", function () {

        const curso = this.dataset.curso;
        if (!hojas[curso]) return;

        contenedorHoja.innerHTML = `
          <div class="card shadow-sm">
            <div class="card-body">
              <iframe 
                src="${hojas[curso]}"
                width="100%" 
                height="500" 
                style="border:none;">
              </iframe>
            </div>
          </div>
        `;

        contenedorHoja.scrollIntoView({ behavior: "smooth" });

      });
    });

  }

});

// =============================
// Cumpleañeros de la semana
// =============================

document.addEventListener("DOMContentLoaded", function () {

  const gradoPagina = document.body.dataset.grado;

  // Si la página no tiene grado (ej: index) no hace nada
  if (!gradoPagina) return;

  // =============================
  // Cargar cumpleaños
  // =============================

  fetch("../../shared/data/cumpleanios.json")
    .then(response => response.json())
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

      // Si no hay cumpleaños NO mostrar modal
      if (cumpleSemana.length === 0) return;

      const nombres = cumpleSemana.map(c => c.nombre).join(", ");

      abrirModalCumple(nombres);

    })

    .catch(error => {
      console.error("Error cargando cumpleaños:", error);
    });

});


// =============================
// Abrir Modal
// =============================

function abrirModalCumple(nombres) {

  if (!nombres) return;

  const modal = document.getElementById("cumpleModal");
  const texto = document.getElementById("cumpleTexto");
  const cerrar = document.querySelector(".close");

  if (!modal || !texto) return;

  texto.innerHTML = `🎉 ${nombres}`;

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
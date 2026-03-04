document.addEventListener("DOMContentLoaded", function () {

  const year = 2026;
  let currentMonth = new Date().getFullYear() === 2026 
      ? new Date().getMonth() 
      : 0;

  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  const diasSemana = ["L","M","M","J","V","S","D"];

  const eventos = {

  // FEBRERO
  "2026-02-16": {
    tipo: "feriado",
    titulo: "Carnaval",
    descripcion: "Feriado Nacional"
  },
  "2026-02-17": {
    tipo: "feriado",
    titulo: "Carnaval",
    descripcion: "Feriado Nacional"
  },
  "2026-02-25": {
    tipo: "institucional",
    titulo: "Inicio del Ciclo Lectivo 2026"
  },

  // MARZO
  "2026-03-02": {
    tipo: "bimestre",
    titulo: "Inicio 1° Bimestre"
  },
  "2026-03-23": {
    tipo: "puente",
    titulo: "Puente Turístico"
  },
  "2026-03-24": {
    tipo: "feriado",
    titulo: "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  "2026-03-30": {
    tipo: "religioso",
    titulo: "Domingo de Ramos"
  },

  // ABRIL
  "2026-04-02": {
    tipo: "feriado",
    titulo: "Día del Veterano y de los Caídos en la Guerra de Malvinas"
  },
  "2026-04-03": {
    tipo: "religioso",
    titulo: "Viernes Santo"
  },
  "2026-04-04": {
    tipo: "religioso",
    titulo: "Sábado de Gloria"
  },
  "2026-04-05": {
    tipo: "religioso",
    titulo: "Domingo de Resurrección"
  },

  // MAYO
  "2026-05-01": {
    tipo: "feriado",
    titulo: "Día del Trabajador"
  },
  "2026-05-07": {
    tipo: "bimestre",
    titulo: "Fin 1° Bimestre"
  },
  "2026-05-08": {
    tipo: "bimestre",
    titulo: "Inicio 2° Bimestre"
  },
  "2026-05-25": {
    tipo: "feriado",
    titulo: "Día de la Revolución de Mayo"
  },

  // JUNIO
  "2026-06-15": {
    tipo: "feriado",
    titulo: "Paso a la Inmortalidad del General Martín Güemes"
  },
  "2026-06-20": {
    tipo: "feriado",
    titulo: "Paso a la Inmortalidad del General Manuel Belgrano"
  },

  // JULIO
  "2026-07-09": {
    tipo: "feriado",
    titulo: "Día de la Independencia"
  },
  "2026-07-10": {
    tipo: "puente",
    titulo: "Puente Turístico No Laborable"
  },
  "2026-07-17": {
    tipo: "bimestre",
    titulo: "Fin 2° Bimestre"
  },
  "2026-07-20": {
    tipo: "receso",
    titulo: "Inicio Receso Invernal"
  },
  "2026-07-21": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-22": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-23": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-24": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-27": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-28": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-29": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-30": { tipo: "receso", titulo: "Receso Invernal" },
  "2026-07-31": { tipo: "receso", titulo: "Fin Receso Invernal" },

  // AGOSTO
  "2026-08-03": {
    tipo: "bimestre",
    titulo: "Inicio 3° Bimestre"
  },
  "2026-08-17": {
    tipo: "feriado",
    titulo: "Paso a la Inmortalidad del Gral. José de San Martín"
  },

  // OCTUBRE
  "2026-10-02": {
    tipo: "bimestre",
    titulo: "Fin 3° Bimestre"
  },
  "2026-10-05": {
    tipo: "bimestre",
    titulo: "Inicio 4° Bimestre"
  },
  "2026-10-12": {
    tipo: "feriado",
    titulo: "Día del Respeto a la Diversidad Cultural"
  },

  // NOVIEMBRE
  "2026-11-23": {
    tipo: "feriado",
    titulo: "Día de la Soberanía Nacional"
  },

  // DICIEMBRE
  "2026-12-04": {
    tipo: "bimestre",
    titulo: "Fin 4° Bimestre"
  },
  "2026-12-07": {
    tipo: "puente",
    titulo: "Puente Turístico No Laborable"
  },
  "2026-12-08": {
    tipo: "feriado",
    titulo: "Día de la Inmaculada Concepción de María"
  },
  "2026-12-18": {
    tipo: "institucional",
    titulo: "Fin del Ciclo Lectivo 2026"
  },
  "2026-12-25": {
    tipo: "feriado",
    titulo: "Navidad"
  }

};

  const calendarContainer = document.getElementById("calendar-2026");
  const monthTitle = document.getElementById("monthTitle");

  function renderMonth(month) {

    calendarContainer.innerHTML = "";
    monthTitle.textContent = `${meses[month]} ${year}`;

    const grid = document.createElement("div");
    grid.classList.add("days-grid");

    // Días de la semana
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

        dayDiv.setAttribute("data-bs-toggle", "popover");
        dayDiv.setAttribute("data-bs-trigger", "click");
        dayDiv.setAttribute("data-bs-placement", "top");
        dayDiv.setAttribute("data-bs-content", eventos[fecha].titulo);

        dayDiv.style.cursor = "pointer";
      }

      grid.appendChild(dayDiv);
    }

    calendarContainer.appendChild(grid);

    // 🔥 Inicializar popovers SIEMPRE después de renderizar
    

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(el => {

  const popover = new bootstrap.Popover(el);

  el.addEventListener("click", function (e) {

    // Evita que el click se propague al documento
    e.stopPropagation();

    // Cerrar los demás popovers
    popoverTriggerList.forEach(otherEl => {
      if (otherEl !== el) {
        const otherPopover = bootstrap.Popover.getInstance(otherEl);
        if (otherPopover) {
          otherPopover.hide();
        }
      }
    });

  });

});

// 👉 Cerrar popover al hacer clic fuera
document.addEventListener("click", function (e) {

  popoverTriggerList.forEach(el => {

    const popover = bootstrap.Popover.getInstance(el);

    if (popover) {
      popover.hide();
    }

  });

});








  }

  document.getElementById("prevMonth").addEventListener("click", function() {
    if (currentMonth > 0) {
      currentMonth--;
      renderMonth(currentMonth);
    }
  });

  document.getElementById("nextMonth").addEventListener("click", function() {
    if (currentMonth < 11) {
      currentMonth++;
      renderMonth(currentMonth);
    }
  });

  renderMonth(currentMonth);

});
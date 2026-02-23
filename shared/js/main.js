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
    "2026-02-16": "feriado",
    "2026-02-17": "feriado",
    "2026-02-25": "institucional",
    "2026-03-23": "puente",
    "2026-03-24": "feriado",
    "2026-04-02": "feriado",
    "2026-04-03": "feriado",
    "2026-04-04": "feriado",
    "2026-04-05": "feriado",
    "2026-05-01": "feriado",
    "2026-05-25": "feriado",
    "2026-06-15": "feriado",
    "2026-06-20": "feriado",
    "2026-07-09": "feriado",
    "2026-07-10": "puente",
    "2026-07-20": "receso",
    "2026-07-21": "receso",
    "2026-07-22": "receso",
    "2026-07-23": "receso",
    "2026-07-24": "receso",
    "2026-07-27": "receso",
    "2026-07-28": "receso",
    "2026-07-29": "receso",
    "2026-07-30": "receso",
    "2026-07-31": "receso",
    "2026-08-17": "feriado",
    "2026-10-12": "feriado",
    "2026-11-23": "feriado",
    "2026-12-07": "puente",
    "2026-12-08": "feriado",
    "2026-12-18": "institucional",
    "2026-12-25": "feriado"
  };

  const calendarContainer = document.getElementById("calendar-2026");
  const monthTitle = document.getElementById("monthTitle");

  function renderMonth(month) {

    calendarContainer.innerHTML = "";
    monthTitle.textContent = `${meses[month]} ${year}`;

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
        dayDiv.classList.add(eventos[fecha]);
      }

      grid.appendChild(dayDiv);
    }

    calendarContainer.appendChild(grid);
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
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = 2025; // Fijamos el año en 2025
const events = [
    //Efemérides y Solemnidades
    { date: "2025-01-01", type: "efemerides", description: "Año nuevo" },
    { date: "2025-03-03", type: "efemerides", description: "Carnaval" },
    { date: "2025-03-04", type: "efemerides", description: "Carnaval" },
    { date: "2025-03-05", type: "efemerides", description: "Miércoles de Cenizas" },
    { date: "2025-03-24", type: "efemerides", description: "Día Nacional de la Memoria por la Verdad y la Justicia" },
    { date: "2025-04-02", type: "efemerides", description: "Día del Veterano y de los Caídos en la Guerra de Malvinas" },
    { date: "2025-04-13", type: "efemerides", description: "Domingo de Ramos" },
    { date: "2025-04-17", type: "efemerides", description: "Jueves Santo" },
    { date: "2025-04-18", type: "efemerides", description: "Viernes Santo" },
    { date: "2025-04-19", type: "efemerides", description: "Sábado de Gloria" },
    { date: "2025-04-20", type: "efemerides", description: "Resurrección del Señor" },
    { date: "2025-05-01", type: "efemerides", description: "Día del Trabajador" },
    { date: "2025-05-08", type: "efemerides", description: "Ntra. Sra. De Luján" },
    { date: "2025-05-08", type: "efemerides", description: "Virgen de las Escuelas Pías" },
    { date: "2025-05-25", type: "efemerides", description: "Día de la Revolución de Mayo" },
    { date: "2025-06-08", type: "efemerides", description: "Pentecostés" },
    { date: "2025-06-16", type: "efemerides", description: "Paso a la Inmortalidad del General Martín Güemes" },
    { date: "2025-06-20", type: "efemerides", description: "Paso a la Inmortalidad del General Manuel Belgrano" },
    { date: "2025-07-09", type: "efemerides", description: "Día de la Independencia" },
    { date: "2025-08-17", type: "efemerides", description: "Paso a la Inmortalidad del Gral. José de San Martín" },
    { date: "2025-08-25", type: "efemerides", description: "San José de Calasanz" },
    { date: "2025-10-12", type: "efemerides", description: "Día del Respeto a la Diversidad Cultural" },
    { date: "2025-11-24", type: "efemerides", description: "Día de la Soberanía Nacional" },
    { date: "2025-12-08", type: "efemerides", description: "Día de la Inmaculada Concepción de María" },
    { date: "2025-12-25", type: "efemerides", description: "Navidad" },
    //Otros eventos
    { date: "2025-02-10", type: "otros", description: "Inicio Ciclo escolar 2025" },
    { date: "2025-02-24", type: "otros", description: "Inicio de clases primaria" },
    { date: "2025-03-05", type: "otros", description: "Inicio de clases secundaria" },
    { date: "2025-05-02", type: "otros", description: "Turístico" },
    { date: "2025-07-21", type: "otros", description: "Receso invernal" },
    { date: "2025-07-22", type: "otros", description: "Receso invernal" },
    { date: "2025-07-23", type: "otros", description: "Receso invernal" },
    { date: "2025-07-24", type: "otros", description: "Receso invernal" },
    { date: "2025-07-25", type: "otros", description: "Receso invernal" },
    { date: "2025-07-28", type: "otros", description: "Receso invernal" },
    { date: "2025-07-29", type: "otros", description: "Receso invernal" },
    { date: "2025-07-30", type: "otros", description: "Receso invernal" },
    { date: "2025-07-31", type: "otros", description: "Receso invernal" },
    { date: "2025-08-01", type: "otros", description: "Receso invernal" },
    { date: "2025-08-15", type: "otros", description: "Turístico" },
    { date: "2025-11-21", type: "otros", description: "Turístico" },
    { date: "2025-12-19", type: "otros", description: "Finaliza el Ciclo lectivo 2025" },
    //Evaluaciones
    { date: "2025-01-25", type: "evaluaciones", description: "Quiz (Unidad I)" },
    { date: "2025-05-23", type: "evaluaciones", description: "Quiz (Unidad II)" }
];



const currentMonthYear = document.getElementById("currentMonthYear");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const filterType = document.getElementById("filterType");
const eventDescription = document.getElementById("eventDescription");
let filteredType = "all";

function renderCalendar(month, year) {
    calendarGrid.innerHTML = "";
    eventDescription.style.display = "none"; // Ocultar descripción al cambiar de mes

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    currentMonthYear.textContent = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-date", "inactive");
        calendarGrid.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement("div");
        day.classList.add("calendar-date");
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
        const event = events.find(event => event.date === dateString);
        
        day.textContent = i;
        
        if (event && (filteredType === "all" || event.type === filteredType)) {
            day.classList.add(`event-${event.type}`);
            day.title = event.description;

            // Evento para móviles
            day.addEventListener("click", () => {
                eventDescription.textContent = `📅 ${event.description}`;
                eventDescription.style.display = "block";
            });
        }

        calendarGrid.appendChild(day);
    }

    prevMonth.disabled = (currentMonth === 0);
    nextMonth.disabled = (currentMonth === 11);
    prevMonth.style.backgroundColor = prevMonth.disabled ? "#d3d3d3" : "";
    nextMonth.style.backgroundColor = nextMonth.disabled ? "#d3d3d3" : "";
}

prevMonth.addEventListener("click", () => {
    if (currentMonth > 0) {
        currentMonth--;
        renderCalendar(currentMonth, currentYear);
    }
});

nextMonth.addEventListener("click", () => {
    if (currentMonth < 11) {
        currentMonth++;
        renderCalendar(currentMonth, currentYear);
    }
});

filterType.addEventListener("change", (e) => {
    filteredType = e.target.value;
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

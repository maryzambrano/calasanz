const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const events = [
    { date: "2025-01-22", type: "efemerides", description: "Día de la Soberanía Nacional" },
    { date: "2025-01-25", type: "evaluaciones", description: "Examen de Matemáticas" },
    { date: "2025-01-28", type: "otros", description: "Reunión de padres" },
];
const currentMonthYear = document.getElementById("currentMonthYear");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const filterType = document.getElementById("filterType");
let filteredType = "all";

function renderCalendar(month, year) {
    calendarGrid.innerHTML = "";
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
        if (event && (filteredType === "all" || event.type === filteredType)) {
            day.classList.add(`event-${event.type}`);
            day.title = event.description;
        }
        day.textContent = i;
        calendarGrid.appendChild(day);
    }
}

prevMonth.addEventListener("click", () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear--;
    renderCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener("click", () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++;
    renderCalendar(currentMonth, currentYear);
});

filterType.addEventListener("change", (e) => {
    filteredType = e.target.value;
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

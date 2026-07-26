# Developer Guide - Code Architecture & Logic

This document provides a technical walkthrough of the codebase architecture, design patterns, rendering algorithms, and browser integrations used in **Mundane Routine - Smart To-Do List**.

---

## 1. High-Level System Design

The application follows an Event-Driven Architecture operating entirely within the client-side JavaScript runtime environment (`script.js`).

```
 +------------------+      DOM Events      +-------------------+
 |  HTML Views      | -------------------> |  Event Listeners  |
 |  (Form/Calendar) |                      |  (script.js)      |
 +------------------+                      +-------------------+
          ^                                          |
          | Render DOM Updates                       v
 +------------------+                      +-------------------+
 | Dynamic Canvas / | <------------------- | Data Controller & |
 | DOM Nodes        |                      | Storage Engine    |
 +------------------+                      +-------------------+
                                                     |
                                                     v
                                           +-------------------+
                                           | localStorage      |
                                           +-------------------+
```

---

## 2. Component Logic Breakdown

### A. HTML Structure
- **`index.html`**: Master task portal. Contains task entry form inputs (`#taskTitle`, `#taskDate`, `#taskTime`, `#taskPriority`), quick navigation action buttons, and modal placeholders for Chart.js and reminders.
- **`login.html`**: Form wrapper for user authentication with fields `#username` and `#password`.
- **`signup.html`**: Registration wrapper with confirmation field validation.
- **`view-tasks.html`**: Interactive calendar canvas containing month control headers (`#prevMonth`, `#nextMonth`), month title header (`#currentMonthYear`), and 7-column day grid container (`#calendarGrid`).

### B. Styling Architecture (CSS3)
- Modular styling layout split across `styles.css`, `login.css`, and `signup.css`.
- Leverages flexbox for form alignment and CSS grid (`grid-template-columns: repeat(7, 1fr)`) for calendar rendering.
- UI Palette: Cool mint gradients (`linear-gradient(135deg, #70e1f5, #ffd194)`), emerald green action buttons (`#1b7e42`), and custom modal cards.

### C. JavaScript Controller (`script.js`)
`script.js` manages state and DOM manipulation via pure Vanilla JavaScript:

1. **State Management**:
   ```javascript
   let activeUser = localStorage.getItem("currentUser");
   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
   let selectedDate = new Date();
   ```

2. **Calendar Rendering Algorithm**:
   ```javascript
   function renderCalendar(year, month) {
       const firstDay = new Date(year, month, 1).getDay();
       const totalDays = new Date(year, month + 1, 0).getDate();
       const grid = document.getElementById("calendarGrid");
       grid.innerHTML = "";

       // Render empty padding slots for month alignment
       for (let i = 0; i < firstDay; i++) {
           grid.appendChild(createEmptyCell());
       }

       // Render active days
       for (let day = 1; day <= totalDays; day++) {
           const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
           const cell = createDayCell(day, dateStr);
           grid.appendChild(cell);
       }
   }
   ```

3. **Chart.js Bar Chart Integration**:
   ```javascript
   function renderGraph() {
       const userTasks = tasks.filter(t => t.userId === activeUser);
       const completed = userTasks.filter(t => t.completed).length;
       const uncompleted = userTasks.length - completed;

       const ctx = document.getElementById("taskChart").getContext("2d");
       new Chart(ctx, {
           type: "bar",
           data: {
               labels: ["Completed Tasks", "Uncompleted Tasks"],
               datasets: [{
                   label: "Tasks",
                   data: [completed, uncompleted],
                   backgroundColor: ["#80deea", "#ff9ebb"]
               }]
           },
           options: { responsive: true, scales: { y: { beginAtZero: true } } }
       });
   }
   ```

---

## 3. Data Integrity & Validation

- **Duplicate Prevention**:
  ```javascript
  const isDuplicate = tasks.some(t => 
      t.userId === activeUser &&
      t.title.toLowerCase() === newTitle.toLowerCase() &&
      t.date === newDate &&
      t.time === newTime
  );
  if (isDuplicate) {
      alert("Task already scheduled for this date and time!");
      return;
  }
  ```

---

## 4. Key Performance Optimizations
- **DOM Fragmentation**: Dynamic calendar cells created off-screen or batch-appended to minimize reflows and repaints.
- **LocalStorage Sync**: Storage serialization occurs only on mutating actions (`addTask`, `toggleComplete`, `deleteTask`).

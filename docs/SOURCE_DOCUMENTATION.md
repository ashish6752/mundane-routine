# Detailed Source File Documentation

This document provides a component-by-component breakdown of every source file in the **Mundane Routine** codebase.

---

## 1. `index.html`

- **Purpose**: Serves as the primary task management dashboard and application hub.
- **Responsibilities**:
  - Provides form UI for creating new tasks (Title, Date, Time, Priority).
  - Renders action buttons for navigating to the calendar (`view-tasks.html`), toggling analytics graph modals, and displaying remainders.
  - Hosts modal overlay containers for Chart.js bar graphs and task alerts.
- **Functions**: Declarative HTML structure; delegates interactive behavior to `script.js`.
- **Inputs**: User input via text, date (`<input type="date">`), time (`<input type="time">`), and select dropdown (`<select id="taskPriority">`).
- **Outputs**: Form submit events caught by `script.js`.
- **Dependencies**: `styles.css`, `script.js`, Chart.js CDN script (`cdn.jsdelivr.net/npm/chart.js`).

---

## 2. `login.html`

- **Purpose**: Provides user authentication interface for existing accounts.
- **Responsibilities**:
  - Displays user login card layout.
  - Captures credentials (`#username`, `#password`).
  - Provides link to registration page (`signup.html`).
- **Functions**: Form submission triggers login validation function in `script.js`.
- **Inputs**: User credentials entered into input fields.
- **Outputs**: Redirects authenticated user to `index.html` upon success.
- **Dependencies**: `login.css`, `script.js`.

---

## 3. `signup.html`

- **Purpose**: Provides user registration portal for new accounts.
- **Responsibilities**:
  - Captures new user details (Username, Password, Confirm Password).
  - Enforces duplicate username checking before account persistence.
  - Redirects user to `login.html` after successful signup.
- **Functions**: Form submit event triggers `handleSignup()` in `script.js`.
- **Inputs**: Text and password inputs.
- **Outputs**: Saved user record added to `localStorage` key `"users"`.
- **Dependencies**: `signup.css`, `script.js`.

---

## 4. `view-tasks.html`

- **Purpose**: Displays the interactive task calendar and status management view.
- **Responsibilities**:
  - Houses the 7-column calendar day grid container (`#calendarGrid`).
  - Displays current month and year title (`#currentMonthYear`).
  - Provides `Previous Month` and `Next Month` navigation controls.
  - Displays scheduled tasks inside date cells with "Mark as Completed" actions.
- **Functions**: Target elements bound to calendar rendering methods in `script.js`.
- **Inputs**: Button clicks (`#prevMonth`, `#nextMonth`, `#markCompleted`).
- **Outputs**: Rendered calendar grid DOM nodes and updated task statuses in `localStorage`.
- **Dependencies**: `styles.css`, `script.js`.

---

## 5. `styles.css`

- **Purpose**: Global stylesheet for `index.html` and `view-tasks.html`.
- **Responsibilities**:
  - Defines root typography, colors, padding, and responsive breakpoints.
  - Styles form input fields, priority selection dropdowns, and emerald action buttons (`#1b7e42`).
  - Formats calendar grid layout (`grid-template-columns: repeat(7, 1fr)`), header days, and cell borders.
  - Formats modal overlays for graphs and reminders.
- **Inputs**: Standard CSS rules targeting DOM class and ID selectors.
- **Outputs**: Visual styling rendered by browser layout engine.
- **Dependencies**: Browser CSS3 parser.

---

## 6. `login.css`

- **Purpose**: Dedicated stylesheet for `login.html`.
- **Responsibilities**:
  - Styles centered floating card layout over soft gradient background (`linear-gradient(...)`).
  - Formats login headers, label typography, form inputs, and primary action button.
- **Inputs**: CSS selectors targeting `.login-card`, `.form-group`, `.btn-login`.
- **Outputs**: Styled login UI layout.
- **Dependencies**: None.

---

## 7. `signup.css`

- **Purpose**: Dedicated stylesheet for `signup.html`.
- **Responsibilities**:
  - Styles centered signup card layout, mirroring visual consistency with `login.css`.
  - Formats validation alert boxes, input focus borders, and submission buttons.
- **Inputs**: CSS selectors targeting `.signup-card`, `.form-input`, `.btn-signup`.
- **Outputs**: Styled signup UI layout.
- **Dependencies**: None.

---

## 8. `script.js`

- **Purpose**: Core application engine containing all client-side logic, event handlers, storage bridges, and rendering procedures.
- **Responsibilities**:
  - **Auth Controller**: Validates login credentials and saves user registration records.
  - **Task Manager**: Reads inputs, enforces duplicate check algorithm, and writes tasks to LocalStorage.
  - **Calendar Engine**: Calculates day boundaries, builds dynamic monthly calendar grid DOM elements, and renders task cards inside date cells.
  - **Completion Handler**: Updates task `completed` status flag and updates task card styling.
  - **Analytics Engine**: Aggregates completion totals and renders dynamic Chart.js bar graphs.
- **Key Functions**:
  - `addTask(event)`: Handles new task creation form submission.
  - `isDuplicateTask(title, date, time)`: Checks if identical task exists.
  - `renderCalendar(year, month)`: Constructs and injects month grid into `view-tasks.html`.
  - `toggleTaskStatus(taskId)`: Toggles completion state and updates storage.
  - `showGraphModal()`: Initializes and displays Chart.js bar chart.
- **Inputs**: User click/submit events, form values, LocalStorage JSON strings.
- **Outputs**: Mutated LocalStorage data, dynamic DOM mutations, native alert popups, Chart canvas renderings.
- **Dependencies**: Browser LocalStorage API, DOM API, Chart.js global window instance (`Chart`).

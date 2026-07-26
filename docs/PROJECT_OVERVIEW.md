# Project Overview - Mundane Routine

## 1. Problem Statement
In daily life, individuals frequently forget routine tasks or struggle to organize schedules efficiently due to complex, over-engineered productivity tools requiring account verification, persistent internet connections, and backend server setups. Existing simple task apps lack visual scheduling and completion analytics, while heavy project management tools introduce steep learning curves.

## 2. Existing System vs. Proposed System

### Existing Systems
- **Paper/Sticky Notes**: Easy to lose, lack time reminders, no automated progress tracking.
- **Complex Cloud SaaS Apps**: Require internet connection, user accounts, cloud syncing, paid subscriptions, and privacy trade-offs.
- **Basic To-Do Apps**: Flat lists without calendar alignment or visual analytics.

### Proposed System (Mundane Routine)
- **Pure Client-Side Execution**: Zero server overhead, 100% privacy, instant response times.
- **Visual Calendar Integration**: Maps daily tasks directly onto a clean monthly calendar grid.
- **Data Analytics**: Live Chart.js visualization of task performance (Completed vs Uncompleted).
- **Zero Configuration**: Runs in any modern web browser out of the box using `window.localStorage`.

## 3. Key Advantages
1. **Zero Latency**: All operations execute instantly in the browser memory and LocalStorage.
2. **Privacy First**: Data remains strictly within the user's browser storage.
3. **Intuitive Visual UI**: Clean month-by-month calendar view with priority indicators.
4. **Duplicate Safeguards**: Automatic algorithm preventing duplicate scheduling.
5. **Visual Progress Tracking**: Real-time chart visualization for productivity feedback.

## 4. System Architecture & Modules

```
+-------------------------------------------------------------------+
|                        PRESENTATION LAYER                         |
|  index.html        login.html        signup.html   view-tasks.html |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                           LOGIC LAYER                             |
|                           script.js                               |
|  - Auth Controller     - Calendar Render     - Chart Engine       |
|  - Task Controller     - Validation System   - Storage Bridge     |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                        PERSISTENCE LAYER                          |
|                       window.localStorage                         |
|   Key: "users"    |    Key: "currentUser"   |    Key: "tasks"     |
+-------------------------------------------------------------------+
```

### Module Breakdown
1. **Authentication Module (`login.html`, `signup.html`)**: Handles client-side user registration, login verification, and active session tracking.
2. **Task Creation Module (`index.html`)**: Collects task details (title, date, time, priority) with duplicate check validation.
3. **Calendar Engine (`view-tasks.html`, `script.js`)**: Dynamically constructs 7-column calendar grids for any year/month, plotting scheduled tasks into specific date cells.
4. **Analytics Module (`script.js`, Chart.js)**: Aggregates completion status counts and renders bar graph metrics.
5. **Storage Manager (`script.js`)**: Encapsulates LocalStorage JSON parsing, writing, updating, and querying.

## 5. Working Flow Algorithm

### Task Creation Algorithm
1. Read input fields: `title`, `date`, `time`, `priority`.
2. Validate non-empty strings.
3. Fetch existing tasks array from `localStorage.getItem("tasks")`.
4. Filter tasks belonging to current logged-in user.
5. Search for duplicate entry where `task.date === date` AND `task.time === time` AND `task.title === title`.
6. If duplicate found: Display alert `"Task already scheduled for this time!"` and abort.
7. Else: Construct task object `{ id, userId, title, date, time, priority, completed: false }`.
8. Append task object to tasks array and save to `localStorage.setItem("tasks", JSON.stringify(tasks))`.
9. Trigger success popup notification.

### Calendar Layout Algorithm
1. Get target year and month (default: current system date).
2. Calculate total days in target month (`new Date(year, month + 1, 0).getDate()`).
3. Determine starting day of week for day 1 (`new Date(year, month, 1).getDay()`).
4. Generate empty leading cells for days before the 1st of the month.
5. Loop through days 1 to `totalDays`:
   - Create cell element.
   - Filter user tasks matching date string `YYYY-MM-DD`.
   - Render task cards inside cell with status toggles.
6. Append cell elements to calendar DOM grid container.

## 6. Future Scope
- Export/Import task data to JSON or CSV files.
- Desktop browser push notifications via Web Notifications API.
- Search and tag filtering across all historical tasks.
- Customizable visual themes (Dark Mode / High Contrast).

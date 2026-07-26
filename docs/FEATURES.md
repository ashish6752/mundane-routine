# Deep Dive Feature Documentation

This document provides a feature-by-feature breakdown of **Mundane Routine - Smart To-Do List**.

---

## 1. User Signup Page
- **Description**: Allows new users to create a unique user account stored in browser LocalStorage.
- **Form Fields**: Username, Password, Confirm Password.
- **Validation**: Checks for existing usernames to prevent duplicate account registration.
- **Target File**: `signup.html`, `signup.css`, `script.js`.

---

## 2. User Login Page
- **Description**: Authenticates existing users and establishes an active browser session.
- **Features**: Username and password verification against `users` array in LocalStorage.
- **Session Handling**: Sets `currentUser` key in LocalStorage upon successful credential match.
- **Target File**: `login.html`, `login.css`, `script.js`.

---

## 3. Add New Tasks
- **Description**: Central form interface to record new routine items.
- **Form Fields**: Task Title (text input).
- **Behavior**: Sanitizes input string and binds task to the authenticated user ID.
- **Target File**: `index.html`, `styles.css`, `script.js`.

---

## 4. Priority Selection
- **Description**: Categorizes tasks by urgency level.
- **Options**: `High`, `Medium`, `Low`.
- **Visual Coding**: Color-coded badges in task list and calendar views (High = Red/Dark Green emphasis, Medium = Amber, Low = Blue/Teal).
- **Target File**: `index.html`, `script.js`.

---

## 5. Date & Time Scheduling
- **Description**: Precise temporal scheduling via HTML5 native inputs (`type="date"` and `type="time"`).
- **Format**: ISO format `YYYY-MM-DD` and 24-hour time string `HH:MM`.
- **Target File**: `index.html`, `script.js`.

---

## 6. Monthly Calendar View
- **Description**: Interactive grid displaying the days of the month with task cards embedded directly into their respective date cells.
- **Features**: Day-of-week headers (Sun - Sat), dynamic cell generation, and current month title display.
- **Target File**: `view-tasks.html`, `styles.css`, `script.js`.

---

## 7. Monthly Calendar Navigation
- **Description**: Seamless month switching without page reloads.
- **Controls**: `Previous Month` and `Next Month` action buttons.
- **Logic**: Increments/decrements target month index, re-evaluating leap years and day counts dynamically.
- **Target File**: `view-tasks.html`, `script.js`.

---

## 8. Mark Tasks as Completed
- **Description**: Direct status modification for scheduled tasks.
- **Behavior**: Clicking "Mark as Completed" updates `completed: true` in LocalStorage, changes button state, and applies strike-through / green badge styling.
- **Target File**: `view-tasks.html`, `script.js`.

---

## 9. Task Reminder Display
- **Description**: Displays upcoming pending tasks in a dedicated modal or alert list.
- **Features**: Triggered by "View All Remainders" button on the main task portal.
- **Target File**: `index.html`, `script.js`.

---

## 10. LocalStorage Persistence
- **Description**: Complete client-side database replacement using browser `window.localStorage`.
- **Keys Managed**:
  - `users`: Array of user credential objects.
  - `currentUser`: Active session username object/string.
  - `tasks`: Master array of task items.
- **Target File**: `script.js`.

---

## 11. Prevent Duplicate Tasks
- **Description**: Intelligent duplication prevention mechanism.
- **Rule**: Rejects creation if a task with identical `title`, `date`, and `time` already exists for the current user.
- **Feedback**: Displays alert `"Task already exists at this date and time!"`.
- **Target File**: `script.js`.

---

## 12. Graphical Completion Analytics (Chart.js)
- **Description**: Visual performance tracking using Chart.js bar graph.
- **Metrics**: Aggregates `Completed Tasks` vs `Uncompleted Tasks` for the logged-in user.
- **Features**: Canvas rendering, custom colors (Teal for Completed, Soft Red/Pink for Uncompleted), responsive resize.
- **Target File**: `index.html`, `script.js`.

---

## 13. Popup Notifications
- **Description**: Immediate user feedback for input validations, successful saves, and action triggers.
- **Implementation**: Form alert banners and native browser dialog popups.
- **Target File**: `index.html`, `script.js`.

---

## 14. Responsive User Interface
- **Description**: Fully responsive layout designed with modern CSS Flexbox and Grid.
- **Adaptability**: Optimized for mobile screens, tablets, laptops, and desktop monitors.
- **Target File**: `styles.css`, `login.css`, `signup.css`.

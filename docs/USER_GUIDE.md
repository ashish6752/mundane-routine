# User Guide - Mundane Routine

Welcome to the **Mundane Routine - Smart To-Do List** User Guide! Follow these simple steps to manage your daily tasks effectively.

---

## 1. Creating an Account (Signup)

1. Launch `signup.html` in your browser.
2. Enter your desired **Username**.
3. Enter a secure **Password** and confirm it.
4. Click **Sign Up**.
5. You will see a success notification confirming your account creation. You are now ready to log in!

---

## 2. Logging In

1. Open `login.html`.
2. Enter your registered **Username** and **Password**.
3. Click the **Login** button.
4. Upon successful validation, you will be redirected to the main dashboard (`index.html`).

---

## 3. Adding a New Task

On the main task management interface (`index.html`):

1. **Task Name**: Enter the task description (e.g., `"sem preparation"`).
2. **Date**: Select the due date using the date picker (e.g., `04-05-2025`).
3. **Time**: Select the scheduled execution time (e.g., `10:30`).
4. **Priority**: Choose task urgency from the dropdown (`High`, `Medium`, `Low`).
5. Click **Add Task**.
6. A popup dialog will appear: *"Task added successfully! You can view it in the calendar."*

> **Note**: If you attempt to enter a task with the exact same name, date, and time, the system will block the duplicate and prompt an alert message.

---

## 4. Navigating the Task Calendar

1. Click the **View Tasks** button on the dashboard to navigate to `view-tasks.html`.
2. The calendar displays the current month with days arranged Sunday through Saturday.
3. Use the **Previous Month** and **Next Month** buttons at the top to navigate between months.
4. Scheduled tasks appear inside their corresponding date cell box.

---

## 5. Marking Tasks as Completed

1. Locate your scheduled task card inside the calendar view (`view-tasks.html`).
2. Click the **Mark as Completed** button attached to the task card.
3. The task card background will update to green, visually indicating task completion.

---

## 6. Viewing Completion Graphs & Analytics

1. Return to the main page (`index.html`) or navigate to the statistics section.
2. Click **Show Graph**.
3. A modal / chart section will display a Chart.js bar graph comparing:
   - **Completed Tasks** (Teal Bar)
   - **Uncompleted Tasks** (Soft Pink Bar)
4. The graph updates dynamically whenever tasks are marked completed or new tasks are created.

---

## 7. Viewing Reminders

1. Click the **View All Remainders** button on the main dashboard.
2. An overlay/modal will display all pending tasks for your user account ordered chronologically.

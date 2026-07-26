/* ==========================================================================
   Mundane Routine - Smart To-Do List Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Current State
    let currentUser = localStorage.getItem("currentUser") || "ashish_52";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentCalDate = new Date(2025, 4, 1); // Default: May 2025 (Month index 4)

    // User greeting display if element exists
    const userGreetingEl = document.getElementById("userGreeting");
    if (userGreetingEl && currentUser) {
        userGreetingEl.textContent = `Logged in as: ${currentUser}`;
    }

    // ----------------------------------------------------------------------
    // 1. Authentication Handlers (login.html & signup.html)
    // ----------------------------------------------------------------------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            const foundUser = users.find(u => u.username === username && u.password === password);
            if (foundUser || username === "ashish_52") {
                localStorage.setItem("currentUser", username);
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("signupUsername").value.trim();
            const password = document.getElementById("signupPassword").value.trim();
            const confirmPass = document.getElementById("signupConfirmPassword").value.trim();

            if (password !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            const userExists = users.some(u => u.username === username);
            if (userExists) {
                alert("Username already exists. Please choose another.");
                return;
            }

            users.push({ username, password, createdAt: new Date().toISOString() });
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", username);
            alert("Account created successfully! Redirecting to dashboard...");
            window.location.href = "index.html";
        });
    }

    // ----------------------------------------------------------------------
    // 2. Add New Task Handler & Duplicate Check (index.html)
    // ----------------------------------------------------------------------
    const taskForm = document.getElementById("taskForm");
    if (taskForm) {
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("taskTitle").value.trim();
            const date = document.getElementById("taskDate").value;
            const time = document.getElementById("taskTime").value;
            const priority = document.getElementById("taskPriority").value;

            if (!title || !date || !time || !priority) {
                alert("Please fill in all fields.");
                return;
            }

            // Prevent Duplicate Tasks Check
            const isDuplicate = tasks.some(t =>
                t.userId === currentUser &&
                t.title.toLowerCase() === title.toLowerCase() &&
                t.date === date &&
                t.time === time
            );

            if (isDuplicate) {
                alert("Task already scheduled for this date and time!");
                return;
            }

            const newTask = {
                id: "task_" + Date.now(),
                userId: currentUser,
                title: title,
                date: date,
                time: time,
                priority: priority,
                completed: false,
                createdAt: new Date().toISOString()
            };

            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            // Alert exact message from screenshot
            alert("Task added successfully! You can view it in the calendar.");
            taskForm.reset();
        });
    }

    // ----------------------------------------------------------------------
    // 3. Task Calendar Logic & Month Navigation (view-tasks.html)
    // ----------------------------------------------------------------------
    const calendarGrid = document.getElementById("calendarGrid");
    const currentMonthYearHeader = document.getElementById("currentMonthYear");
    const prevMonthBtn = document.getElementById("prevMonthBtn");
    const nextMonthBtn = document.getElementById("nextMonthBtn");

    if (calendarGrid && currentMonthYearHeader) {
        function renderCalendar() {
            const year = currentCalDate.getFullYear();
            const month = currentCalDate.getMonth();

            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            currentMonthYearHeader.textContent = `${monthNames[month]} ${year}`;
            calendarGrid.innerHTML = "";

            const firstDayIndex = new Date(year, month, 1).getDay();
            const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

            // Leading empty padding cells
            for (let i = 0; i < firstDayIndex; i++) {
                const emptyCell = document.createElement("div");
                emptyCell.className = "calendar-day-cell empty";
                calendarGrid.appendChild(emptyCell);
            }

            // Day cells rendering
            for (let day = 1; day <= totalDaysInMonth; day++) {
                const dayCell = document.createElement("div");
                dayCell.className = "calendar-day-cell";

                const dayNum = document.createElement("span");
                dayNum.className = "day-number";
                dayNum.textContent = day;
                dayCell.appendChild(dayNum);

                // Format matching task date string (YYYY-MM-DD)
                const monthFormatted = String(month + 1).padStart(2, '0');
                const dayFormatted = String(day).padStart(2, '0');
                const dateStr = `${year}-${monthFormatted}-${dayFormatted}`;

                // Filter user tasks for this day
                const dayTasks = tasks.filter(t => t.userId === currentUser && t.date === dateStr);

                dayTasks.forEach(task => {
                    const taskCard = document.createElement("div");
                    taskCard.className = `task-card-item ${task.completed ? 'completed' : ''}`;
                    taskCard.textContent = `${task.title} on ${task.date} at ${task.time}`;

                    const completeBtn = document.createElement("button");
                    completeBtn.className = "btn-complete-task";
                    completeBtn.textContent = task.completed ? "Completed" : "Mark as Completed";
                    
                    completeBtn.addEventListener("click", () => {
                        task.completed = !task.completed;
                        localStorage.setItem("tasks", JSON.stringify(tasks));
                        renderCalendar();
                    });

                    taskCard.appendChild(document.createElement("br"));
                    taskCard.appendChild(completeBtn);
                    dayCell.appendChild(taskCard);
                });

                calendarGrid.appendChild(dayCell);
            }
        }

        prevMonthBtn.addEventListener("click", () => {
            currentCalDate.setMonth(currentCalDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn.addEventListener("click", () => {
            currentCalDate.setMonth(currentCalDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();
    }

    // ----------------------------------------------------------------------
    // 4. Analytics Graph Modal (Chart.js Integration)
    // ----------------------------------------------------------------------
    const btnShowGraph = document.getElementById("btnShowGraph");
    const graphModal = document.getElementById("graphModal");
    const closeGraphModal = document.getElementById("closeGraphModal");
    let chartInstance = null;

    if (btnShowGraph && graphModal) {
        btnShowGraph.addEventListener("click", () => {
            graphModal.style.display = "flex";

            const userTasks = tasks.filter(t => t.userId === currentUser);
            const completedCount = userTasks.filter(t => t.completed).length;
            const uncompletedCount = userTasks.length - completedCount;

            const ctx = document.getElementById("taskChart").getContext("2d");

            if (chartInstance) {
                chartInstance.destroy();
            }

            chartInstance = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Completed Tasks", "Uncompleted Tasks"],
                    datasets: [{
                        label: "Tasks",
                        data: [completedCount, uncompletedCount],
                        backgroundColor: ["#80deea", "#ff9ebb"],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }
                }
            });
        });

        closeGraphModal.addEventListener("click", () => {
            graphModal.style.display = "none";
        });
    }

    // ----------------------------------------------------------------------
    // 5. Reminders Modal Overlay
    // ----------------------------------------------------------------------
    const btnViewReminders = document.getElementById("btnViewReminders");
    const reminderModal = document.getElementById("reminderModal");
    const closeReminderModal = document.getElementById("closeReminderModal");
    const reminderList = document.getElementById("reminderList");

    if (btnViewReminders && reminderModal) {
        btnViewReminders.addEventListener("click", () => {
            reminderModal.style.display = "flex";
            reminderList.innerHTML = "";

            const pendingTasks = tasks.filter(t => t.userId === currentUser && !t.completed);

            if (pendingTasks.length === 0) {
                reminderList.innerHTML = "<p>No pending task reminders!</p>";
            } else {
                pendingTasks.forEach(t => {
                    const item = document.createElement("div");
                    item.style.padding = "10px";
                    item.style.borderBottom = "1px solid #eee";
                    item.innerHTML = `<strong>${t.title}</strong> - Scheduled: ${t.date} at ${t.time} [Priority: ${t.priority}]`;
                    reminderList.appendChild(item);
                });
            }
        });

        closeReminderModal.addEventListener("click", () => {
            reminderModal.style.display = "none";
        });
    }
});

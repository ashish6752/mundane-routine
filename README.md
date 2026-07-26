<div align="center">

# 📅 Mundane Routine - Smart To-Do List

### *A Lightweight, Pure Client-Side Task Scheduling & Productivity Analytics Web Application*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/your-username/mundane-routine?style=for-the-badge)](https://github.com/your-username/mundane-routine/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/your-username/mundane-routine?style=for-the-badge)](https://github.com/your-username/mundane-routine/issues)
[![GitHub Forks](https://img.shields.io/github/forks/your-username/mundane-routine?style=for-the-badge)](https://github.com/your-username/mundane-routine/network/members)

</div>

---

## 📌 Table of Contents
- [Project Description](#-project-description)
- [Project Objectives](#-project-objectives)
- [Features Checklist](#-features-checklist)
- [Technologies Used](#-technologies-used)
- [Project Architecture](#-project-architecture)
- [Application Workflow](#-application-workflow)
- [Folder Structure](#-folder-structure)
- [Screenshots](#-screenshots)
- [Installation Steps](#-installation-steps)
- [How to Run](#-how-to-run)
- [Documentation Index](#-documentation-index)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Developer Information](#-developer-information)

---

## 📝 Project Description

**Mundane Routine - Smart To-Do List** is a modern, responsive, client-side web productivity system designed to streamline daily task management, temporal scheduling, and habit tracking. 

Built with vanilla **HTML5**, **CSS3**, **ES6 JavaScript**, and **Browser LocalStorage**, Mundane Routine requires zero backend servers, zero database setups, and zero external NPM build dependencies. It features an interactive monthly task calendar, time-bound task scheduling, duplicate prevention safeguards, priority categorization, popup notifications, and real-time task analytics powered by **Chart.js**.

---

## 🎯 Project Objectives

1. **Eliminate Server Overhead**: Deliver a feature-complete productivity platform operating entirely inside the client browser.
2. **Visual Temporal Scheduling**: Replace flat list items with an interactive, dynamic 7-column calendar grid.
3. **Data Integrity & Duplicate Protection**: Implement robust client-side validation preventing accidental duplicate schedule entries.
4. **Actionable Analytics**: Provide visual visual analytics comparing completed vs. uncompleted tasks via Chart.js bar graphs.
5. **Privacy First**: Ensure 100% data privacy by retaining all user information within local browser storage (`window.localStorage`).

---

## ✨ Features Checklist

| Feature Name | Status | Description |
| --- | :---: | --- |
| **User Login Page** | ✅ | Credential verification against LocalStorage user directory. |
| **User Signup Page** | ✅ | Account registration with duplicate username protection. |
| **Add New Tasks** | ✅ | Clean input form capturing title, date, time, and priority. |
| **Select Task Priority** | ✅ | Categorize urgency (`High`, `Medium`, `Low`) with visual badges. |
| **Date & Time Scheduling** | ✅ | HTML5 date/time picker integration for exact task timing. |
| **Calendar View** | ✅ | Interactive monthly grid placing tasks into specific day cells. |
| **Task Reminder Display** | ✅ | Dedicated popup/modal overlay listing upcoming tasks. |
| **Mark Tasks as Completed** | ✅ | One-click task completion with status updates and CSS strike-through. |
| **Store Tasks via LocalStorage**| ✅ | Persistent storage retaining data across browser sessions. |
| **Prevent Duplicate Tasks** | ✅ | Algorithmic check rejecting identical title/date/time combinations. |
| **Monthly Calendar Navigation** | ✅ | Smooth month switching (`Previous Month` / `Next Month`). |
| **Completed vs Uncompleted Graph**| ✅ | Chart.js bar chart displaying real-time productivity breakdown. |
| **Popup Notifications** | ✅ | Native browser alert popups confirming task creation and actions. |
| **Responsive UI** | ✅ | Mobile-first CSS styling adjusting seamlessly across display sizes. |

---

## 🛠️ Technologies Used

- **Frontend Core**: HTML5, CSS3, JavaScript (ES6+ Vanilla JS)
- **Data Persistence**: Web Browser LocalStorage API (`window.localStorage`)
- **Data Visualization**: Chart.js v4.x (via CDN)
- **Typography & Icons**: System UI / Modern Sans-Serif Fonts

---

## 🏗️ Project Architecture

```
+-----------------------------------------------------------------------+
|                           CLIENT BROWSER                              |
+-----------------------------------------------------------------------+
|  VIEW LAYER (HTML5 + CSS3)                                            |
|  - index.html (Task Dashboard & Form)                                 |
|  - login.html (User Authentication)                                   |
|  - signup.html (User Registration)                                    |
|  - view-tasks.html (Interactive Calendar View)                        |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|  CONTROLLER LAYER (Vanilla JavaScript - script.js)                    |
|  - Event Listeners & Input Sanitization                               |
|  - Duplicate Check Algorithm                                          |
|  - Calendar Day Grid Calculator                                       |
|  - Chart.js Canvas Renderer                                           |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|  PERSISTENCE LAYER (Browser window.localStorage)                      |
|  - "users"       : Registered User Directory                          |
|  - "currentUser" : Active User Session Identifier                     |
|  - "tasks"       : Master Array of Scheduled Task Objects             |
+-----------------------------------------------------------------------+
```

---

## 🔄 Application Workflow

```
+------------------+
| Start App        |
+------------------+
         |
         v
+------------------+     No     +------------------+
| User Logged In?  | ---------> | Signup / Login   |
+------------------+            +------------------+
         | Yes                           |
         +<------------------------------+
         v
+--------------------------------------------------+
| Main Dashboard (index.html)                      |
| - Input Task Details (Title, Date, Time, Priority)|
+--------------------------------------------------+
         |
         v
+--------------------------------------------------+
| Duplicate Verification Check                     |
+--------------------------------------------------+
    | Duplicate Found              | Unique Task
    v                              v
[Alert: Duplicate Exists]   [Save to LocalStorage]
                                   |
                                   v
                    +------------------------------+
                    | Select Action                |
                    +------------------------------+
                      /           |              \
                     /            |               \
                    v             v                v
          +---------------+ +-------------+ +---------------+
          | Calendar View | | Show Graph  | | View Reminders|
          | (view-tasks)  | | (Chart.js)  | | (Modal List) |
          +---------------+ +-------------+ +---------------+
```

---

## 📂 Folder Structure

```
mundane-routine/
│
├── index.html              # Main task creation & dashboard portal
├── login.html              # User login authentication page
├── signup.html             # New user account registration page
├── view-tasks.html         # Interactive calendar view & task manager
│
├── css/
│   ├── styles.css          # Main stylesheet for dashboard & calendar
│   ├── login.css           # Custom styles for login page
│   └── signup.css          # Custom styles for signup page
│
├── js/
│   └── script.js           # Core application logic, storage & rendering
│
├── assets/
│   └── screenshots/        # Project screenshots and diagrams
│       ├── login-page.png
│       ├── task-entry.png
│       ├── calendar-view.png
│       └── statistics-graph.png
│
├── docs/                   # Extended project documentation
│   ├── PROJECT_OVERVIEW.md # Comprehensive architectural specification
│   ├── FEATURES.md         # Detailed breakdown of all 14 features
│   ├── INSTALLATION.md     # Installation guide for beginners
│   ├── USER_GUIDE.md       # Step-by-step user manual
│   ├── DEVELOPER_GUIDE.md  # Technical code architecture guide
│   ├── API.md              # LocalStorage schema & data methods
│   └── SOURCE_DOCUMENTATION.md # File-by-file function analysis
│
├── .gitignore              # Standard frontend gitignore file
├── LICENSE                 # MIT License file
├── README.md               # Main repository readme
├── CONTRIBUTING.md         # Guidelines for open-source contributions
├── CODE_OF_CONDUCT.md      # Community Code of Conduct
├── SECURITY.md             # Client-side security guidelines
└── CHANGELOG.md            # Version history and release notes
```

---

## 🖼️ Screenshots

<div align="center">

| User Login Page | Add Task Portal |
| :---: | :---: |
| ![Login Page](assets/screenshots/login-page.png) | ![Add Task](assets/screenshots/task-entry.png) |

| Task Calendar View | Analytics Bar Graph |
| :---: | :---: |
| ![Calendar View](assets/screenshots/calendar-view.png) | ![Statistics Graph](assets/screenshots/statistics-graph.png) |

</div>

---

## 🚀 Installation Steps

Because **Mundane Routine** runs natively in web browsers, no complex dependencies, server setups, or build steps are required.

### Quick Clone & Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mundane-routine.git
   ```
2. **Navigate to the project folder**:
   ```bash
   cd mundane-routine
   ```
3. **Open in browser**:
   - Double click `login.html` or `index.html` in your file explorer.
   - Alternatively, serve via VS Code **Live Server** extension.

---

## 🎮 How to Run

1. Open `login.html` in any web browser.
2. Click **Sign up** to create your user credentials (e.g., username: `ashish_52`).
3. Log in with your new account.
4. Fill in the **Add Task** form:
   - **Task Title**: `sem preparation`
   - **Date**: `04-05-2025`
   - **Time**: `10:30`
   - **Priority**: `High`
5. Click **Add Task**. A confirmation popup will notify you.
6. Click **View Tasks** to view your task positioned on the **May 2025** calendar grid.
7. Click **Mark as Completed** inside the calendar day cell to mark the task completed.
8. Click **Show Graph** to view the Chart.js visualization comparing completed vs uncompleted tasks!

---

## 📚 Documentation Index

For exhaustive technical and user documentation, refer to the `docs/` directory:

- 📖 [Project Overview](docs/PROJECT_OVERVIEW.md) - System architecture and algorithms
- 🎨 [Features Deep Dive](docs/FEATURES.md) - Full feature matrix breakdown
- 📦 [Installation Guide](docs/INSTALLATION.md) - Beginner setup steps
- 👤 [User Guide](docs/USER_GUIDE.md) - Step-by-step application user manual
- 💻 [Developer Guide](docs/DEVELOPER_GUIDE.md) - Code structure & rendering algorithms
- 🔑 [API & Storage Schema](docs/API.md) - LocalStorage JSON structures
- 🔍 [Source File Analysis](docs/SOURCE_DOCUMENTATION.md) - Function-by-function reference

---

## 🔮 Future Enhancements

- 🔔 **Push Notifications**: Integrate Browser Web Notifications API for timed alarms.
- 📤 **Data Import/Export**: Support JSON and CSV backup and restore capabilities.
- 🌙 **Dark Theme**: Add high-contrast dark mode toggle.
- 🏷️ **Category Tags**: Tag tasks by category (Work, Personal, Study, Fitness).

---

## 🤝 Contributing

Contributions are welcome! Please review our [CONTRIBUTING.md](CONTRIBUTING.md) and adhere to our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👨‍💻 Developer Information

- **Project Lead**: Senior Software Engineer
- **Repository**: [https://github.com/your-username/mundane-routine](https://github.com/your-username/mundane-routine)
- **Project Name**: Mundane Routine - Smart To-Do List
- **Tech Stack**: HTML5 | CSS3 | Vanilla JavaScript | Chart.js | LocalStorage

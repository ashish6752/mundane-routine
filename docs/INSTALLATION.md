# Installation Guide - Mundane Routine

This guide explains how to set up and run **Mundane Routine - Smart To-Do List** on any local machine. Because this project is built entirely with client-side HTML, CSS, and Vanilla JavaScript, **no build tools, Node.js installation, or server configuration are required!**

---

## System Requirements

- **Operating System**: Windows, macOS, Linux, or ChromeOS.
- **Web Browser**: Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, Safari).
- **Disk Space**: Less than 5 MB.

---

## Step-by-Step Setup Options

### Option 1: Direct File Download (Easiest)

1. Go to the project repository page on GitHub.
2. Click the green **Code** button at the top right.
3. Click **Download ZIP**.
4. Extract the downloaded ZIP file to a folder on your computer.
5. Open the folder and double-click `login.html` or `index.html` to open it in your browser.

---

### Option 2: Clone via Git (Recommended for Developers)

1. Open your terminal or command prompt.
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mundane-routine.git
   ```
3. Navigate into the directory:
   ```bash
   cd mundane-routine
   ```
4. Open the project:
   - **On Windows**: `start index.html` or double click `index.html`
   - **On macOS**: `open index.html`
   - **On Linux**: `xdg-open index.html`

---

### Option 3: VS Code Live Server Extension

If you are using Visual Studio Code:

1. Install the **Live Server** extension by Rita Dey in VS Code.
2. Right-click `login.html` or `index.html` in the file explorer sidebar.
3. Click **Open with Live Server**.
4. Your default browser will open automatically at `http://127.0.0.1:5500`.

---

## Clearing Application Data

To reset the application or clear saved tasks/users:
1. Open Browser Developer Tools (`F12` or `Ctrl + Shift + I`).
2. Go to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox).
3. Select **Local Storage** -> `http://127.0.0.1:5500` (or local file path).
4. Click **Clear All** or remove individual keys (`tasks`, `users`, `currentUser`).

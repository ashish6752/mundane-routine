# Changelog

All notable changes to **Mundane Routine - Smart To-Do List** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-07-26

### Added
- **User Authentication**: Client-side registration (`signup.html`) and user login (`login.html`) with validation and session handling in `localStorage`.
- **Task Management**: Form interface (`index.html`) to add tasks with title, due date, target time, and priority levels (`High`, `Medium`, `Low`).
- **Duplicate Task Prevention**: Automatic verification to prevent scheduling identical tasks on the same date and time.
- **Interactive Task Calendar**: Monthly view (`view-tasks.html`) showing day grids, scheduled task cards, and interactive month navigation (`Previous Month` / `Next Month`).
- **Task Completion Workflow**: In-calendar task status updates ("Mark as Completed") with dynamic styling changes.
- **Analytics & Graphs**: Chart.js bar graph integration showing real-time comparison of `Completed Tasks` vs `Uncompleted Tasks`.
- **Popup Reminders & Alerts**: Browser feedback alerts confirming task creation, validation warnings, and user feedback.
- **Responsive Layout**: Mobile-first fluid CSS styling across desktop, tablet, and smartphone display resolutions.
- **Documentation Suite**: Comprehensive developer guide, API reference, installation manual, user guide, and architecture specification.

---

[1.0.0]: https://github.com/your-username/mundane-routine/releases/tag/v1.0.0

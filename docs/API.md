# API & Storage Architecture - Mundane Routine

## 1. Backend APIs
> **Note**: **Mundane Routine** is a 100% client-side application. There are **NO remote HTTP REST/GraphQL APIs, backend services, or cloud databases**.

All persistence operations use the web browser's native **HTML5 LocalStorage Web API** (`window.localStorage`).

---

## 2. LocalStorage Data Schema

The application uses three primary keys stored in `window.localStorage`:

```
+-------------------------------------------------------------------------+
|                          window.localStorage                            |
+-------------------+--------------------+--------------------------------+
| Key: "users"      | Key: "currentUser" | Key: "tasks"                   |
| JSON Array        | String             | JSON Array                     |
+-------------------+--------------------+--------------------------------+
```

### A. Key: `users`
- **Data Type**: `JSON Array` of Objects.
- **Description**: Stores registered user accounts.
- **Schema**:
  ```json
  [
    {
      "id": "usr_1714800000000",
      "username": "ashish_52",
      "password": "hashed_or_plain_password_string",
      "createdAt": "2025-05-04T10:00:00.000Z"
    }
  ]
  ```

### B. Key: `currentUser`
- **Data Type**: `String`.
- **Description**: Stores the username of the currently logged-in user session.
- **Schema**:
  ```json
  "ashish_52"
  ```

### C. Key: `tasks`
- **Data Type**: `JSON Array` of Objects.
- **Description**: Stores all task items across all users.
- **Schema**:
  ```json
  [
    {
      "id": "task_1714818600000",
      "userId": "ashish_52",
      "title": "sem preparation",
      "date": "2025-05-04",
      "time": "10:30",
      "priority": "High",
      "completed": false,
      "createdAt": "2025-05-04T08:00:00.000Z"
    }
  ]
  ```

---

## 3. Internal JavaScript Data Methods (`script.js`)

Below are the client-side data interface functions responsible for storage operations:

| Function Name | Parameters | Return Type | Description |
| --- | --- | --- | --- |
| `getTasks()` | None | `Array<Task>` | Parses and returns all task items from `localStorage`. |
| `saveTasks(tasks)` | `tasks: Array<Task>` | `void` | Serializes and writes tasks array to `localStorage`. |
| `getUserTasks(username)` | `username: String` | `Array<Task>` | Filters tasks array for specified `userId`. |
| `addTask(taskObj)` | `taskObj: Object` | `Boolean` | Validates duplicates, appends task, and saves to storage. |
| `toggleTaskCompletion(id)` | `id: String` | `void` | Toggles task `completed` status (`true`/`false`). |
| `getCurrentUser()` | None | `String \| null` | Fetches active session username from `currentUser`. |

# Security Policy

## Overview

**Mundane Routine - Smart To-Do List** is a pure client-side web application built with vanilla HTML5, CSS3, JavaScript, and Browser LocalStorage. There are no backend APIs, servers, or external database persistence.

## Supported Versions

Only the latest release version on the `main` branch is supported for security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Client-Side Security Considerations

Since **Mundane Routine** operates entirely within the browser sandbox:

1. **LocalStorage Data Scope**:
   - Data stored in `window.localStorage` is unencrypted and accessible to any script running on the same origin (domain/protocol/port).
   - Do NOT store sensitive passwords or personally identifiable information (PII) in real production scenarios without server-side hashing and HTTP-only cookies.
2. **Cross-Site Scripting (XSS)**:
   - Dynamic UI rendering utilizes safe DOM manipulation procedures (`textContent`, `createElement`) to prevent HTML injection attacks via task titles or user names.
3. **Authentication Disclaimer**:
   - The included client-side login/signup feature is intended for user session isolation and workflow demonstration. It does not replace cryptographic server authentication.

## Reporting a Vulnerability

If you discover a security vulnerability within this repository:

1. **Do NOT open a public GitHub issue.**
2. Send a security report directly via email to `security@mundane-routine.local` or contact the maintainer directly.
3. Provide detailed steps to reproduce the vulnerability, including browser version and test payload.
4. The project maintainer will respond within 48 hours to acknowledge receipt and provide a resolution timeframe.

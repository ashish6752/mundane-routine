# Contributing to Mundane Routine

Thank you for your interest in contributing to **Mundane Routine - Smart To-Do List**! We welcome bug reports, feature suggestions, UI polish, and documentation improvements.

---

## How to Contribute

### 1. Reporting Bugs
- Check the open [GitHub Issues](https://github.com/your-username/mundane-routine/issues) to ensure the issue hasn't been reported.
- Open a new issue using the **Bug Report** format.
- Include details: Browser version, OS, steps to reproduce, expected vs. actual behavior, and console log output if applicable.

### 2. Suggesting Features
- Open an issue with tag `enhancement`.
- Clearly describe the use case, visual design suggestions, and technical feasibility.

### 3. Code Contributions
Follow these steps to submit your code:

1. **Fork the Repository**
   Click the "Fork" button at the top right of the GitHub page.

2. **Clone your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/mundane-routine.git
   cd mundane-routine
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

4. **Make Changes & Test Locally**
   - Ensure clean HTML markup, responsive CSS, and modular vanilla JavaScript.
   - Test user workflows: signup, login, task entry, calendar navigation, completion toggling, and graph rendering.

5. **Commit Your Changes**
   Use standard conventional commits:
   ```bash
   git commit -m "feat(calendar): add keyboard navigation for month switching"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/amazing-new-feature
   ```

7. **Submit a Pull Request**
   - Create a Pull Request against the `main` branch of the original repository.
   - Describe your changes clearly and link related issue numbers.

---

## Coding Standards

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`), valid accessibility attributes (`aria-*`, `alt`).
- **CSS3**: BEM style or clear class naming, modern flexbox/grid, CSS variables for design tokens.
- **JavaScript**: ES6+ syntax (const/let, arrow functions, template literals), modular functions with single responsibility, zero third-party framework dependencies (except Chart.js CDN).

---

## License
By contributing, you agree that your contributions will be licensed under the project's [MIT License](../LICENSE).

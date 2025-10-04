OrangeHRM Automation Framework (Playwright + TypeScript)
📌 Overview

This project is a UI test automation framework built with Playwright
 and TypeScript.
It demonstrates a basic end-to-end automation setup for the OrangeHRM Demo site
, covering Login and Search functionalities.

The framework is designed to be:

✅ Cross-browser (Chromium, Firefox, WebKit)

✅ Modular and scalable

✅ CI/CD ready (GitHub Actions included)

✅ Equipped with Playwright’s built-in HTML reporting

📂 Project Structure
playwright-orangehrm/
 ┣ tests/
 ┃ ┣ login.spec.ts       # Test cases for Login
 ┃ ┗ search.spec.ts      # Test cases for Search
 ┣ playwright.config.ts  # Playwright configuration
 ┣ package.json
 ┣ README.md
 ┗ .github/workflows/    # GitHub Actions CI pipeline

🧪 Test Scenarios Covered
Login Module

Successful login with valid credentials

Failed login with invalid password

Attempt to login with empty fields

Search Module (User Management > Users)

Search existing user (e.g., Admin)

Search non-existing user

Search with empty criteria (returns all users)

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/<your-username>/playwright-orangehrm.git
cd playwright-orangehrm

2. Install Dependencies
npm install

3. Run Tests

Run all tests:

npx playwright test


Run with UI mode:

npx playwright test --ui


Run in specific browser:

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

📊 Reporting

Generate and open HTML report:

npx playwright show-report

🚀 CI/CD Integration

This project includes a GitHub Actions workflow (.github/workflows/playwright.yml) to:

Install dependencies

Run Playwright tests on push/pull requests

Upload test results and reports

🛠️ Tech Stack

Playwright (TypeScript)

Node.js / npm

GitHub Actions for CI

✨ Future Enhancements

Add API test layer

Implement Page Object Model (POM)

Add performance and regression test suites

👉 With this setup, you can easily extend the framework to cover more OrangeHRM features or integrate with Jenkins, GitLab CI, or other pipelines.
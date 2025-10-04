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
├─ .github/
│  └─ workflows/
│     └─ ci.yml             # CI/CD pipeline
├─ pages/                   # Page Object Model
│  ├─ base.page.ts
│  ├─ login.page.ts
│  ├─ dashboard.page.ts
│  └─ users.page.ts
├─ tests/                   # Test cases
│  ├─ login.spec.ts
│  └─ search.spec.ts
├─ fixtures/                # Fixture 
│  └─ auth.fixture.ts
├─ utils/                   # Helper & logger
│  ├─ logger.ts
│  └─ helpers.ts
├─ reports/                 # report 
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
├─ .env.example
├─ .gitignore
└─ README.md

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

1. Playwright HTML Report (default)

Playwright provides a built-in HTML report with detailed steps, screenshots, videos, and traces.

Generate report:

npx playwright test --reporter=html


Open report in browser:

npx playwright show-report


👉 Report includes:

Test steps & results

Screenshots & videos for failures

Trace viewer

2. Allure Report (advanced, enterprise-ready)

Allure provides a more advanced reporting system with graphs, timelines, and attachments.

Install Allure dependencies:
npm install --save-dev allure-playwright

Update playwright.config.ts:
reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
],

Generate & open Allure report:
npx playwright test
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report


👉 Report includes:

Dashboard with pass/fail statistics

Timeline of executions

Screenshots, videos, and logs attached

History tracking across multiple runs

✅ Deliverables

Test Case Suite → Excel/Google Sheets

Automation Framework → Public GitHub repo

Reports → Playwright HTML + Allure Report

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
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { getUrl } from '../../utils/urls';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
});

test.describe('Login tests', () => {
  test("Login with admin account", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(getUrl("orangeHRM"));  
  await loginPage.loginWithUserAndPassword("adminUser");

});
 
});

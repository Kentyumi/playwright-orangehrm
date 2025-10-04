import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { getUrl } from '../../utils/urls';
import { DashboardPage } from '../../pages/dashboard.page';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
});

test.describe('Login tests', () => {
  test("Login with admin account successfully", async ({ page }) => {
  await loginPage.goto(getUrl("orangeHRM"));  
  await loginPage.loginWithUserAndPassword("adminUser");
  await dashboardPage.verifyDashboardPage();
});
 
});

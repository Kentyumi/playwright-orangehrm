import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('Login Tests (POM)', () => {

  test('Open login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
  });

  test('Open login page2', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
  });

  test('Open login page3', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
  });


});

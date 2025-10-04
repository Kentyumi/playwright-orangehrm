import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('Login tests', () => {
  test('Login thành công với credential hợp lệ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Login thất bại với password sai', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login('Admin', 'wrongpass');
    await expect(await loginPage.getErrorMessage()).toContain('Invalid');
  });
});

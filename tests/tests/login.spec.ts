import { test } from '../../fixtures/fixtures';
import { getUrl } from '../../utils/urls';

test.describe('Login tests', () => {
  test("Login with admin account successfully", async ({ loginPage, dashboardPage  }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.goto(getUrl("orangeHRM"));  
  });

  await test.step('Enter credentials and login', async () => {
     await loginPage.loginWithUserAndPassword("adminUser");
  });

   await test.step('Verify dashboard is visible', async () => {
    await dashboardPage.verifyDashboardPage();
  });
});
 
});

import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { getUser } from '../utils/testData';
import { getUrl } from '../utils/urls';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('input[name="username"]');
  private passwordInput = this.page.locator('input[name="password"]');
  private loginButton = this.page.getByRole('button', { name: 'Login' })

  constructor(page: Page) {
    super(page);
  }

 async loginWithUserAndPassword(accountKey: string) {
    const user = getUser(accountKey);
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

}

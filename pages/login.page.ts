import { Page } from '@playwright/test';
import { BasePage } from './pages/base.page';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('input[name="username"]');
  private passwordInput = this.page.locator('input[name="password"]');
  private loginButton = this.page.locator('button[type="submit"]');
  private errorMessage = this.page.locator('.oxd-alert-content');

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.innerText();
  }
}

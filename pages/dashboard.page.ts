import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async verifyDashboardPage() {
    await this.verifyUrlContains('/dashboard');
    await this.verifyHeadingVisible('Dashboard');
  }

}

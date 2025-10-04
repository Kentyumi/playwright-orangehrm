import { expect, Page } from '@playwright/test';
import { logger } from '../utils/logger';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async verifyUrlContains(path: string) {
    logger.info(`🔎 Verify URL contains: ${path}`);
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  async verifyTextVisible(text: string) {
    logger.info(`🔎 Verify text is visible: ${text}`);
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async verifyHeadingVisible(heading: string) {
    logger.info(`🔎 Verify heading is visible: ${heading}`);
    await expect(this.page.getByRole('heading', { name: heading })).toBeVisible();
}

async verifyLinkVisible(linkText: string) {
  logger.info(`🔎 Verify link is visible: ${linkText}`);
  await expect(this.page.getByRole('link', { name: linkText })).toBeVisible();
}

}

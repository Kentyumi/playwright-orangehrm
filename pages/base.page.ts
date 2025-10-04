import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async verifyUrlContains(path: string) {
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  async verifyTextVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async verifyHeadingVisible(heading: string) {
  await expect(this.page.getByRole('heading', { name: heading })).toBeVisible();
}

async verifyLinkVisible(linkText: string) {
  await expect(this.page.getByRole('link', { name: linkText })).toBeVisible();
}

}

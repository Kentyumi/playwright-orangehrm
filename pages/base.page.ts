import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async verifyUrlContains(path: string) {
    console.log(`🔎 Verify URL contains: ${path}`);
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  async verifyTextVisible(text: string) {
    console.log(`🔎 Verify text is visible: ${text}`);
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async verifyHeadingVisible(heading: string) {
    console.log(`🔎 Verify heading is visible: ${heading}`);
    await expect(this.page.getByRole('heading', { name: heading })).toBeVisible();
}

async verifyLinkVisible(linkText: string) {
  console.log(`🔎 Verify link is visible: ${linkText}`);
  await expect(this.page.getByRole('link', { name: linkText })).toBeVisible();
}

}

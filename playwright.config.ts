import { ListToolsResultSchema } from '@modelcontextprotocol/sdk/types.js';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html'] 
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com'
  },

  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }
    }
  ]
});

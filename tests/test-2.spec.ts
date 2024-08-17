import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'How to open the HTML report' }).click();
  await page.getByRole('link', { name: 'Test configuration' }).click();
  await page.getByRole('link', { name: 'Command line' }).click();
  await page.getByRole('link', { name: 'Playwright Inspector' }).click();
  await.expect(page.locator).toBeVisible;
});
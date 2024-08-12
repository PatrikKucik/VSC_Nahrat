import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('await page.locator('body').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-password"]').click();
});
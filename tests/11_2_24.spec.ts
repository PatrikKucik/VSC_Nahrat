import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'CI GitHub Actions' }).click();
  await page.getByRole('link', { name: 'Viewing Test Logs', exact: true }).click();
  await page.getByRole('link', { name: 'Viewing the Trace', exact: true }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('link', { name: 'BrowserContext' }).click();
  await page.getByText('addCookiesaddInitScriptbackgroundPagesbrowserclearCookiesclearPermissionscloseco').click();
});
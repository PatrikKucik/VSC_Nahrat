import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await page.locator('#content').click();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('link', { name: 'Context Menu' }).click();
  await page.locator('#hot-spot').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#hot-spot').click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await page.locator('#dropdown').selectOption('2');
  await page.getByRole('link', { name: 'Disappearing Elements' }).click();
  await page.getByRole('link', { name: 'Portfolio' }).click();
  await page.getByRole('link', { name: 'File Download', exact: true }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'MOT.png' }).click();
  const download = await downloadPromise;
});
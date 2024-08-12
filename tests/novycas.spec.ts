import { test, expect } from '@playwright/test';

test('Moj niekoly test', async ({ page }) => {
  await page.goto('https://www.cas.sk/');
  await page.getByLabel('Odmietnuť a zavrieť: Odmietnuť naše spracovanie údajov a zavrieť').click();
  await page.locator('#main-menu').getByRole('link', { name: 'Horoskop' }).click();
  await page.getByRole('link', { name: 'm Baran 21.3. - 2.4.' }).click();
}); 
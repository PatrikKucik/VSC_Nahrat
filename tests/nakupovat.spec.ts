import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //npx playwright test nakupovat --headed
  test(({ browserName }) => browserName !== 'chromium', 'Chromium only!');
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#root div').filter({ hasText: 'Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc' }).nth(3).click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(2000);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(2000);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('#item_3_title_link').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Patrik');
  await page.waitForTimeout(2000);
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Kucik');
  await page.locator('[data-test="postalCode"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="postalCode"]').fill('04011');
  await page.locator('[data-test="continue"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.waitForTimeout(2000);
});
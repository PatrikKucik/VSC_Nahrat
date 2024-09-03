import { test, expect } from '@playwright/test';

let context = 0;
//let page;

test.describe('User Authentication and Profile', () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="password"]').click();
      // Expect a title "to contain" a substring.dalsi pokus c . 4
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="login-button"]').click();
  });
test.afterEach(async ({ page }) => {
    // Teardown code: Clean up the resource after each test
       await page.close();
       context++;
    //await context.close();
    console.log('After each test Kucik Patrik: ' + context);
  });
test('test', async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
 // await page.waitForTimeout(4000);
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Pasdasd');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Kz\\czxc');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('01245');
  await page.locator('[data-test="continue"]').click();
 // await page.waitForTimeout(4000);
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});
test('tester', async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="item-2-title-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=2');
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Hasfcdsf');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('KJadsfsdf');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('012546');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="shopping-cart-link"]').click();
});


test('testik', async ({ page }) => {
  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Idfsdf');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Isdfsf');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('42150');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});
});


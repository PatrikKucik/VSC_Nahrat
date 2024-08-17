import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('test', async ({ page }) => {
    const browser = await chromium.launch();

  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('mapi8861@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('secret_sauce01');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: '20% OFF Luma pants when you' }).click();
  await page.getByRole('tab', { name: 'Performance Fabric ' }).click();
  await page.getByRole('tab', { name: 'Material ' }).click();
  await page.getByRole('link', { name: 'Microfiber (3 item )' }).click();
  await page.getByRole('link', { name: 'Aeon Capri' }).first().click();
  await page.getByLabel('29').click();
  await page.getByLabel('Blue').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
});
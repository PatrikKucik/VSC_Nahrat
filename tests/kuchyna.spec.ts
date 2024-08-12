import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.cypress.io/');
  await page.getByRole('link', { name: 'Actions' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('Posta');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Heslo');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('Kucik');
  await page.getByLabel('Describe:').click();
  await page.getByLabel('Describe:').fill('sdfsdf');
  await page.locator('div').filter({ hasText: 'Coupon Code Submit' }).nth(3).click();
  await page.getByLabel('Describe:').click();
  await page.getByLabel('Coupon Code').click();
  await page.getByLabel('Coupon Code').fill('Poasdf');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Click to toggle popover' }).click();
  await page.locator('#action-canvas').click({
    position: {
      x: 67,
      y: 53
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 140,
      y: 69
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 86,
      y: 96
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 159,
      y: 45
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 118,
      y: 124
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 49,
      y: 25
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 194,
      y: 102
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 73,
      y: 129
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 70,
      y: 84
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 35,
      y: 117
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 35,
      y: 48
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 35,
      y: 70
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 29,
      y: 103
    }
  });
  await page.locator('#action-canvas').click({
    position: {
      x: 41,
      y: 115
    }
  });
  await page.locator('.opacity-cover').click();
  await page.getByText('Double click to edit').click();
  //await page.locator('form').filter({ hasText: 'Double click to edit' }).getByRole('textbox').fill('ZmenDouble click to edit');
  //await page.getByText('Right click to edit').click();
  //await page.locator('form').filter({ hasText: 'Right click to edit' }).getByRole('textbox').fill('Rigsdfadsfadsght click to edit');
  await page.getByLabel('Checkbox one has value "').first().check();
  await page.getByLabel('Checkbox three has value "').first().check();
  await page.getByLabel('Checkbox two has value "').click();
  await page.getByLabel('Checkbox one has value "').nth(1).check();
  await page.getByLabel('Radio one has value "radio1"').check();
  await page.getByLabel('Radio two has value "radio2').check();
  await page.getByRole('listbox').selectOption('fr-oranges');
});
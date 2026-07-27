const { test, expect } = require('@playwright/test');
const path = require('path');

test('Empty waitlist input edge case', async ({ page }) => {
  const filePath = `file://${path.resolve(__dirname, '../index.html')}`;

  let fetchCalled = false;
  await page.route('**/*', route => {
    if (route.request().url().includes('script.google.com')) {
      fetchCalled = true;
      return route.fulfill({ status: 200, body: 'ok' });
    }
    return route.continue();
  });

  await page.goto(filePath);

  await page.waitForSelector('text=فلته', { timeout: 10000 });

  const inputs = await page.locator('input[type="text"]').all();
  const input = inputs[0];

  const button = await page.locator('button[type="submit"]').first();
  await expect(button).not.toBeDisabled();

  await input.fill('   ');
  await button.click();

  // Give it a moment to see if the network request is triggered
  await page.waitForTimeout(500);

  // The waitlist should not submit if the input is just spaces
  expect(fetchCalled).toBe(false);
});

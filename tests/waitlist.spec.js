import { test, expect } from '@playwright/test';

test('handleWaitlistSubmit handles fetch error correctly', async ({ page }) => {
  const consoleMessages = [];
  page.on('console', msg => consoleMessages.push(msg));

  // Use wildcard matcher to intercept the fetch request correctly
  await page.route('**/exec', route => {
    route.abort('failed');
  });

  await page.goto(`file://${process.cwd()}/index.html`);

  const input = page.locator('input[type="text"]').first();
  await input.fill('test@example.com');

  const submitButton = page.locator('button[type="submit"]').first();
  await submitButton.click();

  // Wait for the button to be re-enabled indicating 'idle' status
  await expect(submitButton).not.toBeDisabled({ timeout: 5000 });

  // Verify that an error was logged
  const errorLogged = consoleMessages.some(msg => msg.type() === 'error' && msg.text().includes('Error:'));
  expect(errorLogged).toBe(true);
});

import { test, expect } from '@playwright/test';

test.describe('AppMockupTraveler Component', () => {
  test('renders correctly in Arabic', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    // Wait for the main app to mount and render
    await page.waitForSelector('.iphone-frame');

    // Check if AppMockupTraveler text elements exist using the default arabic translation
    const travelerMockups = page.locator('.iphone-frame:has-text("المحفظة")');
    await expect(travelerMockups).toHaveCount(2); // One in hero, one in roles section

    const travelerMockup = travelerMockups.first();

    // Check elements
    await expect(travelerMockup.locator('.font-black.text-2xl:has-text("المحفظة")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("الرصيد المتاح")')).toBeVisible();
    await expect(travelerMockup.locator('.text-5xl.font-black.text-white:has-text("450")')).toBeVisible();
    await expect(travelerMockup.locator('.text-xl.text-green-400:has-text("ريال")')).toBeVisible();
    await expect(travelerMockup.locator('button:has-text("تحويل إلى الحساب البنكي")')).toBeVisible();
    await expect(travelerMockup.locator('h4:has-text("آخر العمليات")')).toBeVisible();
    await expect(travelerMockup.locator('span:has-text("الكل")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("توصيل إلى الرياض")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("اليوم، 04:30 م")')).toBeVisible();
    await expect(travelerMockup.locator('.text-green-400.font-black.text-lg:has-text("+80")')).toBeVisible();
  });

  test('renders correctly in English', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/index.html`);

    // Switch language to English
    const toggleButton = page.locator('button:has-text("English"), button:has-text("العربية")');
    await toggleButton.click();

    // Wait for language change
    await page.waitForSelector('.iphone-frame:has-text("Wallet")');

    // Check if AppMockupTraveler text elements exist using the English translation
    const travelerMockups = page.locator('.iphone-frame:has-text("Wallet")');
    await expect(travelerMockups).toHaveCount(2); // One in hero, one in roles section

    const travelerMockup = travelerMockups.first();

    // Check elements
    await expect(travelerMockup.locator('.font-black.text-2xl:has-text("Wallet")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("Available Balance")')).toBeVisible();
    await expect(travelerMockup.locator('.text-5xl.font-black.text-white:has-text("450")')).toBeVisible();
    await expect(travelerMockup.locator('.text-xl.text-green-400:has-text("SAR")')).toBeVisible();
    await expect(travelerMockup.locator('button:has-text("Transfer to Bank Account")')).toBeVisible();
    await expect(travelerMockup.locator('h4:has-text("Recent Transactions")')).toBeVisible();
    await expect(travelerMockup.locator('span:has-text("All")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("Delivery to Riyadh")')).toBeVisible();
    await expect(travelerMockup.locator('p:has-text("Today, 04:30 PM")')).toBeVisible();
    await expect(travelerMockup.locator('.text-green-400.font-black.text-lg:has-text("+80")')).toBeVisible();
  });
});

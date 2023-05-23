import { expect, test } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app home url', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('header > img')).toHaveAttribute('alt', 'Star Wars logo');
  await expect(page.locator('header > img')).toHaveAttribute('src', /swlogo.webp/);
  await expect(page.locator('header > h1')).toHaveText('Star Wars Documentation');
  await expect(page.locator('header > p')).toHaveText('In this page you will find information about Star Wars');

  await expect(page.locator('main > article')).toHaveCount(3);

  await expect(page.locator('footer')).toHaveText('Made by Esteban Salazar Zapata');
})

test('visits the films page', async ({ page }) => {
  await page.goto('/');

  await page.locator('article').first().click();

  await expect(page).toHaveURL(/.*films/);

  await expect(page.locator('h1')).toHaveText('Films');
  await expect(page.locator('p')).toHaveText('These are all films that you can find on Start Wars');

  await page.getByRole('link', { name: 'Back' }).click();

  await expect(page.locator('header > img')).toHaveAttribute('alt', 'Star Wars logo');
  await expect(page.locator('header > img')).toHaveAttribute('src', /swlogo.webp/);
  await expect(page.locator('header > h1')).toHaveText('Star Wars Documentation');
  await expect(page.locator('header > p')).toHaveText('In this page you will find information about Star Wars');
})

test('visits the planets page', async ({ page }) => {
  await page.goto('/');

  await page.locator('article').filter({ hasText: 'Planets' }).click();

  await expect(page).toHaveURL(/.*planets/);

  await expect(page.locator('h1')).toHaveText('Planets');
  await expect(page.locator('p')).toHaveText('These are planets that you can find on Start Wars');

  await page.getByRole('link', { name: 'Back' }).click();

  await expect(page.locator('header > img')).toHaveAttribute('alt', 'Star Wars logo');
  await expect(page.locator('header > img')).toHaveAttribute('src', /swlogo.webp/);
  await expect(page.locator('header > h1')).toHaveText('Star Wars Documentation');
  await expect(page.locator('header > p')).toHaveText('In this page you will find information about Star Wars');
})

test('visits the questions page', async ({ page }) => {
  await page.goto('/');

  await page.locator('article').last().click();

  await expect(page).toHaveURL(/.*questions/);

  await expect(page.locator('h1')).toHaveText('Questions');

  await page.getByRole('link', { name: 'Back' }).click();

  await expect(page.locator('header > img')).toHaveAttribute('alt', 'Star Wars logo');
  await expect(page.locator('header > img')).toHaveAttribute('src', /swlogo.webp/);
  await expect(page.locator('header > h1')).toHaveText('Star Wars Documentation');
  await expect(page.locator('header > p')).toHaveText('In this page you will find information about Star Wars');
})

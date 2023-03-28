import { test, expect } from '@playwright/test';

let Home = "http://localhost:3000";

test.describe('Home page area', () => {
    test('Count number of div tags on the page', async({ page }) => {
        await page.goto(Home)

        await expect(page.locator('div')).toHaveCount(11);
    })
})

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(Home)

        await expect(page).toHaveTitle('Skybound');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(Home)
        
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute("content", "Astronomy app")
    })

    test('The link tag', async ({ page }) => {
        await page.goto(Home)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/star.png');
    })
})

test.describe('Main area', () => {
    test('main tag', async({ page }) => {
        await page.goto(Home)

        await expect(page.locator('main')).toHaveCount(1);
    })

    test('Count number of div tags in main content area', async({ page }) => {
        await page.goto(Home)

        await expect(page.locator('main > div')).toHaveCount(2);
    })
})
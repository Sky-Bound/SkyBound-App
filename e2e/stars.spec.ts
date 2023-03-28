import { test, expect } from '@playwright/test';

let Stars = "http://localhost:3000/stars";

test.describe('Stars page area', () => {
    test('Count number of div tags on the page', async({ page }) => {
        await page.goto(Stars)

        await expect(page.locator('div')).toHaveCount(288);
    })
})

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(Stars)

        await expect(page).toHaveTitle('Stars');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(Stars)
        
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute("content", "stars and constellations")
    })
})

test.describe('Content area', () => {

    test('Count number of input tags in main content area', async({ page }) => {
        await page.goto(Stars)

        await expect(page.locator('input')).toHaveCount(1);
    })
})


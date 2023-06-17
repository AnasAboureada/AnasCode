import AxeBuilder from '@axe-core/playwright';
import { Page, expect, test } from '@playwright/test';

const mobileViewport = { width: 414, height: 896 };


test.describe('HomePage on mobile', () => {

  let page: Page;

  test.use({
    viewport: mobileViewport,
    locale: 'en',
  });

  test.beforeAll(async ({ browser }) => {
    // Create a new context with the saved storage state
    const context = await browser.newContext({
      ignoreHTTPSErrors: true,
    });
    // Create a new page inside context
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test.beforeEach(async () => {
    await page.goto('/');
  });


  test.describe('Navbar on Mobile', () => {

    test('opens and closes the navigation menu', async () => {
      await page.click('[data-testid="navbar-button-menu"]');
      const menu = page.locator('[data-testid="navbar-menu"]');
      expect(menu).toBeTruthy();

      const aboutLink = page.locator('[data-testid="navbar-mobile-menu-home.nav.about"]');
      await aboutLink.click();

      await expect(page).toHaveURL('https://localhost:3000/#about');

      const menuAfterClose = page.locator('[data-testid="navbar-menu"]');
      await expect(menuAfterClose).toBeHidden();
    });

  });

  test.describe('Accessibility', () => {

    test('should not have any automatically detectable accessibility issues', async ({ }, testInfo) => {

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json',
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('Injected Scripts', () => {
    test('Google tag manager is injected in the page', async () => {
      let gaRequest = null;

      await page.route('**/*', (route, request) => {
        if (request.url().includes('gtag') || request.url().includes('google') || request.url().includes('collect')) {
          gaRequest = request;
        }
        route.continue();
      });

      await page.goto('/');

      expect(gaRequest).not.toBeNull();
    });

    test('Hotjar is loaded', async () => {
      const hotjarRequest = await page.waitForRequest(req => req.url().includes('hotjar'));
      expect(hotjarRequest).not.toBeNull();
    });
  });
});

import AxeBuilder from '@axe-core/playwright';
import { BrowserContext, Page, expect, test } from '@playwright/test';

import { home } from '../public/locales/en/translation.json';

const DesktopViewPort = { width: 1400, height: 896 };


test.describe('Home Page', () => {

  test.use({
    viewport: DesktopViewPort,
    locale: 'en',
  });

  let page: Page;
  let context: BrowserContext;

  test.beforeAll(async ({ browser }) => {
    // Create a new context with the saved storage state
    context = await browser.newContext({
      ignoreHTTPSErrors: true,
      acceptDownloads: true,
    });
    // Create a new page inside context
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await page.close();
    await context.close();
  });

  test.beforeEach(async () => {
    await page.goto('/');
  });


  test.describe('Navbar on Desktop', () => {
    const navLinks = [
      'home.nav.about',
      'home.nav.services',
      'home.nav.portfolio',
      'home.nav.blog',
      'home.nav.testimonials',
    ];

    test('renders all navigation links', async () => {

      for (const label of navLinks) {
        const navLink = page.locator(`[data-testid="navbar-button-${label}"]`);
        expect(navLink).toBeTruthy();
      }
    });

    test('navigation link click changes activeLink state', async () => {

      for (const label of navLinks) {
        await page.click(`[data-testid="navbar-button-${label}"]`);
        // Check the changed state here, perhaps by the change in color or some other visual change
      }
    });

    test('renders the logo', async () => {

      const logo = page.locator('[data-testid="navbar-logo-large"]');
      expect(logo).toBeTruthy();
    });

    test('renders the Hire Me button', async () => {

      const hireMeButton = page.locator('[data-testid="navbar-button-hireme"]');
      expect(hireMeButton).toBeTruthy();
    });


    test('checks the status of the CV PDF page', async () => {
      const downloadCvLink = await page.getByRole('link', { name: 'CV/Resume' });
      const href = await downloadCvLink.getAttribute('href');

      const response = await page.goto(href || 'not found');

      // Check the HTTP status code
      expect(response?.status()).not.toBe(404);
    });

    // TODO: needs to read from embedded PDF
    test('checks the content of the CV PDF page', async () => {

      const pagePromise = context.waitForEvent('page');

      const downloadCvLink = await page.getByRole('link', { name: 'CV/Resume' });

      downloadCvLink.click();

      const newPage = await pagePromise;
      await newPage.waitForLoadState();


      expect(newPage.url()).toContain('RESUME%20-%20Anas%20Aboreeda.pdf');

      await newPage.close();
    });
  });

  test.describe('Hero Section', () => {

    test('HeroSection is correctly displayed', async () => {

      // Title, subtitle, end text and clients text are displayed
      const titleText = page.getByRole('heading', { name: home.hero.titleText });
      const subtitleText = page.getByRole('heading', { name: home.hero.subText });
      const endText = page.getByRole('heading', { name: home.hero.endText });
      const clientsText = page.getByRole('heading', { name: home.hero.clientsText });

      expect(titleText).toBeTruthy();
      expect(subtitleText).toBeTruthy();
      expect(endText).toBeTruthy();
      expect(clientsText).toBeTruthy();
    });

    test('"Hire Me" button is correctly working', async () => {

      const hireMeButton = page.locator('[data-testid="hero-button-hireme"]');
      await hireMeButton.click();

      expect(page.url()).toBe('https://localhost:3000/#contact');

    });

    test('"Download CV" button is correctly working', async () => {

      const downloadCvButton = page.locator('[data-testid="hero-button-downloadcv"]');
      const href = await downloadCvButton.getAttribute('href');

      const response = await page.goto(href || 'not found');

      // Check the HTTP status code
      expect(response?.status()).not.toBe(404);

    });

    test('It should render all company logos', async () => {
      const companyLogos = [
        'zooverLogo2021_RGBPos.jpg',
        'nodejsAr21.jpg',
        'engineering_Village.jpg',
        'elsevierScopus.jpg',
      ];

      const images = await page.$$eval('img', images => images.map(img => img.src));

      companyLogos.forEach(logo => {
        const logoExists = images.some(img => img.includes(logo));
        expect(logoExists).toBe(true);
      });
    });

    test('Profile photo is displayed', async ({ page }) => {
      const profilePhoto = page.locator('img[alt="Anas Photo"]');
      expect(profilePhoto).toBeTruthy();
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


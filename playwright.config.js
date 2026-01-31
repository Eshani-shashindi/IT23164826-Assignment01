const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').Config} */
const config = {
  testDir: './tests',
  
  /* Run tests in parallel */
  fullyParallel: false,
  
  /* Fail the build on GitHub if there are any test failures */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI 2 */
  retries: process.env.CI ? 2 : 0,
  
  /* Use 1 worker */
  workers: 1,
  
  /* Reporter to use */
  reporter: 'html',
  
  /* ONLY run on chromium - this fixes the 105 test issue */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

module.exports = config;
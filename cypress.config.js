const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // keep existing node event listeners (if any)
      return config;
    },

    // Screenshot settings
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },

  // Reporter configuration
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'OrangeHRM Test Report',
    inlineAssets: true,
  },
});

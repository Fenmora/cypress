const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // chromeWebSecurity: false,
    baseUrl: "https://platzi.com/",
    experimentalSessionAndOrigin: true,
    excludeSpecPattern: ["**/1-getting-started/*.js", "**/2-advanced-examples/*.js", "**/integration/*.js"],
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  viewportWidth: 1024,
  viewportHeight: 768,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "n7jmem",
  defaultCommandTimeout: 7000,
});

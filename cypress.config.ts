import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 200000,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 8000,
  chromeWebSecurity: true,

  env: {
    personService: "personservice",
    SafetyService: "safetyservice",
    clientService: "clientservice",
    mvrService: "mvrservice",
    prefix: "https://",
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

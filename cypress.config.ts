import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
      },
    baseUrl: 'https://uitestingplayground.com',
    // setupNodeEvents(on, config) {
    // },


    env:{
        stage:'https://stage.pasv.us/course',
        prod:'https://coding.pasv.us/course',
        info:'Hello World!',
        base:'https://uitestingplayground.com',
        expected:'https://play1.automationcamp.ir/expected_conditions.html',
        demoQA:'https://demoqa.com',
        herokuApp: 'https://the-internet.herokuapp.com',
        frameHW: 'https://play1.automationcamp.ir/frames.html',
    }

  },

    retries: {
        runMode: 3,
        openMode: 2,
    },
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    screenshotOnRunFailure: true,
    reporterOptions: {
        charts: true,
        reportPageTitle: 'LecturePASV',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    defaultCommandTimeout: 16_000,

});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    video: false,                   // rekam video semua run
    screenshotOnRunFailure: true,  // auto screenshot kalau gagal
    trashAssetsBeforeRuns: false,  // biar asset lama tidak terhapus
    videoCompression: false,       // kualitas video maksimal
     videosFolder: "cypress/reports/videos",        // simpan video di reports
    screenshotsFolder: "cypress/reports/screenshots", // simpan screenshot di reports
    setupNodeEvents(on, config) {
      // aktifkan plugin reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,                // tampilkan chart ringkasan
    reportPageTitle: "Test Report",
    embeddedScreenshots: true,   // embed screenshot di report
    inlineAssets: true           // CSS/JS ikut dibawa (report portable)
  }
});

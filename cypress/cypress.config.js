const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: 'cypress\screenshots', // Mengubah folder tangkapan layar
    video: true, // Mengaktifkan perekaman video
  },
})
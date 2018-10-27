module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: ["index.js", "routes/**/*.js", "app.js", "models/**/*.js", "!src/**/*.spec.js"]
  });
};

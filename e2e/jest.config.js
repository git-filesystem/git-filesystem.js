/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.spec.ts"],
  setupFiles: ["<rootDir>/setupFile.js"],
  testTimeout: 10000
};

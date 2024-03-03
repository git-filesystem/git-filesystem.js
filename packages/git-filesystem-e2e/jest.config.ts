/* eslint-disable */
export default {
  displayName: "git-filesystem-e2e",
  preset: "../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }]
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/packages/git-filesystem-e2e",
  setupFiles: ["<rootDir>/setupFile.js"],
  testTimeout: 10_000
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "^(\\.\\.?\\/.+)\\.js$": "$1",
  },
};

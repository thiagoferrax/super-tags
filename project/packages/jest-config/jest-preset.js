const tsJestPreset = require('ts-jest/jest-preset');
module.exports = {
    ...tsJestPreset,
    testEnvironment: "node",
    testMatch: ['**/test/**/*.test.ts(x)?'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts']
}
module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {"\\.ts$": ['ts-jest']},
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coverageThreshold: {
    "global": {
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  }
}
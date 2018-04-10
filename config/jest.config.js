module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  cacheDirectory: './cache',
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src', './'],
  moduleNameMapper: {
    '^mt-action-reducers': '<rootDir>/src/actions/reducers',
    '^mt-action-saga': '<rootDir>/src/actions/saga',
    '^mt-constants': '<rootDir>/src/constants',
    '^mt-sagas': '<rootDir>/src/sagas',
    '^mt-reducers': '<rootDir>/src/reducers',
    '^.+\\.(css|scss)$': '<rootDir>/test/__setup__/styleMock.js',
    '^(.+\\.(jpe?g|png|gif|ttf|eot|svg|md)|bootstrap.*)$':
      '<rootDir>/test/__setup__/fileMock.js',
    '^(expose|bundle)': '<rootDir>/test/__setup__/moduleMock.js',
  },
  setupFiles: [
    '<rootDir>/test/__setup__/shim.js',
    '<rootDir>/test/__setup__/index.js',
  ],
  setupTestFrameworkScriptFile: 'jest-enzyme/lib/index.js',
  testEnvironment: 'jest-environment-jsdom-global',
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  testURL: 'http://localhost:3000',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(redux-persist|lodash|redux-saga-wrappo|)/)',
  ],
  verbose: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 65,
  //     functions: 65,
  //     lines: 65,
  //     statements: 65,
  //   },
  // },
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}',
  // ],
};

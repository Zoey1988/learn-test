module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    'vee-validate/dist/rules': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!vee-validate/dist/rules)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    // '<rootDir>/pages/**/*.vue',
    // '<rootDir>/utils/**/*.js',
    '<rootDir>/store/*.js',
  ],
  testEnvironment: 'jsdom',
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  globals: {
    ['process.env.API_URL']: 'http://localhost:8000',
    ['process.env.MAPBOX_TOKEN']: 'test_token',
  },
};

module.exports = {
  rootDir: "../../",
  preset: "ts-jest",
  restoreMocks: true,
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  setupFilesAfterEnv: ["<rootDir>/config/test/setup.ts"],
  transform: {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "^.+\\.svg$": "<rootDir>/config/test/svgTransform.js",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/config/test/css.js",
  },
};

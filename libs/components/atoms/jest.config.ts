/* eslint-disable */
export default {
  displayName: "components-atoms",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": ["@swc/jest", { jsc: { transform: { react: { runtime: "automatic" } } } }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/components/atoms",
};

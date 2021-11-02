const base = require("@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

module.exports = {
    ...base,
    "ignorePatterns": ["src/webcam.js", "**/vendor/*.js"],
    "rules": {
        "no-unused-expressions": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
    }
};

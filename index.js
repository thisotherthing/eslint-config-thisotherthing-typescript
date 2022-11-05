module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {},
  rules: {
    "quotes": ["warn", "double", {
      "allowTemplateLiterals": true
    }],
    "indent": "off",
    "semi": ["error", "always"],
    "no-shadow": "error",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "prefer-const": "error",
    "object-shorthand": ["error", "always"],
    "eol-last": ["error", "always"],
    "no-useless-escape": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": ["error", {"functions": false, "classes": true, "variables": true, "typedefs": true}],
    "@typescript-eslint/no-inferrable-types": "off",
    "no-console": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "jsx-a11y/no-onchange": "warn",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off"
  },
  extends: [
    "plugin:import/recommended",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  env: {
    "browser": true,
    "node": true,
    "es6": true
  }
};

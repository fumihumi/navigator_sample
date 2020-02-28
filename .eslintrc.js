module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: { jsx: true },
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react-hooks", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/core-modules": ["app"],
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    }
  },
  rules: {
    yoda: ["error", "never", { exceptRange: true }],
    "react/prop-types": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/extensions": ["error", "always", { js: "never", jsx: "never", ts: "never", tsx: "never" }],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-interface": "off",
    "import/prefer-default-export": 0,
    "no-nested-ternary": 1,
    "prettier/prettier": [
      "error",
      {
        printWidth: 120
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["Ref$"]
      }
    ]
  }
};

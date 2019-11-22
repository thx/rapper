module.exports = {
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "import",
    "react",
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1,
        "MemberExpression": 1,
      }
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true,
        "ignoreProperties": true,
      }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-use-before-declare": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "off",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "camelcase": "off",
    "capitalized-comments": "off",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": [
      "error",
      '^(?!(any|Number|number|String|string|Boolean|boolean|Undefined|undefined)$).*$',
      {
        "onlyDeclarations": true,
      }
    ],
    "import/order": "off",
    "import/no-mutable-exports": "warn",
    "import/no-unused-modules": "error",
    "import/no-cycle": "error",
    "import/no-amd": "error",
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "ignorePattern": "^import |^export \\{(.*?)\\}|^[ ]*export const |`.*`|\".*\"",
        "code": 150
      }
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-import-side-effect": "off",
    "no-invalid-this": "error",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-null/no-null": "off",
    "no-shadow": [
      "off",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": [
      "warn",
    ],
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "off",
    "one-var": [
      "off",
      "never"
    ],
    "padding-line-between-statements": [
      "off",
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "prefer-const": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "radix": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "spaced-comment": ["error", "always", { "markers": ["/"] }],
    "use-isnan": "error",
    "valid-typeof": "off",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "import-blacklist": true,
          "import-spacing": true,
          "jsdoc-format": true,
          "no-reference-import": true,
          "one-line": [
            true,
            "check-catch",
            "check-else",
            "check-finally",
            "check-open-brace",
            "check-whitespace"
          ],
          "trailing-comma": [
            true,
            {
              "singleline": "never",
              "multiline": {
                "objects": "always",
                "arrays": "always",
                "functions": "never",
                "typeLiterals": "ignore"
              },
              "esSpecCompliant": true
            }
          ],
          "typedef": [
            true,
            "parameter",
            "property-declaration"
          ],
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type",
            "check-typecast"
          ]
        }
      }
    ],
    "react/jsx-no-bind": [
      2,
      {
        "ignoreDOMComponents": true,
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowFunctions": false,
        "allowBind": true
      }
    ],
    "react/jsx-boolean-value": [
      "error",
      "always"
    ],
    "react/jsx-curly-spacing": [
      "error",
      { "when": "never" }
    ],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-key": [2, { "checkFragmentShorthand": true }],
    "react/no-string-refs": [2, { "noTemplateLiterals": true }],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react/no-this-in-sfc": "error",
    "react/no-unsafe": "error",
    "react/no-typos": "error",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
      }
    ],
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": false
      }
    ],
  }
};

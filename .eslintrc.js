'use strict';

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    jsx: true,
    useJSXTextNode: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'vue',
    'import'
  ],
  rules: {
    // 'typescript/no-var-requires': 'off',
    //フォーマットが壊れる要調査 0にして無視する
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'import/order': 'error',
    'sort-imports': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/html-closing-bracket-newline': [ 'error', {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/max-attributes-per-line': [ 'error', {
        singleline: 5,
        multiline: { max: 1, allowFirstLine: false }
      }
    ],
    'vue/html-self-closing': [ 'error', {
        html: { void: 'any' }
      }
    ],
    'vue/html-indent': [ 'error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'import/newline-after-import': [ 'error', {
        count: 1
      }
    ],
    'no-spaced-func': 'error',
    'prefer-const': 'error', // 再代入がない限り const を強制
    'semi-spacing': [ 'error', {
        after: true,
        before: false
      }
    ],
    'semi-style': ['error', 'last'],
    semi: ['error', 'always'], // 末尾セミコロンを強制
    strict: 'off', // strict 強制を緩和
    'max-len': [ 'error', {
        code: 120,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};

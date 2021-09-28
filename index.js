module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  ignorePatterns: ['**/*.js', '**/*.d.ts'],
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    'react', 
    'react-hooks', 
    '@typescript-eslint', 
    'import-newlines'
  ],
  globals: {
    NodeJS: true,
    JSX: true,
  },
  rules: {
    // TYPESCRIPT
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
        exceptAfterOverload: true
      },
    ],

    // BASE ESLINT
    'brace-style': 'error',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'warn',
    'curly': ['error', 'multi', 'consistent'],
    'indent': 'error',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-properties': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': [
      'error', 
      {
        'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
        'ObjectPattern': { 'multiline': true },
        'ImportDeclaration':  { 'multiline': true, 'minProperties': 3 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
      }
    ],
    'object-property-newline': 'error',
    'padding-line-between-statements': [
      'error',
      { 
        blankLine: 'always', 
        prev: ['block-like', 'const', 'directive', 'let'], 
        next: '*' 
      },
      { 
        blankLine: 'any', 
        prev: ['const', 'let'], 
        next: ['const', 'let'] 
      },
    ],
    'sort-imports': ['error'],

    // PLUGINS
    'import/extensions': 'off',
    'import-newlines/enforce': [
      'error', 
      {
        items: 1,
        // 'max-len': 100,
        // semi: false
      }
    ],

    // JSX-A11Y
    'jsx-a11y/label-has-associated-control': [ 
      2, 
      {
        assert: 'either',
        depth: 3,
      }
    ],

    // REACT
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading':[
      'error', 
      {
        html: 'enforce',
        custom: 'ignore',
      }
    ],
    'react/jsx-no-useless-fragment': 'error',
  },
  overrides: [
    { 
      files: ['*.ts', '*.tsx'], 
      excludedFiles: ['*.d.ts'],
      rules: {
        'react/require-default-props': 'off',
      } 
    },
  ],
};

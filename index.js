module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['**/*.js'],
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  globals: {
    NodeJS: true,
    JSX: true,
    otherGlobal: true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi', 'consistent'],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'no-bitwise': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 3 },
        ObjectPattern: { multiline: true, minProperties: 3 },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
        consistent: true
      }
    ],

    // PRETTIER
    'prettier/prettier': [
      'error',
      {
        eslintIntegration: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'lf',
        proseWrap: 'always',
        htmlWhitespaceSensitivity: 'strict',
        requirePragma: false
      }
    ],

    // REACT
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore'
      }
    ],
    'react/jsx-no-useless-fragment': ['error'],

    // TYPESCRIPT
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true
      }
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
        exceptAfterOverload: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.d.ts'],
      rules: {
        'react/require-default-props': 'off'
      }
    }
  ]
};

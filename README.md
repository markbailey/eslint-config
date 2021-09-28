# ESLint Configuration

Hi!

## Installation

You can install using npm:

```
npm install @markbailey/eslint-config --save-dev
```

Do not have ESLint installed?

```
npm install eslint --save-dev
```

### Webpack

If you are using Webpack in your project, you may need to install the Webpack
plugin.

```
npm install eslint-webpack-plugin --save-dev
```

### Babel

If you are using Babel in your project, you may need to install the babel
plugin.

```
npm install babel-eslint --save-dev
```

## Usage

Before use please see below the minimum supported versions of dependencies, if
you have already installed them.

```
"eslint-plugin-import": "^2.22.1",
```

You will need to create a `.eslintrc.js` file. See the examples below:

For the default configuration.

```
module.exports  = {
  root: true,
  extends: ['@markbailey']
};
```

If you are using Typescript with a `tsconfig.json` file, your config file should
look something like this:

```
module.exports  = {
  root: true,
  extends: ['@markbailey'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  }
};
```

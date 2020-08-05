module.exports = {
  env: {
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  globals: {
    deps: true,
  },
  parserOptions: {
    //ecmaVersion: 2018,
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'warn',
  },
  root: true,
};

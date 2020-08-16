const isCi = !!process.env.CI;
const isTerm = !!process.env.TERM;

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
    // ecmaVersion: 2018,
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': isCi ? 'error' : 'warn',
  },
  root: true,
};

if (isTerm) {
  console.error(module.exports);
}

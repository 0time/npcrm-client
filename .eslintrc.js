const eslintRcJs = require('@0ti.me/test-deps/configuration-templates/eslintrc.js');

module.exports = Object.assign({}, eslintRcJs, {
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  parserOptions: { parser: 'babel-eslint' },
  root: true,
});

// This just prints everything if you execute this directly like so:
//   node .eslintrc.js
if (require.main === module) {
  console.error(module.exports); // eslint-disable-line no-console
}

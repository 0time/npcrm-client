// TODO: Figure out how to deal with this in prod so we're not bringing in lodash
// dependencies
const merge = require('lodash.merge');

const { NODE_ENV } = process.env;

const noop = () => undefined;

let defaultConfig = {};
let nodeEnvConfig = {};
let localConfig = {};

try {
  defaultConfig = require('./default');
} catch (err) {
  noop();
}

try {
  nodeEnvConfig = require(`./${NODE_ENV}`);
} catch (err) {
  noop();
}

try {
  localConfig = require('./local');
} catch (err) {
  noop();
}

module.exports = merge({}, defaultConfig, nodeEnvConfig, localConfig);

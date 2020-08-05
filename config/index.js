// TODO: Figure out how to deal with this in prod so we're not bringing in lodash
// dependencies
const merge = require('lodash.merge');

const {NODE_ENV} = process.env;

if (!NODE_ENV) {
  console.error(`NODE_ENV was unexpectedly ${NODE_ENV}`);
}

const defaultConfig = require('./default');
const nodeEnvConfig = require(`./${NODE_ENV}`);
const localConfig = require('./local');

module.exports = merge({}, defaultConfig, nodeEnvConfig, localConfig);

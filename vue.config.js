const config = require('./config');

module.exports = {
  devServer: {
    proxy: {
      [`^${config.apiServer.basePath}`]: {
        target: config.apiServer.uri,
        ws: true,
        changeOrigin: true,
      },
    },
  },
  runtimeCompiler: true,
};

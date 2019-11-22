const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const { PROXY, MOCK, RAPID } = process.env;
  const proxyOptions = {
    target: PROXY,
    changeOrigin: true,
    logLevel: 'debug',
    ws: true,
    xfwd: true,
  };

  if (( MOCK && MOCK !== 'false' ) && RAPID) {
    Object.assign(proxyOptions, {
      target: 'https://rap2api.alibaba-inc.com',
      pathRewrite(path, req) {
        return `/app/mock/${RAPID}/${req.method}${path}`
      }
    });
  }

  if (proxyOptions.target) {
    app.use(
      proxy(['**/*.json', '**/*.do'], {
        ...proxyOptions
      })
    );
  }
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api|/avatar',
    createProxyMiddleware({
      target: process.env.API_PROXY || 'http://localhost:8000',
      changeOrigin: true,
    }),
  );
};

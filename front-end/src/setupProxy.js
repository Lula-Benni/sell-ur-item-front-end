import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8182',
            changeOrigin: true,
        })
    );
    app.use(
        '/home',
        createProxyMiddleware({
            target: 'http://localhost:8182',
            changeOrigin: true,
        })
    );
};
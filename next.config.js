/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
  },
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: ['*', 'avatars.githubusercontent.com', 'localhost', '127.0.0.1', 'image.tmdb.org'],
  },
})

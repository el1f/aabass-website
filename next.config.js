const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                active: false, 
                name: 'cleanupIDs',
              },
              {
                active: false, 
                name: 'collapseGroups',
              }
            ]
          }
        }
      }]
    })
    return config
  }
}

module.exports = nextConfig
